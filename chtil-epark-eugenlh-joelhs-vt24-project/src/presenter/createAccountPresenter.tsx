import { observer } from "mobx-react-lite";
import { Model } from "../model/Model";
import CreateAccountView, {
  CreateAccountViewProps,
} from "../views/authentification/createAccountView";
import LoadingScreenView from "../views/ui/loadingScreenView";

const CreateAccountPresenter = observer(function (props: { model: Model }) {
  const createAccountViewProps: CreateAccountViewProps = {
    email: props.model.createAccountState.email,
    password: props.model.createAccountState.password,
    repeatPassword: props.model.createAccountState.repeatPassword,
    setEmail: handleEmailChange,
    setPassword: handlePasswordChange,
    setRepeatPassword: handleRepeatPasswordChange,
    errorMessage: props.model.createAccountState.errorMessage,
    handleCreateAccount: handleCreateAccount,
    isPasswordMatching: props.model.createAccountState.isPasswordMatching(),
  };

  return props.model.createAccountState.isRegistering ? (
    <LoadingScreenView error={null} />
  ) : (
    <CreateAccountView {...createAccountViewProps} />
  );
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.model.createAccountState.setEmail(event.target.value);
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.model.createAccountState.setPassword(event.target.value);
  }
  function handleRepeatPasswordChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    props.model.createAccountState.setRepeatPassword(event.target.value);
  }

  function handleCreateAccount() {
    props.model.createAccountState.handleCreateAccount();
  }
});

export default CreateAccountPresenter;
