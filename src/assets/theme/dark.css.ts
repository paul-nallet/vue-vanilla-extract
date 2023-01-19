import { createTheme } from "@vanilla-extract/css";
import { contract } from "@/assets/theme/contract.css";
import { HubotSans } from "../abstract/fonts.css";

export const dark = createTheme(contract, {
  color: {
    brand: "red",
    background: "#1a202c",
    text: "white",
  },
  font: {
    body: HubotSans,
  },
  transition: {
    all: "all 0.2s ease-in-out",
  },
});
