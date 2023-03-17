/* import validator from "validator"; */
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {  Alert } from "react-native";
/* import * as SecureStore from 'expo-secure-store'; */


export const doLogin = (email,password) => {
    const firebaseAuth = getAuth();
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
/*         SecureStore.setItemAsync("user", JSON.stringify(user)); */
      })
      .catch((error) => {
        console.error(error.type);
        Alert.alert('Aplicativo', 'Não foi possível fazer o login!', [
          { text: 'OK', onPress: () => { } },
        ]);
      })
  }

  export const createUser = (email,password) => {
    const firebaseAuth = getAuth();
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
/*         SecureStore.setItemAsync("user", JSON.stringify(user)); */
      })
      .catch((error) => {
        console.error(error.type);
        Alert.alert('Aplicativo', 'Não foi possível fazer o login!', [
          { text: 'OK', onPress: () => { } },
        ]);
      })
  }

