import {
  DataSnapshot,
  get,
  getDatabase,
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
    results: gameState?.results,
    deckIndex: gameState?.deckIndex,
    deck: gameState?.deck,
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
  if (persistenceModel?.highScores) {
    model.highScores = persistenceModel.highScores;
  }

  if (persistenceModel?.currentGame) {
    model.currentGame = persistenceModel.currentGame;
  }

  if (persistenceModel) {
    model.gamePromiseState.data = defaultGame;

    if (persistenceModel.results)
      model.gamePromiseState.data.results = persistenceModel.results;

    if (persistenceModel.deckIndex)
      model.gamePromiseState.data.deckIndex = persistenceModel.deckIndex;

    if (persistenceModel.deck)
      model.gamePromiseState.data.deck = persistenceModel.deck;

    if (persistenceModel.currentStreak)
      model.gamePromiseState.data.currentStreak =
        persistenceModel.currentStreak;

    if (persistenceModel.highestStreak)
      model.gamePromiseState.data.highestStreak =
        persistenceModel.highestStreak;

    if (persistenceModel.timeElapsed)
      model.gamePromiseState.data.timeElapsed = persistenceModel.timeElapsed;

    if (persistenceModel.categoryCountry)
      model.gamePromiseState.data.categoryCountry =
        persistenceModel.categoryCountry;

    if (persistenceModel.categoryCountryFlag)
      model.gamePromiseState.data.categoryCountryFlag =
        persistenceModel.categoryCountryFlag;
  }

  return model;
}

function leaderboardToPersistence(
  model: Model,
  gameMode: "FactOrFiction" | "CategoryQuest" | "CountryQuest"
) {
  switch (gameMode) {
    case "FactOrFiction":
      return model.leaderboards.factOrFiction;
    case "CategoryQuest":
      return model.leaderboards.categoryQuest;
    case "CountryQuest":
      return model.leaderboards.countryQuest;
  }
}

function persistenceToLeaderboard(
  persistenceModel: any,
  model: Model,
  gameMode: "FactOrFiction" | "CategoryQuest" | "CountryQuest"
) {
  if (persistenceModel) {
    switch (gameMode) {
      case "FactOrFiction":
        model.leaderboards.factOrFiction = persistenceModel || [];
        break;
      case "CountryQuest":
        model.leaderboards.countryQuest = persistenceModel || [];
        break;
      case "CategoryQuest":
        model.leaderboards.categoryQuest = persistenceModel || [];
        break;
    }
  }
}

function saveHighscoreToFirebase(
  model: Model,
  gameMode: "FactOrFiction" | "CountryQuest" | "CategoryQuest"
) {
  if (model.ready) {
    const persistenceLeaderboard = leaderboardToPersistence(model, gameMode);
    if (persistenceLeaderboard) {
      set(ref(db, "leaderboards/" + gameMode), persistenceLeaderboard);
    }
  }
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
    return persistenceToModel(snapshot.val(), model);
  }

  function setModelReady(modelObj: Model) {
    modelObj.ready = true;
    return modelObj;
  }
}

function saveToFirebase(model: Model) {
  if (model.ready) {
    const persistenceModel = modelToPersistence(model);
    if (!persistenceModel) {
      return;
    }
    set(ref(db, "user/" + model.user?.uid + "/model"), persistenceModel);
  }
}

export function connectLeaderboards(model: Model) {
  const factOrFictionRef = ref(db, "leaderboards/FactOrFiction");
  const countryQuestRef = ref(db, "leaderboards/CountryQuest");
  const categoryQuestRef = ref(db, "leaderboards/CategoryQuest");

  onValue(factOrFictionRef, (snapshot: DataSnapshot) => {
    const persistenceModel = snapshot.val();
    persistenceToLeaderboard(persistenceModel, model, "FactOrFiction");
  });

  onValue(countryQuestRef, (snapshot: DataSnapshot) => {
    const persistenceModel = snapshot.val();
    persistenceToLeaderboard(persistenceModel, model, "CountryQuest");
  });

  onValue(categoryQuestRef, (snapshot: DataSnapshot) => {
    const persistenceModel = snapshot.val();
    persistenceToLeaderboard(persistenceModel, model, "CategoryQuest");
  });
}

export function connectToFirebase(model: Model) {
  model.ready = false;

  reaction(getPropertiesACB, handleChangeACB);
  reaction(getFactOrFictionPropertyACB, () => {
    saveHighscoreToFirebase(model, "FactOrFiction");
  });
  reaction(getCountryQuestPropertyACB, () =>
    saveHighscoreToFirebase(model, "CountryQuest")
  );
  reaction(getCategoryQuestPropertyACB, () =>
    saveHighscoreToFirebase(model, "CategoryQuest")
  );

  onAuthStateChanged(auth, (user: User | null) => {
    model.setUser(user);
    if (user) {
      readFromFirebase(model);
    } else {
      model.ready = true;
      model.user = null;
    }
  });

  function getPropertiesACB() {
    const gameState = model.gamePromiseState.data;

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
  function getFactOrFictionPropertyACB() {
    return [model.highScores.factOrFiction];
  }
  function getCountryQuestPropertyACB() {
    return [model.highScores.countryQuest];
  }
  function getCategoryQuestPropertyACB() {
    return [model.highScores.categoryQuest];
  }
}
