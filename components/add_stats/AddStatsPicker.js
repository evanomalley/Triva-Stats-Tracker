import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView,
  Switch
} from 'react-native'

var store = null;

export default class AddStatsPicker extends Component {
  
  state = {
    catagory: 'Buiznass',
    correct: false
  };

  /**
  * render the input list
  */
  render() {
    return (
        <View style={styles.row}>
          <Text style={styles.textStyle}>Question {this.props.questionNumber + 1}: </Text>
          <Picker
            selectedValue={this.state.catagory}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({catagory: itemValue})
            }>
            {this.props.pickerItems}
          </Picker>
          <Switch value={this.state.correct}
          onValueChange={(itemValue) =>
              this.setState({correct: itemValue})
            }/>
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
