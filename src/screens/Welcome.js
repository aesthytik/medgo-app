import React from 'react'
import styled from 'styled-components'
import { Image, Dimensions, View } from 'react-native'

import { Text, Button } from '.././components/elements'
import Layout from '../components/Layout'

const { width } = Dimensions.get('window')

const Heading = styled.View`
  flex: 0.2;
  align-items: center;
  justify-content: center;
`

const Title = styled(Text)``

const ImageStyled = styled.View`
  flex: 0.4;
  align-items: center;
  justify-content: center;
`
const Buttons = styled.View`
  flex: 0.4;
  justify-content: center;
  padding-horizontal: ${({ theme }) => theme.containerWidth * 1.5};
`

const SignUp = styled(Text)`
  font-size: 16;
  padding-vertical: 10;
`
class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    const { navigation } = this.props
    return (
      <Layout>
        <Heading>
          <Title primary extrabold>
            Welcome to Medgo
          </Title>
        </Heading>
        <ImageStyled>
          <Image
            source={require('../assets/images/doctor.png')}
            style={{ width: width }}
            resizeMode="contain"
          />
        </ImageStyled>
        <Buttons>
          <Button title="Log in" onPress={() => navigation.navigate('Login')} />
          <SignUp isCentered onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </SignUp>
        </Buttons>
      </Layout>
    )
  }
}

export default Welcome
