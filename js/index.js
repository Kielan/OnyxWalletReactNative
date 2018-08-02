import React, {Component} from 'react'
import {Navigator} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { falcoWalletTheme } from './constants'
import { LoginScreen } from './screens/Login'
import { HomeScreen } from './screens/Home'

const store = configureStore(() => console.log('redux store set'))

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="login"
              component={LoginScreen}
              hideNavBar={true}
              navigationBarStyle={falcoWalletTheme.navBar}
              leftButtonIconStyle={styles.backButton}
              initial={true} />
              <Scene key="home"
                component={HomeScreen}
                hideNavBar={false}
                navigationBarStyle={falcoWalletTheme.navBar}
                leftButtonIconStyle={falcoWalletTheme.backButton} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
