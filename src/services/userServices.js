import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";

import { db } from "../firebase/config";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  where,
  query,
  getDocs,
  arrayUnion,
  arrayRemove
} from "firebase/firestore";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const updateUser = async (user, name, photo) => {
  var updateName = (updatePhoto = false);
  if (name != user.displayName) {
    updateName = true;
  }

  if (photo != user.photoURL) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", photo, true);
      xhr.send(null);
    });

    const storage = getStorage();
    const imageRef = ref(storage, "ProfilePictures/" + user.uid);
    var url;
    const metadata = {
      contentType: "image/png",
    };
    await uploadBytes(imageRef, blob, metadata)
      .then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then((downloadURL) => {
          url = downloadURL;
        });
      })
      .catch((err) => {
        console.log(err);
      });
    updatePhoto = true;
  }

  if (updatePhoto && updateName)
    updateConfig = { photoURL: url, displayName: name };
  else if (updatePhoto) updateConfig = { photoURL: url };
  else updateConfig = { displayName: name };
  await updateProfile(user, updateConfig);
};

export const changePhoto = async (oldPhoto) => {
  (async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Desculpe, você precisa permitir o acesso à galeria");
      }
    }
  })();

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (result.canceled) {
    return oldPhoto;
  }

  if (!result.canceled) {
    return result.assets[0].uri;
  }
};

export const getUser = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const userStore = await getDoc(userRef);
  const data = userStore.data()
  return {
    bio: data.bio,
    friends: data.friends,
    username: data.username

  }
};
const sleep = m => new Promise(r => setTimeout(r, m))

export const getUsers = async (user, type) => {
  var userData = {};
  await sleep(100)
  while(Object.keys(userData).length < 4){
  var userRef = doc(db, "users", user.uid);
  var userStore = await getDoc(userRef);
  userData = userStore.data()
  }

  let usersRef = collection(db, "users");
  let q = query(usersRef);
  let usersStore = await getDocs(q);
  let users = [];
  
  class friendStore {
    constructor(doc) {
      this.uid = doc.id,
        this.bio = doc.data().bio,
        this.username = doc.data().username,
        this.name = doc.data().name,
        this.photoURL = doc.data().photoURL;
    }
   
  }
  usersStore.forEach((doc) => {
    if(type == "friends" && userData.friends.includes(doc.id)){
      friend = new friendStore(doc); users.push(friend);}
    else if(type == "sentRequestFriends" && userData.friendsRequestsSent.includes(doc.id)){
      friend = new friendStore(doc); users.push(friend);
    }
    else if(type == "requestedFriends" && userData.friendsRequestsReceived.includes(doc.id)){
      friend = new friendStore(doc); users.push(friend);
    }
     if (type == "allUsers" && doc.id !== user.uid && !userData.friendsRequestsSent.includes(doc.id) && !userData.friendsRequestsReceived.includes(doc.id) && !userData.friends.includes(doc.id) ) {
      friend = new friendStore(doc); users.push(friend);
    }
  });
  return users;
}





 export const updateBio = async (user, bio) => {
  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, { bio: bio }, { merge: true });
};


export const createFireStoreUser = async(user) =>{
  await setDoc(doc(db,"users",user.uid),
  {
    bio: `oi, meu nome é ${user.displayName} :D`,
    username: user.displayName,
    name: user.displayName,
    photoURL: user.photoURL,
    posts: [],
    friends: [],
    friendsRequestsSent: [],
    friendsRequestsReceived: []
  }
  )
}

export const addFriend = async (friend,user) => { 
  const userRef = doc(db, "users", user.uid);
  const friendRef = doc(db, "users", friend.uid);
  await setDoc(userRef, { friendsRequestsSent: arrayUnion(friend.uid), }, { merge: true });
  await setDoc(friendRef, { friendsRequestsReceived: arrayUnion(user.uid) }, { merge: true });
}

export const acceptFriend = async (friend,user) => {
  const userRef = doc(db, "users", user.uid);
  const friendRef = doc(db, "users", friend.uid);
  await setDoc(userRef, { friendsRequestsReceived: arrayUnion(friend.uid), friendsRequestsSent: arrayRemove(friend.uid) }, { merge: true });
  await setDoc(friendRef, { friendsRequestsSent: arrayUnion(user.uid), friendsRequestsReceived: arrayRemove(user.uid) }, { merge: true });
}

export const removeFriend = async (friend,user) => {
  const userRef = doc(db, "users", user.uid);
  const friendRef = doc(db, "users", friend.uid);
  await setDoc(userRef, { friends: arrayRemove(friend.uid) }, { merge: true });
  await setDoc(friendRef, { friends: arrayRemove(user.uid) }, { merge: true });
}

export const removeInvite = async (friend,user) => {
  const userRef = doc(db, "users", user.uid);
  const friendRef = doc(db, "users", friend.uid);
  await setDoc(userRef, { friendsRequestsSent: arrayRemove(friend.uid) }, { merge: true });
  await setDoc(friendRef, { friendsRequestsReceived: arrayRemove(user.uid) }, { merge: true });
}