import React from 'react';
import { Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginButton(props) {
  const navigation = useNavigation();

 return (
    <TouchableOpacity style={[styles.button, {backgroundColor:props.buttonColor , borderColor:props.borderColor, marginTop:props.marginTop}]} onPress={()=>navigation.navigate(props.navigate)}>
    <Text style={[styles.buttonText,{color:props.textColor}]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:45,
        backgroundColor:"white",
        borderColor:"transparent",
        borderWidth:1.25,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:8,
    },
    buttonText:{
        fontWeight:"bold",
        fontSize:16,
        color:"#695FBA"
    }

  });
  