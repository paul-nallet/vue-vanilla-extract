import { createTheme } from "@vanilla-extract/css";
import { contract } from "@/assets/theme/contract.css";

export const light = createTheme(contract, {
  color: {
    brand: "blue",
    background: "#edf2f7",
    text: "black",
  },
  font: {
    body: "helvetica",
  },
  transition: {
    all: "all 0.2s ease-in-out",
  },
});
