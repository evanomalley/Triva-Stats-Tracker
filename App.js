/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MainView from './components/MainView'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar/>
      <MainView/>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;


      // <SafeAreaView>
      //   <ScrollView
      //     contentInsetAdjustmentBehavior="automatic"
      //     style={styles.scrollView}>
      //     {global.HermesInternal == null ? null : (
      //       <View style={styles.engine}>
      //         <Text style={styles.footer}>Engine: Hermes</Text>
      //       </View>
      //     )}
      //     <View style={styles.body}>
      //       <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]}/>
      //       <View style={styles.row}>
      //         <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
      //         <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
      //       </View>
      //        <View style={styles.row}>
      //         <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
      //         <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
      //       </View>
      //        <View style={styles.row}>
      //         <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
      //         <StatsPieChart colors={['#4287f5', '#d42a1e']} series={[60,40]} size="small"/>
      //       </View>
      //     </View>
      //   </ScrollView>
      // </SafeAreaView>