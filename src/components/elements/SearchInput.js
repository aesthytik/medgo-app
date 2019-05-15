import React, { PureComponent } from 'react'
import { TouchableHightLight, Text, View } from 'react-native'
import Search from 'react-native-search-box'
import theme from '../../utils/theme'

const rowHeight = 40

export default class SearchInput extends PureComponent {
  state = {}

  // Important: You must return a Promise
  onSearch = (searchText) => {
    return new Promise((resolve, reject) => {
      console.log(searchText)
      console.log('Add your search function here.')
      resolve()
    })
  }

  // Important: You must return a Promise
  beforeFocus = () => {
    return new Promise((resolve, reject) => {
      console.log('beforeFocus')
      resolve()
    })
  }

  // Important: You must return a Promise
  onFocus = (text) => {
    return new Promise((resolve, reject) => {
      console.log('onFocus', text)
      resolve()
    })
  }

  // Important: You must return a Promise
  afterFocus = () => {
    return new Promise((resolve, reject) => {
      console.log('afterFocus')
      resolve()
    })
  }

  render() {
    // inside your render function
    return (
      <Search
        ref="search_box"
        onSearch={this.onSearch}
        backgroundColor={theme.primaryColor}
        /**
         * There many props that can customizable
         * Please scroll down to Props section
         */
      />
    )
  }
}
