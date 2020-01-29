import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import defaultCatagories from './DefaultCatagories.json';


var catagoriesKey = "@catagoriesKey";

export default class TriviaStore{
  
  async clearTheStore(){
    try{
      await AsyncStorage.clear();
      await this.setUpStore();
    } catch (e){
      console.log('clear failed');
    }
  }

  /**
  * Set up the store with default catagories if there
  * are no catagories in the store
  */
  async setUpStore(){
    const catagories = defaultCatagories.catagories;
    let needsCatagories = await this.getCatagories()
    if( needsCatagories === false){
      let result = await this.storeData(catagoriesKey, catagories.toString());
      console.log('result', result)
    }
  }

  //Set methods
  async storeData(key, data) {
  	try {
      console.log(key);
  		const result = await AsyncStorage.setItem(key, data.toString());
      return result;
  	} catch (error){
  		//Error handler needs to happen
      console.log('Save Failed')
      return false;
  	}
  }

  async updateTotal(key, newData) {
    try {
      const result = await AsyncStorage.getItem(key);
      if(result !== null){
        var data = JSON.parse(result)
        data.correct += newData.correct;
        data.incorrect += newData.incorrect;
        return await AsyncStorage.setItem(key, JSON.stringify(data));
      } else {
        console.log('there is no data adding new data');
        return await AsyncStorage.setItem(key, JSON.stringify(newData));
      }
    } catch (error){
      return false;
    }
  }

  //Get methods
  async getCatagoryTotal(key){
  	try {
  		const result = await AsyncStorage.getItem(key);
  		if(result !== null){
       // var data = JSON.parse(result)
        return result;
  		} else {
  			console.log('there is no data');
        return false;
  		}
  	} catch (error){
      console.log(error)
      return false;
  	}
  }

  async getCatagories(){
    try {
      const result = await AsyncStorage.getItem(catagoriesKey);
      if(result !== null){
        var data = result.split(',');
        return data;
      } else {
        console.log('there are no catagories');
        return false;
      }
    } catch (error){
      console.log(error);
      return false;
    }
  }
}