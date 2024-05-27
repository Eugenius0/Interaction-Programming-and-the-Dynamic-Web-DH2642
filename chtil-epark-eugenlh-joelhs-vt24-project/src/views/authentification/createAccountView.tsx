import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Container,
} from "@mui/material";

export type CreateAccountViewProps = {
  email: string;
  password: string;
  repeatPassword: string;
  errorMessage: string | null;
  isPasswordMatching: boolean;

  handleCreateAccount: () => void;
  setEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setRepeatPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function CreateAccountView(props: CreateAccountViewProps) {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Create Account</Typography>
        <Box mt={2}>
          {props.errorMessage && (
            <Typography variant="body2" color="error">
              {props.errorMessage}
            </Typography>
          )}
        </Box>
        <TextField
          margin="normal"
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
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={props.password}
          onChange={props.setPassword}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="repeatPassword"
          label="Repeat Password"
          type="password"
          id="repeat-password"
          autoComplete="new-password"
          value={props.repeatPassword}
          onChange={props.setRepeatPassword}
          error={!props.isPasswordMatching}
          helperText={!props.isPasswordMatching && "Passwords do not match"}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          onClick={props.handleCreateAccount}
          sx={{ marginTop: 2 }}
        >
          Create Account
        </Button>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2">
            Already have an account? <Link href="/">Go back to Login</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default CreateAccountView;
