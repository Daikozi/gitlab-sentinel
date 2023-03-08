import { FC, useEffect } from "react";
import gitlabLogo from "../../assets/gitlab.png";

import * as styles from "./styles";
import { CircularProgress, Typography } from "@mui/material";
import Login from "../../composants/login/Login";
import { useMergeRequests } from "../../hooks/useMergeRequests";
import { useIdentification } from "../../hooks/useIdentification";
import MergeRequests from "../../composants/mergeRequests/MergeRequests";

const Popup: FC = () => {
  const { isIdentified, setIsIdentified } = useIdentification();

  const { isLoading, isSuccess } = useMergeRequests();

  useEffect(() => {
    if (isSuccess) {
      setIsIdentified(true);
    }
  }, [isSuccess]);

  return (
    <div css={styles.popupContainer}>
      <div>
        <a href="https://github.com/Daikozi/gitlab-helper" target="_blank">
          <img src={gitlabLogo} css={styles.logo(isIdentified)} alt="logo" />
        </a>
      </div>
      <Typography component="h1" css={styles.title} textAlign="center">
        Gitlab Sentinel
      </Typography>
      {isLoading ? (
        <div css={styles.circularProgressContainer}>
          <CircularProgress />
        </div>
      ) : isIdentified ? (
        <MergeRequests />
      ) : (
        <Login />
      )}
    </div>
  );
};
export default Popup;
