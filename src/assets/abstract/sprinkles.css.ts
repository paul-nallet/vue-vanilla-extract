import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { spaces as space } from "@/assets/abstract/spaces.css";
import { contract } from "@/assets/theme/contract.css";

const responsiveStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline", "grid"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    alignSelf: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    gridColumn: ["auto", "span 1 / span 1"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, auto)",
      "repeat(4, 1fr)",
      "repeat(5, 1fr)",
      "repeat(6, 1fr)",
    ],
    borderRadius: space,
    gap: space,
    textAlign: ["left", "center", "right"],
    flexGrow: [0, 1],
    width: ["100%", "50%", "33.333333%", "25%", "20%", "16.666667%"],
    height: ["100%", "50%", "33.333333%", "25%", "20%", "16.666667%"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
  },
  defaultCondition: "default",
  properties: {
    color: contract.color,
    background: contract.color,
    transition: contract.transition,
    borderWidth: space,
    borderColor: contract.color,
    borderStyle: ["solid", "none"],
    fontSize: space,
    fontWeight: [100, 150,  200, 250 ,  300, 400, 500, 600, 700, 800, 900],
  },
});

export const sprinkles = createSprinkles(responsiveStyles, colorProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
