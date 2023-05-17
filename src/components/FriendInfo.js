import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function components(props) {
    const buttonFunction = props.addFriendFunc ? props.addFriendFunc : props.removeFriendFunc
    const user = props.user;
 return (
   <View style={styles.container}>
 
    
    {user.photoURL ? user.photoURL.charAt(0) != "#" ?
    <Image style={styles.icon} source={{uri:user.photoURL}}/>:
    <Text style={[styles.userIcon,{backgroundColor:user.photoURL}]}>{user.username.charAt(0)}</Text>
    : null
    }
    <View style={styles.nameContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.userName}>{user.userName}</Text>
    </View>
    <TouchableOpacity style={ props.addFriendFunc ? styles.addButton : styles.removeButton} onPress={buttonFunction}>
        <Text style={[styles.buttonText, props.removeFriendFunc ? styles.removeButtonText : null]}>{props.addFriendFunc ? "ADD" : "X"}</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
    width: "100%",
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
},
icon:{
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#fff",
},
userIcon:{
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    width: 65,
    height: 65,
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: "center",
    textTransform: "uppercase",
},
nameContainer:{
    width: "60%",
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
addButton:{
    backgroundColor: "#303030",
    padding: 5,
    paddingHorizontal: 7.5,
    borderRadius: 15,
},
removeButton:{
   height:35,
   width:35,   
},
buttonText:{
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
},
removeButtonText:{
    fontSize:20,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#c9c9c9",
}


});