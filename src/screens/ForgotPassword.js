import React, { Component } from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'

import { Text, Button, TextInput } from '../components/elements'
import Layout from '../components/Layout'
import Header from '../components/elements/Header'

const { height } = Dimensions.get('window')

const InputWrapper = styled.View`
  height: ${height / 8};
  margin-top: 30;
`

const BottomContainer = styled.View`
  margin-top: 20;
`

const DontHaveAnAccount = styled(Text)`
  font-size: 14;
  margin-top: 10;
`

export default class MyForgotPassword extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigation } = this.props
    return (
      <Layout>
        <Header title={`Forgot Password`} navigation={navigation} />
        <InputWrapper>
          <TextInput label="Email" placeholder="abc@gmail.com" />
        </InputWrapper>

        <BottomContainer>
          <Button title="Send Password" />

          <DontHaveAnAccount isCentered>Password will be sent to your email !</DontHaveAnAccount>
        </BottomContainer>
      </Layout>
    )
  }
}
