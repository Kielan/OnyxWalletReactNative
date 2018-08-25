'use strict'
import React, { Component } from 'react'
import { ART, LayoutAnimation, View, Text, TouchableOpacity } from 'react-native'
const {
  Surface,
  Group,
  Shape,
} = ART
import * as graphUtils from '../utils/d3Service'
const PaddingSize = 20
const TickWidth = PaddingSize * 2
const AnimationDurationMs = 3000

class AssetDataGraph extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    graphWidth: 0,
    graphHeight: 0,
    linePath: '',
  }
  componentDidMount() {
    console.log('channeldatagraph componentDidMount', this.props)
    this.computeNextState(this.props)
  }
  computeNextState(nextProps) {
    const {
      data,
      width,
      height,
      xAccessor,
      yAccessor,
    } = nextProps
    const fullPaddingSize = PaddingSize * 2
    console.log('computeNextState b4 err', data, 'xAccessor', xAccessor, 'yAccessor', yAccessor)

    const graphWidth = width - fullPaddingSize
    const graphHeight = height - fullPaddingSize
    const lineGraph = graphUtils.createLineGraph({
      data,
      xAccessor,
      yAccessor,
      width: graphWidth,
      height: graphHeight,
    })
    console.log('computeNextState b4 err lineGraph', lineGraph)

    this.setState({
      graphWidth,
      graphHeight,
      linePath: lineGraph.path,
      ticks: lineGraph.ticks,
      scale: lineGraph.scale,
    })
    console.log('computeNextState', this.state, 'linegraph', lineGraph)

    // The first time this function is hit we need to set the initial
    // this.previousGraph value.
    if (!this.previousGraph) {
      console.log('computeNextState !this.previousGraph', lineGraph)
      this.previousGraph = lineGraph
    }
    console.log('err happening computenextstate this.props !== nextProps', this.props, 'and', nextProps)
    if (this.props !== nextProps) {
      const pathFrom = this.previousGraph.path
      const pathTo = lineGraph.path

      cancelAnimationFrame(this.animating)
      this.animating = null
      // Opt-into layout animations so our y tickLabel's animate.
      // If we wanted more discrete control over their animation behavior
      // we could use the Animated component from React Native, however this
      // was a nice shortcut to get the same effect.
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          AnimationDurationMs,
          LayoutAnimation.Types.easeInEaseOut,
          LayoutAnimation.Properties.opacity,
        )
      )
      this.setState({
        // Create the ART Morph.Tween instance.
        linePath: Morph.Tween( // eslint-disable-line new-cap
          pathFrom,
          pathTo,
        ),
      }, () => {
        // Kick off our animations delcaratively and set dirty state for lifecycle check
        console.log('setState animate()', this.props)
//        this.animate()
      })
      this.previousGraph = lineGraph
    }
  }
  render() {
    const {
      yAccessor,
    } = this.props
    const {
      graphWidth,
      graphHeight,
      linePath,
      ticks = [],
      scale = {},
    } = this.state
    return (
      <View>
      <TouchableOpacity><Text>BTC/USD</Text></TouchableOpacity>
      <Surface width={this.props.width} height={this.props.height}>
        <Group x={50} y={0}>
          <Shape
            d={linePath}
            stroke="#000"
            strokeWidth={1}/>
        </Group>
      </Surface>
      <View key={'ticksYDot'} style={styles.ticksYContainer}>
        {ticks.map((tick, index) => (
          <View
            key={index}
            style={[styles.ticksYDot, {
              left: tick.x + 49,
              top: tick.y,
            }]}
          />
        ))}
      </View>
      <View><Text>your assets</Text></View>
      </View>
    )
  }
}
export { AssetDataGraph }
const styles = {
}
