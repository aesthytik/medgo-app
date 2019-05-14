import { Platform } from 'react-native'
import fontSizes from './fontSizes'
import fontWeights from './fontWeights'

const size = {
  regular: 20,
  medium: 18,
  large: 22,
  small: 16,
  extraSmall: 12,
}

const theme = {
  primaryColor: '#667EEA',
  secondaryColor: '#c56a36',
  textColor: '#656565',
  xLarge: fontSizes.xbig,
  large: fontSizes.big,
  xxMedium: fontSizes.xxmedium,
  xMedium: fontSizes.xmedium,
  medium: fontSizes.medium,
  small: fontSizes.small,
  verySmall: fontSizes.verySmall,
  activeColor: '#fff',
  inactiveColor: '#fff',
  rippleColor: '#006600',
  thin: fontWeights.thin,
  extraLight: fontWeights.extraLight,
  light: fontWeights.light,
  normal: fontWeights.normal,
  medium: fontWeights.medium,
  semiBold: fontWeights.semiBold,
  bold: fontWeights.bold,
  extraBold: fontWeights.extraBold,
  heavy: fontWeights.heavy,
  primaryFontFamily: 'NunitoSans',
  secondaryFontFamily: 'OpenSans',
  containerWidth: 15,
}

export default theme

export const boxShadow = Platform.select({
  ios: {
    shadowColor: '#667EEA',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  android: {
    elevation: 2,
  },
})
