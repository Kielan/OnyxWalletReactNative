'use strict'
import React, { Component } from 'react'
import { TouchableHighlight, TextInput, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Navigation } from 'react-native-navigation'
import { bindActionCreators } from 'redux'
import { AssetDataGraph } from '../../components/AssetDataGraph'
import { AssetList } from '../../components/AssetList'
import { getComponentId, getCurrentIndex } from '../../store/reducers/selectors'
import * as types from '../../store/actions/actionTypes'
import { tabNavigationPress } from '../../store/actions/screenviewActions'

HomeScreen.propTypes = {
	currentDate: PropTypes.object,
	navigator: PropTypes.object,
  tabNavigationPress: PropTypes.object,
  currentIndex: PropTypes.object,
  focusIndex: PropTypes.object,
}
class HomeScreen extends Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this) // <== Will be automatically unregistered when unmounted
  }
  //This event is emitted whenever a TopBar button is pressed by the user
  navigationButtonPressed({ buttonId }) {
    let { tabNavigationPress, getCurrentIndex } = this.props
    if (buttonId ===  'myDynamicButtonRight') {
      let componentFromId = types.HOME_SCREEN
      let componentToId = types.ACTIONS_SCREEN
      console.log('registerNavigationButtonPressedListener 2: ', getCurrentInde, buttonId)
      tabNavigationPress({
        id: buttonId,
        currentIndex: getCurrentIndex,
        focusIndex: getCurrentIndex+1,
        componentFromId: componentFromId,
        componentToId: componentToId,
      })
    }
  }
  render() {
    return (
      <Navigation.Element elementId='animateHomeId'>
        <View>
          <View>
            <Text>THU FEB 18, 3:00AM</Text>
          </View>
          <View>
            <Text>$26.81</Text>
            <Text>USD</Text>
          </View>
          <AssetDataGraph />
          <AssetList />
        </View>
      </Navigation.Element>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return {
    list: state.list,
    getUser: getUser,
    getComponentId: getComponentId,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({tabNavigationPress: tabNavigationPress}, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
