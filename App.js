import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './Screens/signupLoginScreen'
import WelcomeScreen from './Screens/welcomeScreen'
import ExchangeScreen from './Screens/exchangeScreen'
import HomeScreen from './Screens/homeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
  return (
       <AppContainer></AppContainer>
  );
}
}
const TabNavigation = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Exchange: {screen: ExchangeScreen}
})
const SwitchNavigation = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Tabs: {screen: TabNavigation}
})
const AppContainer = createAppContainer(SwitchNavigation) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

