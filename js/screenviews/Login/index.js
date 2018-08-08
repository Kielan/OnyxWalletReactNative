'use strict'
import React, { Component } from 'react'
import { TouchableHighlight, TouchableOpacity, TextInput, Text, View } from 'react-native'
import { falcoWalletTheme, COLORS } from '../../constants'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import * as loginActions from '../../store/actions/loginActions'

class LoginScreen extends Component {
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
        <View style={falcoWalletTheme.buttonContainer}>
          <TextInput
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            placeholder="username"
          />
        </View>

        <View style={falcoWalletTheme.buttonContainer}>
          <TextInput
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={falcoWalletTheme.buttonContainer}>
          <TouchableOpacity buttonColor={COLORS.PRIMARY_BLACK} textColor="white" onPress={this._loginEmail}>
          <Text>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
/*
function mapStateToProps(state) {
  return {
    loginForm: state.loginForm,
  }
}
*/
/*
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  }
}
*/
//connect(mapStateToProps, mapDispatchToProps)(
export { LoginScreen }
