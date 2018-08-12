'use strict'
import { PureComponent } from 'react'
import { View, Platform, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

Loading.propTypes = {
  previewing: PropTypes.bool,
  visible: PropTypes.bool,
  end: PropTypes.bool,
  delay: PropTypes.number,
  testID: PropTypes.string,
}
export class Loading extends PureComponent {
  private delayTimer
  state = {
    visible: this.props.visible,
  }
  componentDidMount() {
    const { delay = 150 } = this.props
    this.delayTimer = setTimeout(
      () => this.setState({
        visible: true,
      }),
      delay,
    )
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      visible: newProps.visible,
    });
  }
  componentWillUnmount() {
    clearTimeout(this.delayTimer)
  }
  render() {
    const { visible } = this.state
    const { previewing, end } = this.props

    if (!visible) {
      return null
    }
/*
    const hostStyles = [
      styles.loading,
      end && styles.loading__end,
      previewing && styles.loading__preview,
    ]
*/
    //style={hostStyles}
    return (
      <View >
        <ActivityIndicator />
      </View>
    );
  }
}
