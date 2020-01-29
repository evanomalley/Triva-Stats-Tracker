import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView,
  Switch
} from 'react-native'

import StatsPieChart from '../charts/StatsPieChart';

var store = null;

export default class StatsViewer extends Component {
  
  state = {
    catagory: 'Buiznass',
    correct: false
  };

  generateChartSeries(dataToShow) {
    var keys = Object.keys(dataToShow),
        charts = [];

    for(var i = 0; i < keys.length; i++){
      var data = dataToShow[keys[i]],
          series = [data.correct, data.incorrect];
      
      charts.push(<StatsPieChart key={keys[i]} catagory={keys[i]} colors={['#4287f5', '#d42a1e']} series={series} size="medium"/>)
    }
      return charts;
  }

  /**
  * render the input list
  */
  render() {
    var charts = [];
    if(this.props.dataToShow != null){
      charts = this.generateChartSeries(this.props.dataToShow);
    }

    return (
        <View style={styles.row}>
          <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
           {charts}
          </View>
        </ScrollView>
        </View>  
    )
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#4287f5',
    height: 15,
    width: 15,
    margin: 10
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  textStyle: {
    marginTop: 15,
    width: 100
  }
})

 // <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]}/>
 //            <View style={styles.row}>
 //              <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
 //              <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
 //            </View>
 //             <View style={styles.row}>
 //              <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
 //              <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
 //            </View>
 //             <View style={styles.row}>
 //              <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
 //              <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
 //            </View>