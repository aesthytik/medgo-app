import React, { Component } from 'react'
import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'

import { Text, Button, TextInput } from '../components/elements'
import Layout from '../components/Layout'
import Header from '../components/elements/Header'

const { height } = Dimensions.get('window')

const InputWrapper = styled.View`
  height: ${height / 4.5};
  margin-top: 30;
`

const BottomContainer = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 20 : 30};
`

const ForgotPassword = styled(Text)`
  font-size: 14;
  margin-top: 15;
`

const DontHaveAnAccount = styled(Text)`
  font-size: 14;
  margin-top: 10;
`

const SignUp = styled(Text)`
  font-size: 14;
  color: ${({ theme }) => theme.headingText};
`
export default class Login extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigation } = this.props
    return (
      <Layout>
        <Header title={`Login`} navigation={navigation} />
        <InputWrapper>
          <TextInput label="Email" placeholder="abc@gmail.com" />
          <TextInput label="Password" placeholder="Enter Password" isPasswordInput />
        </InputWrapper>

        <BottomContainer>
          <Button title="Log in" />
          <ForgotPassword isCentered onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password ?
          </ForgotPassword>
          <DontHaveAnAccount isCentered>
            Don't have an account ?{' '}
            <SignUp onPress={() => navigation.navigate('SignUp')}>Sign Up</SignUp>
          </DontHaveAnAccount>
        </BottomContainer>
      </Layout>
    )
  }
}
