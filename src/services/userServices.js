import { getAuth,updateProfile } from "firebase/auth";
import * as SecureStore from 'expo-secure-store';
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import * as ImagePicker from "expo-image-picker"
import React,{useState, useEffect} from 'react';


export const updateUser = async (user, name, photo) =>{

  if(name != user.displayName){
    updateProfile(user,{displayName:name})
    }

  if(photo != user.photoURL){
    const storage = getStorage();
    const imageRef = ref(storage, 'ProfilePictures/' + user.displayName);
    let photoUrl
    const metadata = {
      contentType: 'image/png',
  };
  await uploadBytes(imageRef, photo, metadata)
  .then(async (snapshot) => 
  {
    await getDownloadURL(snapshot.ref).then((downloadURL) => {
      photoUrl = downloadURL;
    });
  })
  .catch((err) => 
  {
    console.error(err);
  })
  updateProfile(user,{photoURL:photo})
  }

}
export const signOut = async () => {
  const firebaseAuth = getAuth();
  await SecureStore.deleteItemAsync("user");
  await firebaseAuth.signOut();
}



export const changePhoto = async(oldPhoto) => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted'){
          alert('Desculpe, você precisa permitir o acesso à galeria')
        }
      }
    })();

  
  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if(result.canceled){
      return(oldPhoto)
    }

    if (!result.canceled) {
      return(result.assets[0].uri);
    }

  };


export const uploadImage = async(photo) => {

}