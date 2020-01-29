import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

export default class BoxLabel extends Component {
 
  render() {
    return (
      <View style={styles.row}>
      	<View style={styles.box}/>
      	<Text style={styles.textStyle}>SCIENCE!!!</Text>
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
  	marginTop: 6
  }
})