import React from 'react'
import styled from 'styled-components'
import { Image, Platform, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import Touchable from 'react-native-platform-touchable'

import { Text } from '../components/elements'

import theme from '../utils/theme'

const { height, width } = Dimensions.get('window')

const Container = styled.View``

const GradientStyled = styled(LinearGradient)`
  margin-horizontal: ${width / 50};
  margin-bottom: 25;
  background-color: red;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: ${height / 15};
  width: ${width / 3.6};
  align-items: center;
  justify-content: center;
`

const Name = styled(Text)`
  font-size: ${({ theme }) => theme.small};
  color: ${({ theme }) => theme.activeColor};
`

const boxShadow = Platform.select({
  ios: {
    shadowColor: '#919191',
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  android: {
    elevation: 2,
  },
})

class CategoryItem extends React.PureComponent {
  render() {
    return (
      <Container style={boxShadow}>
        <GradientStyled
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[`hsl(229, 76%, 66%)`, `hsl(208, 100%, 70%)`]}
        >
          <Name>Salix</Name>
        </GradientStyled>
      </Container>
    )
  }
}

export default withNavigation(CategoryItem)
