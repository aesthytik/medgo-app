import { Platform } from 'react-native'
import fontSizes from './fontSizes'
import fontWeights from './fontWeights'

const theme = {
  primaryColor: '#667EEA',
  secondaryColor: '#64B6FF',
  headingText: '#323232',
  textColor: '#656565',
  labelColor: '#A6A6A6',
  borderColor: '#DADADA',
  xLarge: fontSizes.xbig,
  large: fontSizes.big,
  xxMedium: fontSizes.xxmedium,
  xMedium: fontSizes.xmedium,
  medium: fontSizes.medium,
  small: fontSizes.small,
  verySmall: fontSizes.verySmall,
  btnText: '#fff',
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
  primaryFontFamily: 'Nunito',
  secondaryFontFamily: 'OpenSans',
  containerWidth: 25,
}

export default theme

export const boxShadow = Platform.select({
  ios: {
    shadowColor: theme.primaryColor,
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  android: {
    elevation: 2,
  },
})
