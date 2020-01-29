import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView,
  Button
} from 'react-native'
import TriviaStore from '../store/TriviaStore';
import AddStatsPicker from './AddStatsPicker';

var store = null;

export default class AddTriviaStats extends Component {
  
  state = {
    catagory: [],
    catagories: []
  };

  async getCatagories(){
    try{
      let catagoriesList = await store.getCatagories();
      if(catagoriesList){
        this.setState(previousState => (
            { catagories: catagoriesList.sort() }
          ))
      }
    } catch (e){

    }
  }

  constructor(props) {
    super(props);
    store = new TriviaStore();
    this.references = [];
    for(var i = 0; i < 20; i++){
      var ref = React.createRef();
      this.references.push(ref);
    }
    this.getCatagories();
  }

  onPress(){
    var valuesToSave = {};
    console.log("---------------------------------------");
    for(var i = 0; i < this.references.length; i++){
      var stateObj = this.references[i].current.state,
          catagory = stateObj.catagory;
        if(!valuesToSave[catagory]){
           valuesToSave[catagory] = {
            correct: 0,
            incorrect: 0
          };
        }
      if(stateObj.correct){
         valuesToSave[catagory].correct+=1;
      } else {
        valuesToSave[catagory].incorrect+=1;
      }
    }
    this.attemptToSave(valuesToSave);
  }

  async attemptToSave(valuesToSave){
    const keys = Object.keys(valuesToSave);;
    for(var i = 0; i < keys.length; i++){
      var key = '@' + keys[i];
      await store.updateTotal(key, valuesToSave[keys[i]]);
    }
    for(var i = 0; i < keys.length; i++){
      var key = '@' + keys[i];
      let result = await store.getCatagoryTotal(key);
      console.log(result);
    }
    //temp remove once done
   // await store.clearTheStore();
  }

  /**
  * render the input list
  */
  render() {
    var pickerItems = [],
        pickers = [];
    if (this.state.catagories.length > 1) {
      this.state.catagories.forEach(function(item, index){
          pickerItems.push(<Picker.Item key={item} label={item} value={item} />);
      });
    }
    for(var i = 0; i < 20; i++){
      var itemKey = 'question' + i;
      pickers.push(
        <AddStatsPicker key={itemKey} ref={this.references[i]} pickerItems={pickerItems} questionNumber={i}/>  
      )
    }
    return (
      <ScrollView style={{paddingLeft: 10, paddingRight: 10}}>
         {pickers}
        <Button
          title="Save"
          onPress={this.onPress.bind(this)}
        />
      </ScrollView>
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
