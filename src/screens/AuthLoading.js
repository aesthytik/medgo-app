import React from 'react'
import { ActivityIndicator, AsyncStorage, View } from 'react-native'

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    console.log('userToken', userToken)
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }
  // Render any loading content that you like here
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#1fa9d9" />
      </View>
    )
  }
}

export default AuthLoadingScreen
