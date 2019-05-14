import React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { ThemeProvider } from 'styled-components'

import { AuthLoading, Dashboard, Login, Welcome } from './screens'
import theme from './utils/theme'

const AppStack = createStackNavigator({
  Dashboard,
})

const AuthStack = createAppContainer(
  createStackNavigator({
    Welcome,
    Login,
  })
)

const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
)

const App = () => (
  <ThemeProvider theme={theme}>
    <RootStack />
  </ThemeProvider>
)

export default App
