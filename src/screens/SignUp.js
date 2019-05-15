import React, { Component } from 'react'
import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'

import { Text, Button, TextInput } from '../components/elements'
import Layout from '../components/Layout'
import Header from '../components/elements/Header'

const { height } = Dimensions.get('window')

const InputWrapper = styled.View`
  height: ${height / 4};
  margin-top: 30;
`

const BottomContainer = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 80 : 100};
`

const DontHaveAnAccount = styled(Text)`
  font-size: 14;
  margin-top: 10;
`

const Login = styled(Text)`
  font-size: 14;
  color: ${({ theme }) => theme.headingText};
`
export default class SignUp extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigation } = this.props
    return (
      <Layout>
        <Header title={`Sign Up`} navigation={navigation} />
        <InputWrapper>
          <TextInput label="Name" placeholder="Enter Name" />
          <TextInput label="Email" placeholder="abc@gmail.com" />
          <TextInput label="Password" placeholder="Enter Password" isPasswordInput />
        </InputWrapper>

        <BottomContainer>
          <Button title="Sign Up" />

          <DontHaveAnAccount isCentered>
            Already have an account ?{' '}
            <Login onPress={() => navigation.navigate('Login')}>Log In</Login>
          </DontHaveAnAccount>
        </BottomContainer>
      </Layout>
    )
  }
}
