import { Divider, ListItemButton, Typography } from "@mui/material";
import { FC, Fragment, HTMLAttributes, useEffect } from "react";

import * as styles from "./styles";
import { useLastUpdates } from "../../hooks/useLastUpdates";

type ListItemProps = {
  mrId: number;
  isDraft?: boolean;
  labels: string[];
  title: string;
  web_url: string;
  updatedAt: string;
} & HTMLAttributes<HTMLDivElement>;

const ListItem: FC<ListItemProps> = ({
  mrId,
  isDraft = false,
  updatedAt,
  labels,
  title,
  web_url,
  ...rest
}) => {
  const { lastUpdates, setLastUpdates } = useLastUpdates();

  const itemLastUpdate = lastUpdates.find(({ id }) => id === mrId);
  const isRead = itemLastUpdate?.isRead ?? false;
  const isReviewed = labels.includes("Reviewed Web");

  const handleListItemClick = () => {
    setLastUpdates({
      id: mrId,
      lastUpdate: new Date(updatedAt),
      lastView: new Date(),
      isRead: true,
    });
  };

  useEffect(() => {
    if (
      itemLastUpdate &&
      new Date(updatedAt) > new Date(itemLastUpdate?.lastUpdate)
    ) {
      setLastUpdates({
        ...itemLastUpdate,
        lastUpdate: new Date(updatedAt),
        isRead: false,
      });
    }
  }, [updatedAt, itemLastUpdate, mrId, setLastUpdates]);

  return (
    <Fragment {...rest}>
      <ListItemButton
        css={styles.listItemButton}
        sx={{ pl: 2 }}
        component="a"
        href={web_url}
        target="_blank"
        rel="noreferrer"
        onClick={handleListItemClick}>
        <Typography>{isRead ? "🟢" : "🔴"}</Typography>
        <Typography
          noWrap
          variant="body2"
          css={styles.listItemTitle(isDraft, isReviewed, !isRead)}>
          {title}
        </Typography>
      </ListItemButton>
      <Divider variant="middle" />
    </Fragment>
  );
};
export default ListItem;
