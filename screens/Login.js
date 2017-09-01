import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
  Login() {
    this.props.navigation.navigate('Tabs')
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TouchableOpacity onPress={()=> {this.Login()}}>
          <Text>LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
