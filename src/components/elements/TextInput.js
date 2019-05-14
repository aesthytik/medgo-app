import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import openEye from '../../assets/images/icons/eye.png'
import closedEye from '../../assets/images/icons/hide.png'

import Text from './Text'

const Container = styled.View`
  width: 100%;
  margin-bottom: 20;
`

const Label = styled(Text)`
  font-size: ${({ theme }) => theme.small};
  color: ${({ theme }) => theme.labelColor};
`

const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-color: transparent;
  border-width: 1;
  border-bottom-color: ${({ theme }) => theme.borderColor};
`

const TextInputStyled = styled(TextInput)`
  height: 45;
  width: 90%;
`

class MyTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordVisible: false,
    }
  }

  togglePasswordVisiblity = () => {
    const { passwordVisible } = this.state
    this.setState({ passwordVisible: !passwordVisible })
  }
  render() {
    const { label, placeholder, isPasswordInput } = this.props
    const { passwordVisible } = this.state
    console.log(passwordVisible)
    let eye = openEye
    if (passwordVisible) {
      eye = openEye
    } else {
      eye = closedEye
    }
    return (
      <Container>
        <Label>{label}</Label>
        <InputWrapper>
          <TextInputStyled
            placeholder={placeholder}
            secureTextEntry={isPasswordInput ? (passwordVisible ? false : true) : false}
          />
          {isPasswordInput && (
            <TouchableOpacity onPress={this.togglePasswordVisiblity}>
              <Image source={eye} style={{ height: 20, width: 20 }} resizeMode="contain" />
            </TouchableOpacity>
          )}
        </InputWrapper>
      </Container>
    )
  }
}

MyTextInput.defaultProps = {
  isPasswordInput: false,
}

MyTextInput.propTypes = {
  isPasswordInput: PropTypes.bool,
}

export default MyTextInput
