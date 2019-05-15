import React, { Component } from 'react'
import styled from 'styled-components'
import { Dimensions, StyleSheet, FlatList, View } from 'react-native'

import { Text } from '../components/elements'
import CategoryItem from './CategoryItem'

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

export default class CategoryList extends Component {
  static navigationOptions = {
    header: null,
  }

  _renderItem = ({ item, index }) => {
    return <CategoryItem />
  }

  render() {
    const data = [0, 1, 2, 3]
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
