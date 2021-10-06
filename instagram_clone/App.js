import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/auth/Landing';
import * as firebase from 'firebase';

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
  firebase.initializeApp(firebaseConfig);
}

const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
