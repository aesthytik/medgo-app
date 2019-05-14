import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import styled from 'styled-components'

import { Text } from '../elements'
import theme, { boxShadow } from '../../utils/theme'

const Container = styled(Touchable)`
  background-color: ${(props) =>
    props.secondary ? props.theme.secondaryColor : props.theme.primaryColor};
  border-radius: 4;
  margin-horizontal: 13;
  border-width: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-vertical: 12;
`

const TextStyled = styled(Text)`
  font-size: 16;
`

const MyButton = ({ title, ...other }) => (
  <Container style={boxShadow} {...other}>
    <TextStyled primary>{title}</TextStyled>
  </Container>
)

export default MyButton
