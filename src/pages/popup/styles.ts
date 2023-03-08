import { SerializedStyles, css } from "@emotion/react";

export const popupContainer = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
  overflow: "hidden",
  height: "100%",
  padding: "16px",
});

export const logo = (isConnected = false): SerializedStyles =>
  css({
    "&:hover": {
      filter: "drop-shadow(0 0 2em #f6ae2d)",
    },
    height: isConnected ? "4em" : "12em",
    transition: "all 0.5s ease-in-out",
  });

export const title = css({
  fontSize: "2em",
  marginBottom: "40px",
});

export const circularProgressContainer = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "288px",
});
