import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,NavigatorIOS,TouchableHighlight
} from 'react-native';


export default class login extends Component {

  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ',
    });
  }


  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onForward}>
          <Text style={{color:'pink'}}>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }

}
