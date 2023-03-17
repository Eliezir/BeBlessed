import 'react-native-gesture-handler';
import { useState } from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
//firebase config ...
};

const Stack = createStackNavigator();
const app = initializeApp(firebaseConfig);

export default function App() {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);
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
