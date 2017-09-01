import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,NavigatorIOS,TouchableOpacity
} from 'react-native';


export default class login extends Component {

  constructor(props) {
     super(props);
   }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.loginContainer,styles.logoContainer]}>
          <Text>로고들어갈 자리</Text>
        </View>
        <View style={[styles.loginContainer,styles.buttonContainer]}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Facebook 계정으로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.signBtn]}>
          <Text style={[styles.buttonText,styles.signText]}>이메일로 가입하기</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container:{
    marginTop : 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer : {
    flex : 1,
    justifyContent: 'center',

  },
  logoContainer : {
    flex : 2,
    justifyContent: 'center',
  },
  logoText : {
    color : 'black'
  },
  buttonContainer : {
    flex : 1,
   justifyContent: 'center',
  },
  button : {
    width : 260,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 8.5,
    padding : 14,
    backgroundColor : '#4267b2',
    borderRadius: 5,
  },
  buttonText : {
    color : 'white',
    fontWeight : '600'
  },
  signBtn : {
    backgroundColor : 'white',
    borderWidth : 1,
    borderColor : 'rgb(124, 96, 217)'
  },
  signText : {
    color : 'rgb(124, 96, 217)'
  }

});
