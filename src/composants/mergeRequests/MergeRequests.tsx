import { Button, List as MaterialList } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { FC, HtmlHTMLAttributes, useEffect } from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import List from "../list/List";
import { useMergeRequests } from "../../hooks/useMergeRequests";
import { useIdentification } from "../../hooks/useIdentification";
import { useLoginInfos } from "../../hooks/useLoginInfos";

type MergeRequestsProps = HtmlHTMLAttributes<HTMLDivElement>;

const MergeRequests: FC<MergeRequestsProps> = ({ ...rest }) => {
  const { openedMergeRequests, reviewedMergeRequests, remove } =
    useMergeRequests();
  const { setIsIdentified } = useIdentification();
  const { loginInfos } = useLoginInfos();

  const handleDisconnect = () => {
    remove();
    setIsIdentified(false);
  };

  useEffect(() => {
    chrome.runtime?.sendMessage({ type: "loginInfos", value: loginInfos });
    chrome.runtime?.sendMessage({ type: "updateBadge", value: new Date() });
  }, []);

  if (!openedMergeRequests || !reviewedMergeRequests) return null;

  return (
    <>
      <MaterialList
        sx={{ bgcolor: "background.paper", width: "100%" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        {...rest}>
        <List
          icon={<InboxIcon />}
          label="Merge Request I Opened"
          mergeRequestsList={openedMergeRequests}
        />
        <List
          icon={<PreviewIcon />}
          label="Merge Request I am Reviewing"
          mergeRequestsList={reviewedMergeRequests}
        />
      </MaterialList>
      <Button
        variant="outlined"
        color="error"
        fullWidth
        onClick={handleDisconnect}>
        disconnect
      </Button>
    </>
  );
};

export default MergeRequests;
