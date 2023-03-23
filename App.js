import 'react-native-gesture-handler';
import { useState } from 'react';

import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import Profile  from './src/screens/Profile'
import UserNotVerified from "./src/screens/UserNotVerified"

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';

const firebaseConfig = {

};

const Stack = createStackNavigator();
const app = initializeApp(firebaseConfig);

export default function App() {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);

   useState(()=>{
    SecureStore.getItemAsync("user").then((user)=>{
      setUser(user)
    })
   },[])
 
  onAuthStateChanged(getAuth(app), (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  const validateEmail = async () =>{
     const userValidate = await auth.currentUser.reload();
     console.log(userValidate)
    if (userValidate) {
      setUser(userValidate);
    } else {
      setUser(null);
    }
    };
  


  if(user){
    if(user.emailVerified){
      return(
        <Profile user={user}/>
      )
    }
    else if(!user.emailVerified){
      return(
        <UserNotVerified user={user} checkUser={()=>{validateEmail()}}/>
      )
    }
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
