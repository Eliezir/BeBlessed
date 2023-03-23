import React,{useState} from "react";
import {
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from "react-native";



import Icon from "react-native-vector-icons/Ionicons";

import userImage from "../assets/img/userImage.jpeg";
const {width,height} = Dimensions.get("window")

export default function Profile(props) {

const user = props.user;

 return (
   <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <Icon name="chevron-back-outline" size={30} color="#ffff"/>
    <Icon name="ellipsis-vertical" size={30} color="#ffff"/>
    </View>
    
    <ImageBackground source={userImage} style={styles.userImage}>
      <Text style={styles.userName}>{user.displayName}</Text>
      
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181a20",
    alignItems: "center",
    flex:1,
  },
  header: {
    top: 15,
    width: "95%",
    justifyContent:"space-between",
    flexDirection:"row"
  },
  userImage:{
    position:'absolute',
    height:height/2.5,
    width:width,
    zIndex:-1,
    top:0,

  },
  userName:{
    position:'absolute',
    bottom:-10, 
    left:35,
    color:"#fff",
    fontWeight:"900",
    fontSize:35
  },
});
