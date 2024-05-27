export type CreateAccountState = {
  email: string;
  password: string;
  repeatPassword: string;
  isRegistering: boolean;
  isCreatingAccount: boolean;
  errorMessage: string | null;
  setEmail: (email: string) => void;
  setIsRegistering: (isRegistering: boolean) => void;
  setPassword: (password: string) => void;
  setRepeatPassword: (repeatPassword: string) => void;
  setIsCreatingAccount: (isCreatingAccount: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  handleCreateAccount: () => void;
  isPasswordMatching: () => boolean;
};
