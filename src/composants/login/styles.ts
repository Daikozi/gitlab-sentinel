import { css } from "@emotion/react";

export const loginContainer = css({
  "& > *:not(:last-child)": {
    marginBottom: "8px",
  },
  display: "flex",
  flexDirection: "column",
  gap: 2,
  alignItems: "center",
  flexWrap: "wrap",
  width: "100%",
});

export const alert = css({
  width: "100%",
});
