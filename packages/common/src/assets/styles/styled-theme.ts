export const theme = {
  colors: {
    primaryColor: "#48A0AC",
    primaryLight: "#6AB1B8",
    primaryDark: "#317885",
    secondaryColor: "#263B5E",
    dangerColor: "#F44336",
    dangerLight: "#FFE7E7",
    dangerDark: "#AA2E25",
    successColor: "#2ECC71",
    successLight: "#EFFFE8",
    successDark: "#208E4F",
    warningColor: "#2ECC71",
    warningLight: "#EFFFE8",
    warningDark: "#208E4F",
    placeholderText: "#999999",
    placeholderLight: "#DBDBDB",
    placeholderDark: "#707070",
    bodyColor: "#FFFFFF",
    backgroundColor: "#FBFBFF",
    shadowColor: "rgb(75, 166, 194,  0.12)",
    inputShadowColor: "rgba(72, 160, 172, 0.2)",
    placeholderColor: "#999999",
    writingColor: "#3F4451",
    paragraphColor: "#3F4451",
    headingColor: "#263B5E",
    disabledColor: "rgb(0, 0, 0, 0.25)",
    disabledBackground: "#F5F5F5",
    borderDark: "#000000",
    borderLight: "rgba(234, 234, 234, 0.8)",
    borderLight5: "#C4C4C4",
    borderColor: "#D9D9D9",
    facebookColor: "#0084FF",
    facebookTitle: "#171717",
    facebookSubtitle: "rgba(0, 0, 0, 0.4)",
    facebookBorder: "#F6F6F6",
    upcomingColor: "#FECA57",
    inProgressColor: "#2709DC",
    landingPageBackground: "rgba(225,244,254,1)",
    messages: {
      pageBodyColor: "#0084FF",
      pageTextColor: "#FFF",
      userBodyColor: "rgba(234, 234, 234, 0.8)",
      userTextColor: "#000",
    },
  },
  statusColors: {
    active: "#52C41A",
    inactive: "#F5222D",

    promo: "#ebc766",
    discount: "#adeccb",

    "order-active": "#49a69d",
    "order-complete": "#52C41A",
    "order-cancelled": "#F5222D",
    "order-fully_cancelled": "#F5222D",

    ordered: "#FFE7E7",
    received: "#d3ebfa",
    complete: "#B5FF78",
    cancelled: "#eea4ad",

    delivery: "#9F7AEA",
    pickup: "#ED64A6",

    free: "#e4fcda",
    delivering: "#d3ebfa",
    picking: "#FFE7E7",
    waiting: "#EFFFE8",

    accepted: "#e4fcda",
    served: "#EFFFE8",
    returned: "#EFFFE8",

    pending: "#f6bb7b",
    approved: "#e4fcda",
    notApproved: "#FFE7E7",

    picked: "#FFE7E7",
    delivered: "#d3ebfa",
    failed: "#eea4ad",
    dropped: "#eea4ad",
  },
  breakpoints: {
    xs: "(min-width: 0px)",
    sm: "(min-width: 600px)",
    md: "(min-width: 960px)",
    lg: "(min-width: 1280px)",
    xl: "(min-width: 1920px)",
  },
};

type TTheme = typeof theme;

export interface ITheme extends TTheme {
  additional: any;
}
