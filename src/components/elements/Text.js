import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'react-native'

import theme from '../../utils/theme'

const Container = styled(Text)`
  font-size: ${(props) => props.theme.large};
  color: ${(props) => (props.primary ? '#ffffff' : props.theme.textColor)};
  font-family: ${(props) => props.fontFamily};
  flex-wrap: wrap;
`

const MyText = (props) => {
  const { style, children, primary, light, semibold, bold, italic, extrabold, ...other } = props

  let fontFamily = primary ? theme.primaryFontFamily : theme.secondaryFontFamily

  if (light) {
    fontFamily = `${fontFamily}-Light`
  } else if (semibold) {
    fontFamily = `${fontFamily}-SemiBold`
  } else if (bold) {
    fontFamily = `${fontFamily}-Bold`
  } else if (extrabold) {
    fontFamily = `${fontFamily}-ExtraBold`
  } else if (italic) {
    fontFamily = `${fontFamily}-italic`
  } else {
    fontFamily = `${fontFamily}-Regular`
  }

  return (
    <Container style={style} primary={primary} fontFamily={fontFamily} {...other}>
      {children}
    </Container>
  )
}

// MyText.defaultProps = {
//   fontFamily: 'Nunito',
// }

MyText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  primary: PropTypes.bool,
  light: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  extrabold: PropTypes.bool,
  children: PropTypes.node,
}

export default MyText
