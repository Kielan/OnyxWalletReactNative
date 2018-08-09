'use strict'
import { StatusBar } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { COLORS } from './constants'
import { LoginScreen } from './screenviews/Login'
import { SignupScreen } from './screenviews/Signup'
import { PortfolioScreen } from './screenviews/Portfolio'
import { HomeScreen } from './screenviews/Home'
import {
  ACCOUNT_SCREEN, SEARCH_SCREEN, STORY_SCREEN,
  SETTINGS_SCREEN, STORIES_SCREEN, LOGIN_SCREEN,
} from './store/actions/actionTypes'
import { getComponentId } from './store/reducers/selectors'

//export const Screens = new Map()
//Screens.set(LOGIN_SCREEN, LoginScreen)
//store, Provider
export function registerScreens(store, Provider) {
	Navigation.registerComponent('walletapp.Login', () => LoginScreen)
  Navigation.registerComponent('walletapp.Signup', () => SignupScreen)
  Navigation.registerComponent('walletapp.Portfolio', () => PortfolioScreen)
  Navigation.registerComponent('walletapp.Home', () => HomeScreen)
}

export const startApp = () => {
	StatusBar.setBarStyle('dark-content', true)

  return Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'ROOT',
        children: [
          {
            component: {
              name: 'walletapp.Login',
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign In',
                  icon: require('./assets/icons/signup.png')
                }
              }
            },
          },
          {
            component: {
              name: 'walletapp.Signup',
              options: {
                bottomTab: {
                  text: 'Sign Up',
                  fontSize: 12,
                  icon: require('./assets/icons/signin.png')
                }
              }
            },
          },
        ],
      },
    },
  })
}

export const loginScreen = () => Navigation.setRoot({
  component: {
    name: LOGIN_SCREEN,
    passProps: {
      id,
    },
    options: {
      topBar: {
        title: {
          text: id,
        },
      },
    },
  },
})
export const settingsScreen = (id: string) => Navigation.push(getComponentId, {
  component: {
    name: SETTINGS_SCREEN,
    passProps: {
      id,
    },
    options: {
      topBar: {
        title: {
          text: id,
        },
      },
    },
  },
})
/*
export const portfolioScreen = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'walletapp.Portfolio',
          }
        }
      ],
    }
  }
})
*/
//      id: 'App',
export const portfolioScreen = () => Navigation.setRoot({
  root: {
    stack: {
      options: {
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
      },
      children: [
        {
          component: {
            name: 'walletapp.Home',
          }
        }
      ],
    }
  }
})
