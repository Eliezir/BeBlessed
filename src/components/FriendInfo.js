import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function components(props) {
 return (
   <View style={styles.container}>
    
    {props.userPhoto.charAt(0) != "#" ?
    
    <Image style={styles.icon} source={{uri:props.userPhoto}}/>:
    <Text style={[styles.userIcon,{backgroundColor:props.userPhoto}]}>{props.userName.charAt(0)}</Text>
    }
    <View style={styles.nameContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.userName}>{props.userName}</Text>
    </View>
    <TouchableOpacity style={styles.addButton} onPress={props.addFriendFunc}>
        <Text style={styles.buttonText}>ADD</Text>
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
buttonText:{
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
}

});