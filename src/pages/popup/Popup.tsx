import { FC } from "react";
import gitlabLogo from "../../assets/gitlab.png";

import * as styles from "./styles";
import { Typography } from "@mui/material";
import Login from "../../composants/login/Login";

const Popup: FC = () => {
  const isIdentified = false;

  return (
    <div css={styles.popupContainer}>
      <div>
        <a href="https://github.com/Daikozi/gitlab-helper" target="_blank">
          <img src={gitlabLogo} css={styles.logo(isIdentified)} alt="logo" />
        </a>
      </div>
      <Typography
        component="h1"
        css={styles.title(isIdentified)}
        textAlign="center">
        Gitlab Sentinel
      </Typography>
      <Login />
    </div>
  );
};
export default Popup;
