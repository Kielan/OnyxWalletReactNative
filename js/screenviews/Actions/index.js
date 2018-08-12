'use strict'
import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { ActionListItemScreen } from '../../components/ActionListItemScreen'
import { TouchableHighlight, FlatList, TextInput, Text, View } from 'react-native'

export class ActionsScreen extends Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this) // <== Will be automatically unregistered when unmounted
  }
  listRef = React.createRef()
  renderStory({ item }) {
    if (!item || item.isHidden) {
      return null
    }
    return (
      <ActionListItemScreen
        isMasterView={true}
        key={item.id}
        item={item} />
    )
  }
  render() {
    return (
      <Navigation.Element elementId='animateActionsId'>
        <View
          style={styles.host}
          testID="ACTIONS_SCREEN"
        >

        </View>
      </Navigation.Element>
    )
  }
}
/*
<FlatList
  ref={this.listRef}
  data={{[]}}
  extraData={Stories.stories.length}
  ListFooterComponent={!this.isRefreshing && Stories.isLoading && <Loading end={true} />}
  renderItem={this.renderStory}
  refreshing={this.isRefreshing}
  onEndReachedThreshold={0.75}
  scrollEnabled={true}
/>
*/
