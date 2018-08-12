'use strict'
import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { ActionListItemScreen } '../../components/ActionListItemScreen'
import { TouchableHighlight, FlatList, TextInput, Text, View } from 'react-native'

export class ActionsScreen extends Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this) // <== Will be automatically unregistered when unmounted
  }
  renderStory({ item }) {
    if (!item || item.isHidden) {
      return null;
    }
    if (item.type === 'page' && UI.settings.appearance.showPageEndings) {
      return (
        <Text style={styles.page}>PAGE {item.time + 1}</Text>
      );
    }
    return (
      <ActionListItemScreen
        isMasterView={true}
        key={item.id}
        item={item}
      />
    )
  }
  render() {
    return (
      <Navigation.Element elementId='animateActionsId'>
        <View
          style={styles.host}
          testID="ACTIONS_SCREEN"
        >
          <FlatList
            ref={this.listRef}
            style={styles.list}
            data={Stories.stories}
            extraData={Stories.stories.length}
            ListFooterComponent={!this.isRefreshing && Stories.isLoading && <Loading end={true} />}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderStory}
            refreshing={this.isRefreshing}
            onEndReachedThreshold={0.75}
            onRefresh={this.onRefresh}
            onEndReached={this.onEndReached}
            scrollEnabled={UI.scrollEnabled}
          />
        </View>
      </Navigation.Element>
    )
  }
}
