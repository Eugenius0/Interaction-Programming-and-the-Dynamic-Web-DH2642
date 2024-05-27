export type LoginState = {
  email: string;
  password: string;
  isSigningIn: boolean;
  errorMessage: string | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setIsSigningIn: (isSigningIn: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  handleLogin: (method: "Google" | "Email") => void;
  handleLogout: () => void;
  handleRegister: () => void;
};
