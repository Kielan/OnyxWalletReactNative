'use strict'
import React, { Component, PropTypes } from 'react'
import { TouchableHighlight, TouchableOpacity, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../store/actions/loginActions'

class LoginScreen extends Component {
  render() {
    return (
      <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <View style={styles.buttonContainer}>
          <TextInput
            onChangeText={(username) => this.setState({username})}
            value={this.state.luveid}
            placeholder="username"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TextInput
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity buttonColor={Colors.luvegrey} textColor="white" onPress={this._handlePress}>
            LOG IN
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    loginForm: state.loginForm,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
