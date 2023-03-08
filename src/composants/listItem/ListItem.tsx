import { Divider, ListItemButton, Typography } from "@mui/material";
import { FC, Fragment, HTMLAttributes } from "react";

import * as styles from "./styles";

type ListItemProps = {
  mrDd: number;
  isDraft?: boolean;
  labels: string[];
  title: string;
  web_url: string;
  updatedAt: string;
} & HTMLAttributes<HTMLDivElement>;

const ListItem: FC<ListItemProps> = ({
  mrDd,
  isDraft = false,
  updatedAt,
  labels,
  title,
  web_url,
  ...rest
}) => {
  const isRead = false;

  const isReviewed = labels.includes("Reviewed Web");

  return (
    <Fragment {...rest}>
      <ListItemButton
        css={styles.listItemButton}
        sx={{ pl: 2 }}
        component="a"
        href={web_url}
        target="_blank"
        rel="noreferrer"
        onClick={() => {}}>
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
