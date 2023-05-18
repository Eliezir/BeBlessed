import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import UserIcon from './userIcon';
export default function Post(props) {
  const post = props.post;
  const user = {
    photoURL: post.photoURL,
    displayName: post.username,
  }


 return (
   <View>
    <View style={styles.header}>
      <UserIcon user={user}/>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{post.username}</Text>
        <Text style={styles.userName}>{post.time}</Text>
    </View>
      <View/>
    </View>
    <Image source={{uri:post.photo}}style={styles.post}></Image> 
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  width: "100%",
  height:"70%",
},
header:{
  width: "100%",
  height:"10%",
  alignSelf: "center",
  flexDirection: "row",
},
post:{
  width: "100%",
  height:450,
  backgroundColor: "green",


},
nameContainer:{
  width: "60%",
  marginLeft: 10,
}, 
name:{
  fontSize: 15,
  fontWeight: "bold",
  color: "#fff",
},
userName:{
  fontSize: 12,
  color: "#c6c6c6",
},

});