import React from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';


//Import Screens
import Home from './screens/Home';
import Explore from './screens/Explore';
import Upload from './screens/Upload';
import Bookmark from './screens/Bookmark';
import Profile from './screens/Profile';

import SplashScreen from './screens/SplashScreen';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Register from './screens/Register';


//Tabs for Main App //Needs To Be First --> to be Defined before usage
const Tabs = TabNavigator({
  Home: {
    screen: Home,
  },
  Explore: {
    screen: Explore,
  },
  Upload: {
    screen: Upload,
  },
  Bookmark: {
    screen: Bookmark,
  },
  Profile: {
    screen: Profile,
  }
});

//Stack for Intro/Login of App
export const Stack = StackNavigator({
  Splash: {
    screen: SplashScreen
  },
  Welcome:{
    screen: Welcome
  },
  Login:{
    screen: Login
  },
  Register:{
    screen: Register
  },
  Tabs:{
    screen: Tabs
  }
})
