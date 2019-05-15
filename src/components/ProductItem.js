import React from 'react'
import styled from 'styled-components'
import { Image, Platform, Dimensions } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import { withNavigation } from 'react-navigation'

import { Text } from '../components/elements'
import dummy from '../assets/images/dummy.jpg'

import theme from '../utils/theme'

const { height, width } = Dimensions.get('window')

const Container = styled.View`
  margin-horizontal: ${width / 50};
`
const ImageStyled = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
`

const ImageWrapper = styled(Touchable)`
  height: ${height / 6};
  width: ${width / 3.6};
`

const PriceTag = styled(Text)`
  font-size: ${({ theme }) => theme.large};
  color: ${({ theme }) => theme.primaryColor};
`

const Name = styled(Text)`
  font-size: ${({ theme }) => theme.small};
`

const boxShadow = Platform.select({
  ios: {
    shadowColor: theme.secondaryColor,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  android: {
    elevation: 2,
  },
})

class ProductItem extends React.PureComponent {
  render() {
    return (
      <Container>
        <ImageWrapper style={boxShadow}>
          <ImageStyled source={dummy} resizeMode="cover" />
        </ImageWrapper>
        <PriceTag semibold>$ 24.00</PriceTag>
        <Name light>Salix</Name>
      </Container>
    )
  }
}

export default withNavigation(ProductItem)
