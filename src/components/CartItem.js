import React from 'react'
import styled from 'styled-components'
import { View, Image, Platform, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation'

import { Text } from '../components/elements'
import cartImage from '../assets/images/cart-dummy.png'

import theme from '../utils/theme'

const { height, width } = Dimensions.get('window')

const Container = styled.View`
  height: ${height / 6};
  background-color: white;
  flex-direction: row;
  margin-horizontal: 20;
`

const ImageWrapper = styled.View`
  width: ${height / 6};
  align-items: center;
  justify-content: center;
  padding-vertical: 15;
  padding-horizontal: 15;
`
const Info = styled.View`
  flex: 1;
  padding-vertical: 15;
  justify-content: space-between;
`
const IconStyled = styled(Icon)`
  position: absolute;
  right: 15;
  top: 5;
`

const Name = styled(Text)`
  color: ${({ theme }) => theme.labelColor};
  font-size: ${({ theme }) => theme.large};
`

const Brand = styled(Text)`
  font-size: 16;
`

const PriceTag = styled(Text)`
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.large};
`

const Count = styled.View`
  flex: 1;
  width: ${height / 6};
  background-color: grey;
`

const boxShadow = Platform.select({
  ios: {
    shadowColor: theme.primaryColor,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  android: {
    elevation: 2,
  },
})

const CartItem = () => (
  <Container style={boxShadow}>
    <ImageWrapper>
      <Image source={cartImage} style={{ height: '100%', width: '100%' }} resizeMode="cover" />
    </ImageWrapper>
    <Info>
      <IconStyled name="ios-close" size={40} color="#919191" />
      <View>
        <Name primary semibold>
          Queen Med
        </Name>
        <Brand light>Brand Name</Brand>
      </View>
      <PriceTag>$ 34.00</PriceTag>
    </Info>
  </Container>
)

export default withNavigation(CartItem)
