/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,NavigatorIOS
} from 'react-native';

import Login from './src/components/login';

export default class crocodileBird extends Component {
  render() {
    return (
      <NavigatorIOS
       initialRoute={{
         component: Login,
         title: '',
         barTintColor : 'white',
         shadowHidden : true
       }}
       style={{flex: 1}}
     />
    );
  }
}

const styles = StyleSheet.create({
  navBar : {

  }
});

AppRegistry.registerComponent('crocodileBird', () => crocodileBird);
