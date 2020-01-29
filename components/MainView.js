import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TriviaStore from './store/TriviaStore';
import AddTriviaStats from './add_stats/AddTriviaStats';
import StatsViewer from './view_stats/StatsViewer';

var store = null;

export default class MainView extends Component {

    state = {
	    catagoryInfo: null
    };  
	async getCatagories(){
		var catagoriesList = [];
	    try{
	      catagoriesList = await store.getCatagories();
	    } catch (e){

	    }
	    if(catagoriesList.length > 1){
	    	this.getData(catagoriesList);
	    }
	}

	async getData(catagoriesList) {
		var stateObj = {};
		for(var i = 0; i < catagoriesList.length; i++){
			try{
				var catagory = catagoriesList[i];
				let data = await store.getCatagoryTotal('@'+catagory);
				stateObj[catagory] = JSON.parse(data);
			} catch (e)
			{
				console.log(e);
			}
		}
	
		this.setState(previousState => (
            { catagoryInfo: stateObj }
          ))
	}

	constructor(props) {
	    super(props);
	    store = new TriviaStore();
	    this.getCatagories();
	}

	componentDidMount(){
		// let store = new TriviaStore();
		// var data = {
		// 	right: 2,
		// 	wrong: 5
		// }
		//store.clearTheStore()
		//store.storeCatagoryTotal('@scienceTotalKey', JSON.stringify(data)).then(
		//store.getCatagoryTotal('@scienceTotalKey');//);;
	}

 //    render() {
 //    	return (
	//       <View style={{ flex: 1}}>
	//         <AddTriviaStats/>
	//       </View>
	//     );
	// }

	 render() {
    	return (
	      <View style={{ flex: 1}}>
	      	<StatsViewer dataToShow={this.state.catagoryInfo}/>
	      </View>
	    );
	}
}
