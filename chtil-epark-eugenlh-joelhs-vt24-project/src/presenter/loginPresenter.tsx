import { observer } from "mobx-react-lite";
import { Model } from "../model/Model";
import LoginView, { LoginViewProps } from "../views/authentification/loginView";
import LoadingScreenView from "../views/ui/loadingScreenView";

const LoginPresenter = observer(function (props: { model: Model }) {
  const handleLogin = props.model.loginState.handleLogin.bind(
    props.model.loginState
  );
  const loginViewProps: LoginViewProps = {
    email: props.model.loginState.email,
    password: props.model.loginState.password,
    setEmail: handleEmailChange,
    setPassword: handlePasswordChange,
    errorMessage: props.model.loginState.errorMessage,
    setErrorMessage: props.model.loginState.setErrorMessage,
    handleLogin: handleLogin,
  };
  return props.model.user === undefined ||
    props.model.loginState.isSigningIn ? (
    <LoadingScreenView error={null} />
  ) : (
    <LoginView {...loginViewProps} />
  );

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.model.loginState.setEmail(event.target.value);
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.model.loginState.setPassword(event.target.value);
  }
});

export default LoginPresenter;
