import { css } from "@emotion/react";

export const listItemButton = css({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  maxWidth: "300px",
});

export const listItemTitle = (
  isDraft = false,
  isReviewed = false,
  isUnread = false
) =>
  css({
    color: isDraft ? "#737278" : isReviewed ? "#69D100" : "#333238",
    fontWeight: isUnread ? "bold" : "normal",
  });
