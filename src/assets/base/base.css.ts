import { globalStyle } from "@vanilla-extract/css";
import { contract } from "@/assets/theme/contract.css";

globalStyle("#app", {
  backgroundColor: contract.color.background,
  fontFamily: contract.font.body,
  color: contract.color.text,
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
});
globalStyle("html, body", {
  backgroundColor: "black",
});
