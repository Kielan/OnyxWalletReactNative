'use strict'
import * as scale from 'd3-scale'
import * as shape from 'd3-shape'
import * as d3Array from 'd3-array'

const d3 = {
  scale,
  shape,
}
/**
 * Create an x-scale.
 * @param {number} start Start time in seconds.
 * @param {number} end End time in seconds.
 * @param {number} width Width to create the scale with.
 * @return {Function} D3 scale instance.
 */
function createScaleX(start, end, width) {
  return d3.scale.scaleLinear()
    .domain([0, 4])
    .range([0, width]);
}

/**
 * Create a y-scale.
 * @param {number} minY Minimum y value to use in our domain.
 * @param {number} maxY Maximum y value to use in our domain.
 * @param {number} height Height for our scale's range.
 * @return {Function} D3 scale instance.
 */
function createScaleY(minY, maxY, height) {
  return d3.scale.scaleLinear()
    .domain([minY, maxY]).nice()
    // We invert our range so it outputs using the axis that React uses.
    .range([height, 0]);
}
/**
 * Creates a line graph SVG path that we can then use to render in our
 * React Native application with ART.
 * @param {Array.<Object>} options.data Array of data we'll use to create
 *   our graphs from.
 * @param {function} xAccessor Function to access the x value from our data.
 * @param {function} yAccessor Function to access the y value from our data.
 * @param {number} width Width our graph will render to.
 * @param {number} height Height our graph will render to.
 * @return {Object} Object with data needed to render.
 */
export function createLineGraph({data, xAccessor, yAccessor, width, height}) {
    // Get last item in the array.
  const lastDatum = data[data.length - 1]

  // Create our x-scale.
  console.log('Create our x-scale.', data[0])
  const scaleX = createScaleX(
    data[0].publishedAtSinceEpoch,
    lastDatum.publishedAtSinceEpoch,
    width
  )
  // Collect all y values.
  const allYValues = data.reduce((all, datum) => {
    all.push(yAccessor(datum))//was temperatureMax
    return all
  }, [])

  // Get the min and max y value.
  const extentY = d3Array.extent(allYValues)

  // Create our y-scale.
  const scaleY = createScaleY(extentY[0], extentY[1], height)

  // Use the d3-shape line generator to create the `d={}` attribute value.
  const lineShape = d3.shape.line()
    // For every x and y-point in our line shape we are given an item from our
    // array which we pass through our scale function so we map the domain value
    // to the range value.
    .x(d => scaleX(xAccessor(d)))
    .y(d => scaleY(yAccessor(d)));
    return {
        data,
        scale: {
          x: scaleX,
          y: scaleY,
        },
        path: lineShape(data),
        ticks: data.map((datum) => {
          const time = xAccessor(datum)
          const value = yAccessor(datum)

          return {
            x: scaleX(time),
            y: scaleY(value),
            datum,
          };
        }),
      }
}
//sort list and gather intervals of x time value and aggregate total messages
//to create yValue
export function createLiveStreamChannelActivityOverview(liveChatList) {
  const liveGraphData = {}
  const sortedChatList = sortChatlist(liveChatList, 'publishedAtSinceEpoch')
//  console.log('createLiveStreamChannelActivityOverview sortedChatList', sortedChatList)
  //each index is an x point and value at that location is the yValue
  const plotChartValues = internalPlotDatumFactoryX(sortedChatList)
//  console.log('right before err publishedAtSinceEpoch', plotChartValues)
  const activityPeak = plotChartValues[plotChartValues.length-1]//sortedChatList[sortedChatList.length-1]//reduceLiveChatActivityPeak(sortedChatList, 'publishedAtSinceEpoch')
  const activityFloor = plotChartValues[0]//reduceLiveChatActivityFloor(sortedChatList, 'publishedAtSinceEpoch')

  //map over array and add a key for a generalized yAccessor... > < not happy about how that turned out
  liveGraphData.messagesActivity = plotChartValues.map((x, i) => {
    return {
      messagesPerInterval: x,
      intervalPeriod: i,
    }
  })

  liveGraphData.activityPeak = activityPeak
  liveGraphData.activityFloor = activityFloor

  console.log('createLiveStreamChannelActivityOverview final liveGraphData', liveGraphData)
  return liveGraphData
//  console.log('createLiveStreamChannelActivityOverview membersMax', maxEmployedCapacity)
}

function sortChatlist(chatList, indexKey) {
//  console.log('sortChatlist args', chatList, indexKey)
  return hoareQuickSort(chatList, indexKey)
}
function reduceLiveChatActivityPeak(liveChatList, evalIndex) {
  console.log('sortChatlist reduceLiveChatActivityPeak', liveChatList, evalIndex)
  return liveChatList.reduce((previousLargestNumber, currentLargestNumber) => {
//    console.log('sortChatlist reduce', previousLargestNumber, currentLargestNumber)
    return (currentLargestNumber[evalIndex] > previousLargestNumber[evalIndex]) ? currentLargestNumber[evalIndex] : previousLargestNumber[evalIndex]
  })
}
function reduceLiveChatActivityFloor(liveChatList, evalIndex) {
  return liveChatList.reduce((previousLargestNumber, currentLargestNumber) => {
    return (currentLargestNumber[evalIndex] < previousLargestNumber[evalIndex]) ? currentLargestNumber[evalIndex] : previousLargestNumber[evalIndex]
  })
}
// Hoare partition scheme "pivot"
function partitionHoare(array, indexKey, left, right) {
  var pivot = Math.floor((left + right) / 2 )
  while(left <= right) {
    countInner++
    while(array[left][indexKey] < array[pivot][indexKey]) {
      left++
    }
    while(array[right][indexKey] > array[pivot][indexKey]) {
      right--
    }
    if(left <= right) {
      countSwap++
      swap(array, left, right)
      left++
      right--
    }
  }
  return left
}

var countOuter = 0
var countInner = 0
var countSwap = 0

// classic quickstort
function quicksort(array, indexKey, left, right) {
  countOuter++
  left = left || 0
  right = right || array.length - 1

  var pivot = partitionHoare(array, indexKey, left, right)

  if(left < pivot - 1) {
    quicksort(array, indexKey, left, pivot - 1)
  }
  if(right > pivot) {
    quicksort(array, indexKey, pivot, right)
  }
  return array
}
function hoareQuickSort(chatList, indexKey) {
  const quicksortResult = quicksort(chatList, indexKey)
//  console.log('hoareQuickSort, quicksortResult', quicksortResult)
  resetCounters()
  return quicksortResult
}
function resetCounters() {
  countOuter = 0
  countInner = 0
  countSwap = 0
}
// swap function helper
function swap(array, i, j) {
  var temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
//must have publishedAt key
function internalPlotDatumFactoryX(sortedList) {
//  console.log('internalPlotDatumFactoryX', sortedList)
  const msIntervalConstant = 30000
  var xDatumStepMax = sortedList[0].publishedAtSinceEpoch + 3000
  var yDatumVal = 0
  var indexPivot = 0
  var cleanedList = []
//  console.log('inside internalPlotDatumFactoryX', sortedList[0], 'is = to', xDatumStepMax)
  let xDatumList = sortedList.map((chartItem) => {
//    console.log('map chartitem', chartItem)
    if (chartItem.publishedAtSinceEpoch > xDatumStepMax) {
      cleanedList[indexPivot] = yDatumVal
//      console.log('inside internalPlotDatumFactoryX if opt 1 cleanedList', cleanedList, 'indexPivot', indexPivot, 'yDatumVal', yDatumVal)
      indexPivot = indexPivot+1
      xDatumStepMax = chartItem.publishedAtSinceEpoch + msIntervalConstant
      yDatumVal = 0
    } else {
      yDatumVal++
    }
  })
  return cleanedList
}
