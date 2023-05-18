import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';

export default function userIcon(props) {
    const user = props.user;
 return (
   <>
      {user.photoURL ? user.photoURL.charAt(0) != "#" ?
    <Image style={styles.userIcon} source={{uri:user.photoURL}}/>:
    <Text style={[styles.userIcon,styles.iconName, {backgroundColor:user.photoURL}]}>{user.displayName.charAt(0)}</Text>
    : null
    }
   </>
  );
}

const styles = StyleSheet.create({
    userIcon: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    iconName:{
      fontSize: 20,
      color: "#fff",
      textAlign: "center",
  },

  });