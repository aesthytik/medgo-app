import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'

const Loader = () => {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={styles.lottie}
      speed={1}
      source={require('../../assets/animations/data.json')}
    />
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  lottie: {
    width: 100,
    height: 100,
  },
})
