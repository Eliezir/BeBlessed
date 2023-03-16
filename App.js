import { StyleSheet, Text, View,StatusBar } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginScreen'



export default function App() {
  return (
    
    <View style={styles.container}>
       <StatusBar style="auto" />
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
