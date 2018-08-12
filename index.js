'use strict'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
//import { falcoWalletTheme } from './constants'
import { registerScreens } from './js/screens'
import { configureStore } from './js/store/configureStore'
import * as types from './js/store/actions/actionTypes'

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: true
};

// Register screens
registerScreens(configureStore, Provider)

// Start application
Navigation.events().registerAppLaunchedListener(() => {

  Navigation.setRoot({
    root: {
      component: {
        name: types.LOGIN_SCREEN
      }
    },
  })
})
