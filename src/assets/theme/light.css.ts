import { createTheme } from "@vanilla-extract/css";
import { contract } from "@/assets/theme/contract.css";
import { HubotSans } from "../abstract/fonts.css";

export const light = createTheme(contract, {
  color: {
    brand: "blue",
    background: "#edf2f7",
    text: "black",
  },
  font: {
    body: HubotSans,
  },
  transition: {
    all: "all 0.5s ease-in-out 200ms ease-in-out",
    smooth: "all 0.5s ease-in-out 200ms ease-in-out",
  },
});
