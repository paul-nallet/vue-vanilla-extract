import { createThemeContract } from "@vanilla-extract/css";

export const contract = createThemeContract({
  color: {
    brand: "",
    background: "",
    text: "",
  },
  font: {
    body: "",
  },
  transition: {
    all: "",
  },
});
