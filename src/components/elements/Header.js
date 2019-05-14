import React from 'react'
import { View, Image, Dimensions, Platform } from 'react-native'
import styled from 'styled-components'
import Touchable from 'react-native-platform-touchable'

import { Text } from '../elements'
import backArrow from '../../assets/images/icons/back-arrow.png'
import searchIcon from '../../assets/images/icons/search.png'

const { height } = Dimensions.get('window')

const Container = styled.View`
  margin-top: 20;
  justify-content: space-between;
  height: ${height / 6};
`

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const TitleStyled = styled(Text)`
  font-size: ${({ theme }) => theme.xLarge};
  padding-vertical: 10;
  color: ${({ theme }) => theme.headingText};
`

const Header = ({ title, hasSearch, navigation }) => (
  <Container>
    <Wrapper>
      <Touchable onPress={() => navigation.goBack()}>
        <Image source={backArrow} />
      </Touchable>
      {hasSearch && <Image source={searchIcon} />}
    </Wrapper>
    <TitleStyled primary semibold>
      {title}
    </TitleStyled>
  </Container>
)

export default Header
