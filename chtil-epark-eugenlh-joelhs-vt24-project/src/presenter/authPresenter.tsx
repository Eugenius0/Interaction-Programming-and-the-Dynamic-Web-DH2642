import { useState } from "react";
import LoginView, { LoginViewProps } from "../views/authentification/loginView";
import CreateAccountView, {
  CreateAccountViewProps,
} from "../views/authentification/createAccountView";

import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

type AuthPresenterProps = {
  auth: Auth;
};

export function AuthPresenter(props: AuthPresenterProps) {
  const [loginTab, setLoginTab] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function handleRepeatPasswordChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setRepeatPassword(event.target.value);
  }
  function switchToCreateAccount() {
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setLoginTab(false);
  }
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(props.auth, provider).catch(handleErrorACB);
  }
  function handleEmailLogin() {
    signInWithEmailAndPassword(props.auth, email, password).catch(
      handleErrorACB
    );
  }
  function handleCreateAccount() {
    createUserWithEmailAndPassword(props.auth, email, password).catch(
      handleErrorACB
    );
  }

  function handleErrorACB() {
    setErrorMessage(
      "Oops something went wrong :-(. Try again using different credentials!"
    );
  }

  const isPasswordMatching = password === repeatPassword;

  const loginViewProps: LoginViewProps = {
    email,
    errorMessage,
    handleEmailChange,
    password,
    handlePasswordChange,
    switchToCreateAccount,
    handleGoogleLogin,
    handleEmailLogin,
  };

  const createAccountViewProps: CreateAccountViewProps = {
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    repeatPassword,
    handleRepeatPasswordChange,
    errorMessage,
    handleCreateAccount,
    isPasswordMatching,
  };

  return loginTab ? (
    <LoginView {...loginViewProps} />
  ) : (
    <CreateAccountView {...createAccountViewProps} />
  );
}
