import 'react-native-gesture-handler';
import {useEffect, useState } from 'react';
import UserNotVerified from "./src/screens/Login/UserNotVerified"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./src/firebase/config";
import AppNavigation from './src/navigation/AppNavigation';
import LoginNavigation from './src/navigation/LoginNavigation';
import * as SecureStore from 'expo-secure-store';


export default function App() {
 
  const [user, setUser] = useState(auth.currentUser);
 
 /*  useEffect(() => {
    SecureStore.getItemAsync("user").then((user) => {
      if (user) {
        setUser(JSON.parse(user));
      }
    });
  }, []); */


  onAuthStateChanged(auth, (user) => {
 
    if (user) {
      setUser(user);
    } 
    else {
      setUser(null);
    }
 
  });

  const updateUser = async () =>{
     const userValidate = await auth.currentUser.reload();
    if (userValidate) {
      setUser(userValidate);
    } else {
      setUser(null);
    }
    };



  if(user){
    if(user.emailVerified){
      return(
      <AppNavigation user={user} reloadUser={updateUser}/>
      )
    }
    else if(! user.emailVerified){
      return(
        <UserNotVerified user={user} checkUser={()=>{updateUser()}}/>
      )
    }
  }

  return (
 <LoginNavigation/>
  );
}


