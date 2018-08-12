'use strict'
import React, { Component } from 'react'
//or import StackNavigator from 'react-navigation'?
import { Navigation } from 'react-native-navigation'
import { COLORS } from '../../constants'



class TopBar extends Component {
  static get options() {
    return {
      topBar: {
        leftButtons: [
          {
            id: 'myDynamicButtonLeft',
            text: 'PORTFOLIO',
            color: COLORS.PRIMARY_WHITE
          }
        ],
        title: {
          text: 'ONYX',
          fontFamily: 'Helvetica',
          color: COLORS.PRIMARY_WHITE
        },
        rightButtons: [
          {
            id: 'myDynamicButtonRight',
            text: 'ACTIONS',
            color: COLORS.PRIMARY_WHITE
          }
        ],
        background: {
          color: COLORS.PRIMARY_BLACK,
        }
      }
    }
  }
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this) // <== Will be automatically unregistered when unmounted
  }
  registerApplicationRouter() {
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
  }
  navigationButtonPressed({ buttonId }) {
    console.log('navigationButtonPressed', buttonId)
    // will be called when "buttonOne" is clicked
  }
  render() {
    const { dispatch, nav } = this.props;
    return
    )
  }
}
export { TopBar }
