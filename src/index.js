import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import { ThemeProvider } from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

import { AuthLoading, Dashboard, Login, Welcome, SignUp, ForgotPassword } from './screens'
import theme from './utils/theme'

const DashboardStack = createStackNavigator({
  Dashboard,
})

const OrdersStack = createStackNavigator({
  Dashboard,
})

const MedicinesStack = createStackNavigator({
  Dashboard,
})

const ProfileStack = createStackNavigator({
  Dashboard,
})

const MainStack = {
  Dashboard: DashboardStack,
  Orders: OrdersStack,
  Medicines: MedicinesStack,
  Profile: ProfileStack,
}

const AppStack = createAppContainer(
  createBottomTabNavigator(MainStack, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state

        let iconName
        if (routeName === 'Dashboard') {
          iconName = `md-browsers`
        } else if (routeName === 'Orders') {
          iconName = `md-paper`
        } else if (routeName === 'Medicines') {
          iconName = `ios-medkit`
        } else if (routeName === 'Profile') {
          iconName = `ios-contact`
        }

        return <Icon name={iconName} light size={20} color={tintColor} />
      },
    }),
  })
)

const AuthStack = createAppContainer(
  createStackNavigator({
    Welcome,
    Login,
    SignUp,
    ForgotPassword,
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
