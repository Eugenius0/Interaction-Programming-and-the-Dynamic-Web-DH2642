import { getCountryQuestGameState } from "./helpers/countryQuestHelper";
import { getFactOrFictionGameState } from "./helpers/factOrFictionHelper";
import { getCategoryQuestGameState } from "./helpers/categoryQuestHelper";
import { resolvePromise, PromiseState } from "./helpers/resolvePromise";
import { GameState } from "./types/gameStateTypes";
import { HighScore } from "./types/leaderboardTypes";
import { NavbarState } from "./types/navbarTypes";
import { LoginState } from "./types/loginState";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSignOut,
} from "../auth";
import { User } from "firebase/auth";
import { CreateAccountState } from "./types/createAccountStateTypes";

export type Model = {
  ready: boolean;
  currentGame?: "factOrFiction" | "countryQuest" | "categoryQuest";
  gamePromiseState: PromiseState<GameState>;
  highScores: {
    factOrFiction: number | null;
    countryQuest: number | null;
    categoryQuest: number | null;
  };
  leaderboards: {
    selectedCategory: "factOrFiction" | "countryQuest" | "categoryQuest";
    setSelectedCategory: (
      newCategory: "factOrFiction" | "countryQuest" | "categoryQuest"
    ) => void;
    factOrFiction: HighScore[];
    countryQuest: HighScore[];
    categoryQuest: HighScore[];
  };
  navbarState: NavbarState;
  loginState: LoginState;
  createAccountState: CreateAccountState;
  user?: User | null;
  setUser: (user: User | null) => void;
  startFactOrFictionGame: () => void;
  startCountryQuestGame: () => void;
  startCategoryQuestGame: () => void;
  updateHighScores: () => void;
  getHighscore: (
    game: "FactOrFiction" | "CountryQuest" | "CategoryQuest"
  ) => number | null;
  updateLeaderboards: () => void;
};

export const model: Model = {
  ready: false,
  gamePromiseState: {
    promise: null,
    data: null,
    error: null,
  },
  highScores: {
    factOrFiction: null,
    categoryQuest: null,
    countryQuest: null,
  },
  leaderboards: {
    selectedCategory: "factOrFiction",
    setSelectedCategory(
      newCategory: "factOrFiction" | "countryQuest" | "categoryQuest"
    ) {
      this.selectedCategory = newCategory;
    },
    categoryQuest: [],
    countryQuest: [],
    factOrFiction: [],
  },
  navbarState: {
    open: false,
    anchorElUser: null,
    setAnchorElUser(element) {
      this.anchorElUser = element;
    },
    openUserMenu() {
      this.open = true;
    },
    closeUserMenu() {
      this.open = false;
    },
  },
  loginState: {
    email: "",
    password: "",
    errorMessage: null,
    isSigningIn: false,
    setEmail(email) {
      this.email = email;
    },
    setPassword(password) {
      this.password = password;
    },
    setIsSigningIn(isSigningIn) {
      this.isSigningIn = isSigningIn;
    },
    setErrorMessage(errorMessage: string) {
      this.errorMessage = errorMessage;
    },
    handleLogin(method) {
      this.setIsSigningIn(true);

      switch (method) {
        case "Google": {
          doSignInWithGoogle()
            .then(() => {
              this.setIsSigningIn(false);
            })
            .catch(() => {
              this.setIsSigningIn(false);
              this.setErrorMessage(
                "Oops your login failed :-(. Try again using different credentials!"
              );
            });
        }
        case "Email": {
          doSignInWithEmailAndPassword(this.email, this.password)
            .then(() => {
              this.setIsSigningIn(false);
            })
            .catch(() => {
              this.setIsSigningIn(false);
              this.setErrorMessage(
                "Oops your login failed :-(. Try again using different credentials!"
              );
            });
        }
      }
    },
    handleLogout() {
      doSignOut();
    },
    handleRegister() {
      doCreateUserWithEmailAndPassword(this.email, this.password);
    },
  },
  createAccountState: {
    email: "",
    password: "",
    repeatPassword: "",
    isCreatingAccount: false,
    errorMessage: null,
    isRegistering: false,
    setEmail(email) {
      this.email = email;
    },
    setPassword(password) {
      this.password = password;
    },
    setRepeatPassword(repeatPassword) {
      this.repeatPassword = repeatPassword;
    },
    setIsCreatingAccount(isCreatingAccount) {
      this.isCreatingAccount = isCreatingAccount;
    },
    setErrorMessage(errorMessage) {
      this.errorMessage = errorMessage;
    },
    handleCreateAccount() {
      doCreateUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.setIsCreatingAccount(false);
        })
        .catch(() => {
          this.setIsCreatingAccount(false);
          this.setErrorMessage(
            "Oops your account creation failed :-(. Try again using different credentials!"
          );
        });
    },
    setIsRegistering(isRegistering) {
      this.isRegistering = isRegistering;
    },
    isPasswordMatching() {
      return this.password === this.repeatPassword;
    },
  },
  setUser(user) {
    this.user = user;
  },
  startFactOrFictionGame() {
    this.currentGame = "factOrFiction";
    resolvePromise(getFactOrFictionGameState(), this.gamePromiseState);
  },
  startCountryQuestGame() {
    this.currentGame = "countryQuest";
    resolvePromise(getCountryQuestGameState(), this.gamePromiseState);
  },
  startCategoryQuestGame() {
    this.currentGame = "categoryQuest";
    resolvePromise(getCategoryQuestGameState(), this.gamePromiseState);
  },
  updateHighScores() {
    let currentScore = this.gamePromiseState.data!.getScore();
    if (this.gamePromiseState.data!.isGameFinished()) {
      currentScore += this.gamePromiseState.data!.calculateTimeBonus(
        this.gamePromiseState.data!.timeElapsed,
        this.gamePromiseState.data!.timeLimit
      );
    }
    switch (this.currentGame) {
      case "factOrFiction": {
        if (this.highScores.factOrFiction) {
          this.highScores.factOrFiction = Math.max(
            this.highScores.factOrFiction,
            currentScore
          );
        } else {
          this.highScores.factOrFiction = currentScore;
        }
        break;
      }
      case "countryQuest": {
        if (this.highScores.countryQuest) {
          this.highScores.countryQuest = Math.max(
            this.highScores.countryQuest,
            currentScore
          );
        } else {
          this.highScores.countryQuest = currentScore;
        }
        break;
      }
      case "categoryQuest": {
        if (this.highScores.categoryQuest) {
          this.highScores.categoryQuest = Math.max(
            this.highScores.categoryQuest,
            currentScore
          );
        } else {
          this.highScores.categoryQuest = currentScore;
        }
        break;
      }
    }
    this.updateLeaderboards();
  },
  getHighscore(game) {
    switch (game) {
      case "FactOrFiction":
        return this.highScores.factOrFiction;
      case "CountryQuest":
        return this.highScores.countryQuest;
      case "CategoryQuest":
        return this.highScores.categoryQuest;
    }
  },

  updateLeaderboards() {
    const userIndexFactOrFiction = this.leaderboards.factOrFiction.findIndex(
      (leaderboardItem) => {
        return leaderboardItem.uid === this.user?.uid;
      }
    );

    if (userIndexFactOrFiction > -1) {
      if (this.highScores.factOrFiction) {
        this.leaderboards.factOrFiction[userIndexFactOrFiction].score =
          Math.max(
            this.highScores.factOrFiction,
            this.leaderboards.factOrFiction[userIndexFactOrFiction].score
          );
      }
    } else {
      if (this.highScores.factOrFiction) {
        this.leaderboards.factOrFiction.push({
          uid: this.user!.uid,
          displayName:
            this.user?.displayName || this.user?.email?.split("@")[0] || "",
          userAvatar: this.user?.photoURL || "",
          score: this.highScores.factOrFiction,
        });
      }
    }

    // ---------------

    const userIndexCategoryQuest = this.leaderboards.categoryQuest.findIndex(
      (leaderboardItem) => {
        return leaderboardItem.uid === this.user?.uid;
      }
    );

    if (userIndexCategoryQuest > -1) {
      if (this.highScores.categoryQuest) {
        this.leaderboards.categoryQuest[userIndexCategoryQuest].score =
          Math.max(
            this.highScores.categoryQuest,
            this.leaderboards.categoryQuest[userIndexCategoryQuest].score
          );
      }
    } else {
      if (this.highScores.categoryQuest) {
        this.leaderboards.categoryQuest.push({
          uid: this.user!.uid,
          displayName:
            this.user?.displayName || this.user?.email?.split("@")[0] || "",
          userAvatar: this.user?.photoURL || "",
          score: this.highScores.categoryQuest,
        });
      }
    }

    // ---------------

    const userIndexCountryQuest = this.leaderboards.countryQuest.findIndex(
      (leaderboardItem) => {
        return leaderboardItem.uid === this.user?.uid;
      }
    );

    if (userIndexCountryQuest > -1) {
      if (this.highScores.countryQuest) {
        this.leaderboards.countryQuest[userIndexCountryQuest].score = Math.max(
          this.highScores.countryQuest,
          this.leaderboards.countryQuest[userIndexCountryQuest].score
        );
      }
    } else {
      if (this.highScores.countryQuest) {
        this.leaderboards.countryQuest.push({
          uid: this.user!.uid,
          displayName:
            this.user?.displayName || this.user?.email?.split("@")[0] || "",
          userAvatar: this.user?.photoURL || "",
          score: this.highScores.countryQuest,
        });
      }
    }
  },
};
