import React from 'react';
import { SafeAreaView, View, Image, Dimensions, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
const logoH = require("../assets/img/logoHorizontal.png")
const blessinho = require("../assets/img/blessinho.png")
const logo = require("../assets/img/logoIcon.png")

import {FontFamily} from "../util/CommonStyle"



export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View style={styles.header}><Image style={styles.logo} source={logoH}/></View>
            <View style={styles.bottomContainer}>
            <Text style={styles.title}>Be Blessed</Text>
            <Text style={styles.text}>Conheça mais sobre seus amigos e você mesmo, bem vindo ao BeBlessed</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor:'transparent', borderColor:"white"}]}>
            <Text style={[styles.buttonText,{color:"white"}]}>Sign up</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
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
        width:160,
        height:35,
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
        color:"#c6c6c6"
    },
    button:{
        width:"100%",
        height:45,
        backgroundColor:"#ffff",
        borderColor:"transparent",
        borderWidth:1.5,
        alignItems:"center",
        justifyContent:'center',
        marginTop:25,
        borderRadius:8,
    },
    buttonText:{
        fontWeight:"bold",
        fontSize:16,
        color:"#695FBA"
    }

  });
  