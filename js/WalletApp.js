'use strict'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { falcoWalletTheme } from './constants'
import { Screens, startApp } from './screens'
import { LoginScreen } from './screenviews/Login'
//import { configureStore } from './store/configureStore'

//const store = configureStore()

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: true
};

// Register screens
Screens.forEach((ScreenComponent, key) =>
  Navigation.registerComponent(key, () => ScreenComponent))

// Start application
Navigation.events().registerAppLaunchedListener(() => {
//  if (__DEV__) {
//    makeInspectable(UI);
//    makeInspectable(Account);
//    makeInspectable(Stories);
//    makeInspectable(Items);
//  }

  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  })
})
