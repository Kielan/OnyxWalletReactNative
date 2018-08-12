'use strict'
import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { AssetDataGraph } from '../../components/AssetDataGraph'
import { AssetList } from '../../components/AssetList'
import { TouchableHighlight, TextInput, Text, View } from 'react-native'

export class HomeScreen extends Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this) // <== Will be automatically unregistered when unmounted
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
