import React from 'react'
import Touchable from 'react-native-platform-touchable'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

import { Text } from '../elements'
import theme, { boxShadow } from '../../utils/theme'

const Container = styled(Touchable)`
  width: 100%;
`

const GradientStyled = styled(LinearGradient)`
  border-radius: ${({ theme }) => theme.borderRadius};
  align-items: center;
  justify-content: center;
  padding-vertical: 15;
`

const TextStyled = styled(Text)`
  font-size: 16;
  color: ${({ theme }) => theme.btnText};
`

const MyButton = ({ title, ...other }) => (
  <Container {...other} style={[boxShadow]} background={Touchable.Ripple(theme.secondaryColor)}>
    <GradientStyled
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[theme.primaryColor, theme.secondaryColor]}
    >
      <TextStyled primary>{title}</TextStyled>
    </GradientStyled>
  </Container>
)

export default MyButton
