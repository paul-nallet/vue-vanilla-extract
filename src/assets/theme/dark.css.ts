import { createTheme } from "@vanilla-extract/css";
import { contract } from "@/assets/theme/contract.css";

export const dark = createTheme(contract, {
  color: {
    brand: "red",
    background: "#1a202c",
    text: "white",
  },
  font: {
    body: "helvetica",
  },
  transition: {
    all: "all 0.2s ease-in-out",
  },
});
