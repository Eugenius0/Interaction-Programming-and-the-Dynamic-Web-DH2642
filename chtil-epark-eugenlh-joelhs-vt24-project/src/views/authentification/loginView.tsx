import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "../../../static/logos/google-icon.png";

export type LoginViewProps = {
  email: string;
  errorMessage: string | null;
  password: string;

  setEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setErrorMessage: (errorMessage: string) => void;
  handleLogin: (method: "Google" | "Email") => void;
};

function LoginView(props: LoginViewProps) {
  return (
    <Container
      sx={{
        marginTop: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
      maxWidth="sm"
    >
      <Typography variant="h3">Login</Typography>
      {props.errorMessage && (
        <Box sx={{ width: "80%" }}>
          <Typography color="error">{props.errorMessage}</Typography>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "80%",
          textAlign: "center",
        }}
      >
        <TextField
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          value={props.email}
          onChange={props.setEmail}
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={props.password}
          onChange={props.setPassword}
        />
        <Box sx={{ marginTop: 1 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => props.handleLogin("Email")}
          >
            Login
          </Button>
        </Box>

        <Typography>OR</Typography>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => props.handleLogin("Google")}
          startIcon={<img src={GoogleIcon} alt="Google" width="24" />}
        >
          Sign In
        </Button>
      </Box>
      <Typography variant="body2">
        {"Don't have an account? "}
        <Link href="/createAccount">Create Account</Link>
      </Typography>
    </Container>
  );
}

export default LoginView;
