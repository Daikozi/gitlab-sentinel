import { SerializedStyles, css } from "@emotion/react";

export const popupContainer = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
  overflow: "hidden",
  backgroundColor: "#eee",
  height: "100%",
  padding: "16px",
});

export const logo = (isConnected = false): SerializedStyles =>
  css({
    "&:hover": {
      filter: "drop-shadow(0 0 2em #f6ae2d)",
    },
    height: isConnected ? "6em" : "16em",
    transition: "all 0.5s ease-in-out",
  });

export const title = (isConnected = false): SerializedStyles =>
  css({
    fontSize: isConnected ? "2em" : "4em",
    transition: "all 0.5s ease-in-out",
  });
