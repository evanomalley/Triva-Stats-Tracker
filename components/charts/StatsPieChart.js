import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Pie from 'react-native-pie'
 
export default class StatsPieChart extends Component {

  render() {

    var size = this.props.size,
        series = this.props.series,
        totalAsked = series[0] + series[1],
        graphSize = {
            radius: 180,
            innerRadius: 120
        }

    if(size === "small"){
        graphSize.radius = 50;
        graphSize.innerRadius = 30;
    } else if(size === "medium"){
        graphSize.radius = 80;
        graphSize.innerRadius = 50;
    }

    series[0] = (series[0] / totalAsked) * 100;
    series[1] = (series[1] / totalAsked) * 100;
    console.log(totalAsked);
    return (
      <View style={styles.container}>
        <View>
        <Pie
          radius={graphSize.radius}
          innerRadius={graphSize.innerRadius}
          series={series}
          colors={this.props.colors} />
        </View>          
        <View style={styles.textPosition}>
            <Text styles={styles.gaugeText}>Total: {totalAsked}</Text>
        </View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'space-around',
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
  textPosition: {
    position: 'absolute',
    top: 90
  }
})