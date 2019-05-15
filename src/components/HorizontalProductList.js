import React, { Component } from 'react'
import styled from 'styled-components'
import { Dimensions, StyleSheet, FlatList, View } from 'react-native'

import ProductItem from '../components/ProductItem'
import { Text } from '../components/elements'

const { width } = Dimensions.get('window')

const Container = styled.View``

const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: ${width / 25};
  margin-vertical: 20;
`

const Featured = styled(Text)`
  color: ${({ theme }) => theme.labelColor};
`

const SeeAll = styled(Text)`
  font-size: ${({ theme }) => theme.small};
`

export default class HorizontalProductList extends Component {
  static navigationOptions = {
    header: null,
  }

  _renderItem = ({ item, index }) => {
    return <ProductItem />
  }

  render() {
    const data = [0, 1, 2, 3, 4, 5, 6]
    return (
      <Container>
        <Head>
          <Featured primary semibold>
            Featured
          </Featured>
          <SeeAll light>See All</SeeAll>
        </Head>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: width / 40 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          extraData={this.state}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={this._renderItem}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
