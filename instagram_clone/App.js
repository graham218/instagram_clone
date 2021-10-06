import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAYK0Pii81cSuFqjBgeVobSunMdvN9mfbs",
  authDomain: "instagram-clone-e7b28.firebaseapp.com",
  projectId: "instagram-clone-e7b28",
  storageBucket: "instagram-clone-e7b28.appspot.com",
  messagingSenderId: "920114888704",
  appId: "1:920114888704:web:8f179cce1ba2d409e858e5",
  measurementId: "G-TLFFVN451Y"
};

if(firebase.apps.length===0){
  firebase.initializeApp(firebaseConfig)
}

const Stack=createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loaded: false,
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      }else{
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const { loggedIn, loaded }=this.state
    if(!loaded){
      return(
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;
