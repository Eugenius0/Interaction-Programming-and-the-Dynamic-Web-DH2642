import {
  DataSnapshot,
  get,
  getDatabase,
  off,
  onValue,
  ref,
  set,
} from "firebase/database";
import { app, auth } from "./firebaseConfig";
import { Model } from "./model/Model";
import { reaction } from "mobx";
import { defaultGame } from "./model/helpers/gameHelpers";
import { User, onAuthStateChanged } from "firebase/auth";

const db = getDatabase(app);

function modelToPersistence(model: Model) {
  const gameState = model.gamePromiseState.data;

  if (!gameState) {
    return null;
  }

  const persistenceModel = {
    highScores: model.highScores,
    results: gameState?.results || [],
    deckIndex: gameState?.deckIndex,
    deck: gameState?.deck || [],
    currentStreak: gameState?.currentStreak,
    highestStreak: gameState?.highestStreak,
    timeElapsed: gameState?.timeElapsed,
    currentGame: model.currentGame,
    categoryCountry: gameState?.categoryCountry || null,
    categoryCountryFlag: gameState?.categoryCountryFlag || null,
  };
  return persistenceModel;
}

function persistenceToModel(persistenceModel: any, model: Model) {
  if (persistenceModel) {
    if (!model.gamePromiseState.data) {
      model.gamePromiseState.data = defaultGame;
    }
    model.highScores = persistenceModel.highScores;
    model.currentGame = persistenceModel?.currentGame;
    model.gamePromiseState.data.results = persistenceModel.results || [];
    model.gamePromiseState.data.deckIndex = persistenceModel.deckIndex;
    model.gamePromiseState.data.deck = persistenceModel.deck || [];
    model.gamePromiseState.data.currentStreak = persistenceModel.currentStreak;
    model.gamePromiseState.data.highestStreak = persistenceModel.highestStreak;
    model.gamePromiseState.data.timeElapsed = persistenceModel.timeElapsed;
    model.gamePromiseState.data.categoryCountry =
      persistenceModel.categoryCountry;
    model.gamePromiseState.data.categoryCountryFlag =
      persistenceModel.categoryCountryFlag;
  }

  return model;
}

function readFromFirebase(model: Model) {
  model.ready = false;
  return get(ref(db, "user/" + model.user?.uid + "/model"))
    .then(convertModel)
    .then(setModelReady)
    .catch(errorACB);

  function errorACB(e: any) {
    console.error(e);
  }

  function convertModel(snapshot: DataSnapshot) {
    const firebaseModel = snapshot.val();
    return persistenceToModel(firebaseModel, model);
  }

  function setModelReady(modelObj: Model) {
    modelObj.ready = true;
    return modelObj;
  }
}

function saveToFirebase(model: Model) {
  if (model.ready && model.user) {
    const persistenceModel = modelToPersistence(model);
    if (!persistenceModel) {
      return;
    }
    set(ref(db, "user/" + model.user?.uid + "/model"), persistenceModel);
  }
}

function connectLeaderboards(model: Model) {
  const factOrFictionRef = ref(db, "leaderboards/FactOrFiction");
  const countryQuestRef = ref(db, "leaderboards/CountryQuest");
  const categoryQuestRef = ref(db, "leaderboards/CategoryQuest");

  onValue(factOrFictionRef, (snapshot: DataSnapshot) => {
    model.leaderboards.factOrFiction = snapshot.val() || [];
  });

  onValue(countryQuestRef, (snapshot: DataSnapshot) => {
    model.leaderboards.countryQuest = snapshot.val() || [];
  });

  onValue(categoryQuestRef, (snapshot: DataSnapshot) => {
    model.leaderboards.categoryQuest = snapshot.val() || [];
  });
}

function connectModel(model: Model) {
  onValue(
    ref(db, "user/" + model.user?.uid + "/model"),
    (snapshot: DataSnapshot) => {
      model.ready = false;
      model = persistenceToModel(snapshot.val(), model);
      model.ready = true;
    }
  );
}

export function connectToFirebase(model: Model) {
  model.ready = false;

  onAuthStateChanged(auth, handleUserChangeACB);
  reaction(getPropertiesACB, handleChangeACB);

  function getPropertiesACB() {
    const gameState = model.gamePromiseState.data;
    if (!gameState?.results?.length) {
      return [
        model.highScores.categoryQuest,
        model.highScores.countryQuest,
        model.highScores.factOrFiction,
      ];
    }
    return [
      gameState?.results.length,
      model.highScores.categoryQuest,
      model.highScores.countryQuest,
      model.highScores.factOrFiction,
    ];
  }
  function handleChangeACB() {
    saveToFirebase(model);
  }
  function handleUserChangeACB(user: User | null | undefined) {
    if (user) {
      model.user = user;
      readFromFirebase(model);
      connectLeaderboards(model);
      connectModel(model);
    } else {
      off(ref(db, "leaderboards/FactOrFiction"));
      off(ref(db, "leaderboards/CountryQuest"));
      off(ref(db, "leaderboards/CategoryQuest"));
      off(ref(db, "user/" + model.user?.uid + "/model"));
      model.user = null;
    }
  }
}
