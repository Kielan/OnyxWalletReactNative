'use strict'
import React, { Component } from 'react'
import { TouchableHighlight, TouchableOpacity, TextInput, Text, View } from 'react-native'
import { falcoWalletTheme, COLORS } from '../../constants'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import * as loginActions from '../../store/actions/loginActions'

class PortfolioScreen extends Component {
  state = {
    username: 'user@gmail.com',
    password: 'user',
  }
  _loginEmail = () => {
    const { username, password } = this.state

    console.log(username, password, this.props.actions)

    this.props.actions.loginRequest(username, password)
    //Actions.main();
  }
  render() {
    return (
      <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <Text>Portfolio</Text>
      </View>
    )
  }
}
export { PortfolioScreen }
