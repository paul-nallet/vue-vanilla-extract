import { sprinkles } from "../abstract/sprinkles.css";

export const div = sprinkles({
  display: "flex",
  flexDirection: {
    mobile: "column",
    tablet: "row",
  },
  justifyContent: "space-around",
  fontSize: "52",
  color: "brand",
  gap: "4",
});
