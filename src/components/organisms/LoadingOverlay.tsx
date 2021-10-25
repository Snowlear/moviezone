import React from "react";
import Box from "../atoms/Box";
import LoadingOverlayStyles from "./LoadingOverlay.module.css";

export default function LoadingOverlay() {
  return <Box styles={LoadingOverlayStyles.loadingOverlay}> </Box>;
}
