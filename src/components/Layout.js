import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'

const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  margin-horizontal: ${({ theme, isFullWidth }) => (isFullWidth ? 0 : theme.containerWidth)};
`

class Layout extends React.Component {
  render() {
    const { isFullWidth } = this.props
    return <Container isFullWidth={isFullWidth}>{this.props.children}</Container>
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isFullWidth: PropTypes.bool,
}

export default Layout
