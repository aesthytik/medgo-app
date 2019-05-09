import { Platform } from "react-native";

const size = {
  regular: 20,
  medium: 18,
  large: 22,
  small: 16,
  extraSmall: 12
};

const weight = {
  lite: 300,
  medium: 400,
  semiBold: 500,
  bold: 600
};

const theme = {
  primaryColor: "#3db370",
  secondaryColor: "#c56a36",
  borderColor: "grey",
  textColor: "#ffffff",
  large: size.large,
  medium: size.medium,
  regular: size.regular,
  small: size.small,
  extraSmall: size.extraSmall,
  activeColor: "#fff",
  inactiveColor: "#fff",
  rippleColor: "#006600",
  fontLite: weight.lite,
  fontMedium: weight.medium,
  fontSemiBold: weight.semiBold,
  fontBold: weight.bold
};

export default theme;

export const boxShadow = Platform.select({
  ios: {
    shadowColor: "grey",
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5
  },
  android: {
    elevation: 2
  }
});
