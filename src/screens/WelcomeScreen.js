
import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet } from 'react-native';
const logoH = require("../assets/img/logoHorizontal.png")
const background = require("../assets/img/background1.png")
import LoginButton from '../components/loginButton';


export default function WelcomeScreen() {

    return (
        <ImageBackground source={background} style={styles.container}>
            <View style={styles.header}><Image style={styles.logo} source={logoH}/></View>
            <View style={styles.bottomContainer}>
            <Text style={styles.title}>Be Blessed</Text>
            <Text style={styles.text}>Conheça mais sobre seus amigos e você mesmo, bem vindo ao BeBlessed</Text>
            <LoginButton marginTop={25} text={"Log in"}  buttonColor={"#ffff"} textColor={"#695FBA"} borderColor={"transparent"} navigate={"Login"}/>
            <LoginButton marginTop={25} text={"Sign Up"} buttonColor={'transparent'} borderColor={"#ffff"} textColor={"#ffff"} navigate={"Register"}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#695FBA",
        width:"100%",
        height:"100%",
        alignItems:'center'
    },
    header:{
        top:45,
        width:'90%',
    },
    logo:{
        width:120,
        height:25,
    },
    bottomContainer:{
        position:'absolute',
        bottom:20,
        width:'80%',
    },
    title:{
        color:"#ffff",
        fontSize:40,
        fontWeight:'bold',
    },
    text:{
        color:"#f4f4f4"
    },
  
 
  });
  