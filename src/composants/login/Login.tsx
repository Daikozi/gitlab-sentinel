import { Alert, Box, Button, TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import * as styles from "./styles";
import { useLoginInfos } from "../../hooks/useLoginInfos";
import { useMergeRequests } from "../../hooks/useMergeRequests";

const Login: FC = () => {
  const { loginInfos, setLoginInfos } = useLoginInfos();
  const { refetch, isError } = useMergeRequests();

  const { domain, token, username } = loginInfos;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    refetch();
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setLoginInfos({ ...loginInfos, [id]: value });
  };

  return (
    <Box css={styles.loginContainer} component="form" onSubmit={handleSubmit}>
      <TextField
        id="username"
        label="Gitlab Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => handleInputChange(e)}
        required
      />
      <TextField
        id="token"
        label="Private Token"
        variant="outlined"
        fullWidth
        value={token}
        onChange={(e) => handleInputChange(e)}
        required
        type="password"
      />
      <TextField
        id="domain"
        label="Domain"
        variant="outlined"
        fullWidth
        value={domain}
        onChange={(event) => handleInputChange(event)}
      />
      <Button type="submit" fullWidth variant="outlined">
        Submit
      </Button>
      {isError && (
        <Alert css={styles.alert} severity="error" variant="filled">
          Something went wrong
        </Alert>
      )}
    </Box>
  );
};
export default Login;
