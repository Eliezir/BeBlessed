import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  View,
  Button,
} from "react-native";

import { getAuth } from "firebase/auth";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import MyInput from "../components/myInput"
import FriendItem from "../components/FriendInfo"
import { addFriend, getUsers } from "../services/userServices";


export default function FriendList(props) {

  const [overlay, setOverlay] = useState(false);

  const navigation = useNavigation();
  const firebaseAuth = getAuth();
  const user = firebaseAuth.currentUser;
  const[users, setUsers] = useState([])


  useEffect(()=>{
  getUsers(user).then((userFireStore)=>{
    setUsers(userFireStore)
  })
},[])



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="chevron-forward-outline"
          size={30}
          color="#ffff"
          onPress={()=>navigation.navigate("Profile")}
        />
      </View>
      <MyInput
          icon={"search"}
          style={styles.input}
          placeholder={"Adicione ou pesquise amigos!"}
          /* onChangeText={setUserBio}
          value={userBio} */
          overlay={(v) => setOverlay(v)}
          placeholderTextColor="#894edf"
        />
        <View style={styles.FriendList}>
        <Text style={styles.sectionText}>Adicione seus amigos!</Text>
      
        {users && 
       
        users.map((userFriend,index)=>{
          return(
            <FriendItem key={index} name={userFriend.name} userName={userFriend.username} userPhoto={userFriend.photoURL} 
            addFriendFunc={()=>{addFriend(userFriend,user)}}/>
          )
        })
        
        }
   

        </View>
       
        {overlay ? <View style={styles.overlay} /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181a20",
    alignItems: "center",
    flex: 1,
    top:0,
  },
  header: {
    top: 15,
    width: "95%",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginBottom: 30,
  },
  input: {
    height: 40,
    fontSize: 13,
    color: "#894edf",
    borderColor: "#894edf",
    borderWidth: 0.5,
    marginTop: 5,
    paddingLeft: 10,
    marginHorizontal: 20,
    width:"70%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    height,
    width,
  },
  sectionText:{
    color:"#cecece",
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    marginVertical: 10,
  },
  FriendList:{
    width: "90%",
  }

});
