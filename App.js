import 'react-native-gesture-handler';
import { useState } from 'react';

import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import Profile  from './src/screens/Profile'

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAwSDlGHKEKX_GLIwjp-y6d3AVSkUQRWgs",
  authDomain: "beblessed-640a7.firebaseapp.com",
  projectId: "beblessed-640a7",
  storageBucket: "beblessed-640a7.appspot.com",
  messagingSenderId: "659842303363",
  appId: "1:659842303363:web:88664d968d026f184be2b6"
};

const Stack = createStackNavigator();
const app = initializeApp(firebaseConfig);

export default function App() {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(getAuth(app), (user) => {
    if (user) {
      console.log("User logged in...");
      setUser(user);
    } else {
      console.log("User not logged in...");
      setUser(null);
    }
  });


  if(user){
    return(
      <Profile/>
    )
  }

  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
</NavigationContainer>
  );
}
