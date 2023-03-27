import { getAuth,updateProfile } from "firebase/auth";
import * as SecureStore from 'expo-secure-store';
import { getStorage, ref, uploadString } from "firebase/storage";
import * as ImagePicker from "expo-image-picker"
import React,{useState, useEffect} from 'react';


export const updateUser = (user, name) =>{

  if(name != user.displayName){
    updateProfile(user,{displayName:name})
    }

}
export const signOut = async () => {
  const firebaseAuth = getAuth();
  await SecureStore.deleteItemAsync("user");
  await firebaseAuth.signOut();
}



export const changePhoto = async() => {
/* const oldPhoto = oldPhoto */
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted'){
          alert('Desculpe, você precisa permitir o acesso à galeria')
        }else{
          console.log('conectado')
        }
      }
    })();

  
  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.assets[0]);
 
    if (!result.canceled) {
      reutrn(result.assets[0].uri);
    }
  };


export const uploadImage = async() => {
  const storage = getStorage();
  const storageRef = ref(storage, 'imagem1');
  uploadString(storageRef, image, 'data_url').then((snapshot) => {
  console.log('Uploaded a image!');
});
}