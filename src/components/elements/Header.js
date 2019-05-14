import React from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components'
import Touchable from 'react-native-platform-touchable'

import { Text } from '../elements'
import backArrow from '../../assets/images/icons/back-arrow.png'
import searchIcon from '../../assets/images/icons/search.png'

const Container = styled.View``

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 20;
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
