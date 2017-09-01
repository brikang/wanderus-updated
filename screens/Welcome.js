import React from 'react';
import {Text, View , TouchableOpacity} from 'react-native';

export default class Welcome extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
          <Text>REGISTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
