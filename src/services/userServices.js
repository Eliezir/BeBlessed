import { getAuth,updateProfile } from "firebase/auth";
import * as SecureStore from 'expo-secure-store';

const firebaseAuth = getAuth();

export const updateUser = (user, name) =>{
  if(name != user.displayName){
    updateProfile(user,{displayName:name})
    }

}
export const signOut = async () => {
  await SecureStore.deleteItemAsync("user");
  await firebaseAuth.signOut();
}
