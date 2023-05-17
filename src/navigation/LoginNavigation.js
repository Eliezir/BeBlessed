import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Login/WelcomeScreen'
import LoginScreen from '../screens/Login/LoginScreen'
import RegisterScreen from '../screens/Login/RegisterScreen'

const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
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

export default LoginNavigation;