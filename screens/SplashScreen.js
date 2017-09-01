import React from 'react';
import {Text, View, Image } from 'react-native';

export default class SplashScreen extends React.Component {

  static navigationOptions = {
    title: 'Splash',
    header: null,
  }

  constructor(props){
    super(props)
    this.state={}
  }

  componentWillMount() {
    var navigator = this.props.navigation
    setTimeout(()=> {this.props.navigation.navigate('Welcome')
  }, 3000)
}
render() {
  return (
    <View style={{flex:1, backgroundColor: '#C6C6C6'}}>
      <View>
        <Image source={require('../assets/icons/logo-white-square.png')}/>
        <Image source={require('../assets/icons/logo-white.png')} />
      </View>
    </View>
  )
}
}
