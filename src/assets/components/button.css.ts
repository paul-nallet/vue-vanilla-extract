import { sprinkles } from "@/assets/abstract/sprinkles.css";

export const button = sprinkles({
  color: "text",
  background: {
    hover: "brand",
    default: "background",
  },
  paddingX: "3",
  paddingY: "2",
  transition: "all",
  borderRadius: "96",
  borderColor: {
    hover: "brand",
    default: "text",
  },
  borderWidth: "2",
  borderStyle: "solid",
});
