import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { LoginInfo } from "../../types";
import * as styles from "./styles";

const Login: FC = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>(() =>
    localStorage.getItem("loginInfo")
      ? JSON.parse(localStorage.getItem("loginInfo") ?? "")
      : {
          domaine: "",
          token: "",
          username: "",
        }
  );

  const { domain, token, username } = loginInfo;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setLoginInfo((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
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
        Submit!
      </Button>
    </Box>
  );
};
export default Login;
