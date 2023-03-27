import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import {  Alert } from "react-native";
import * as SecureStore from 'expo-secure-store';


export const doLogin =  (email,password) => {
    const firebaseAuth = getAuth();
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await SecureStore.setItemAsync("user", JSON.stringify(user));
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email': 
          Alert.alert("Erro","Email inválido.")
          break;
          case 'auth/wrong-password':
          Alert.alert("Erro", 'Senha incorreta.')
          break;
        }
      })
  }

  export const createUser = (email,password,userName) => {
    const firebaseAuth = getAuth();
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(userCredential.user,{displayName:userName})
        sendEmailVerification(userCredential.user)
        SecureStore.setItemAsync("user", JSON.stringify(user));
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email': 
          Alert.alert("Erro","Email inválido.")
          break;
          case 'auth/email-already-in-use':
          Alert.alert("Erro", 'Já existi uma conta com o endereço de email fornecido.')
          break;
        }
      })
  }

  export const SendValidateEmail = (user) =>{
    sendEmailVerification(user).then(() => {
      Alert.alert('Aplicativo', 'Email enviado, confira sua caixa de mensagens', [
        { text: 'OK', onPress: () => { } },
      ]);
    })

  }

export const ForgotPassword = (email)=> {
  const firebaseAuth = getAuth()
    if (email !== ''){
    sendPasswordResetEmail(firebaseAuth, email)
    .then((r) => {
      Alert.alert("Atenção","Enviamos um e-mail de recuperação de senha para "+email,
      [{text: 'OK'}])
    })
    .catch((e) => {
      switch (e.code) {
        case 'auth/user-not-found':
        Alert.alert('Erro','Usuário não cadastrado.');
        break;
        case 'auth/invalid-email': 
        Alert.alert("Erro","Email inválido.")
        break;
        case 'auth/user-disabled': 
        Alert.alert("Erro", 'Usuário desabilitado.')
        break;

      }
    })
  }else{
    Alert.alert('Atenção','Por favor digite o e-mail')
  }
  

}