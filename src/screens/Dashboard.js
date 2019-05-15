/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import ProductItem from '../components/ProductItem'
import HorizontalProductList from '../components/HorizontalProductList'
import Layout from '../components/Layout'
import CategoryList from '../components/CategoryList'
import CartItem from '../components/CartItem'
import SearchInput from '../components/elements/SearchInput'

export default class App extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <Layout isFullWidth>
        <CategoryList />
        <HorizontalProductList />
        <CartItem />
        <SearchInput />
      </Layout>
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
