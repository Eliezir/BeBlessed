import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const logoH = require("../assets/img/logoHorizontal.png")


import {FontFamily} from "../util/CommonStyle"



export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View style={styles.header}><Icon name="chevron-back-outline" size={30} color="#ffff" /></View>
            <Text style={styles.title}>Bem-Vindo {'\n'}De Volta</Text>
            <View style={styles.bottomContainer}>
            <TextInput style={styles.textInput}   placeholder={"E-mail"}></TextInput>
            <TextInput style={styles.textInput}   placeholder={"Senha"}></TextInput>
            <Text style={styles.text}>Esqueceu a senha?</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:12.5,}}>
            <View style={{flex: 1, height: 1.25, backgroundColor: '#b3b0cb'}} />
            <View>
                <Text style={{width: 50, textAlign: 'center', color:"#b3b0cb"}}>Ou</Text>
            </View>
            <View style={{flex: 1, height: 1.25, backgroundColor: '#b3b0cb'}} />
            </View>
            <TouchableOpacity style={[styles.button, {backgroundColor:'transparent', borderColor:"#c6c6c6"}]}>
            <Text style={[styles.buttonText,{color:"#c6c6c6"}]}>Sign up</Text>
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
        width:'95%',
    },
    bottomContainer:{
        position:'absolute',
        bottom:20,
        width:'80%',
    },
    title:{
        color:"#ffff",
        fontSize:40,
        top:"15%",
        fontWeight:'bold',
        textAlign:"left",
        width:"90%"
    },
    textInput:{
        width:"100%",
        height:50,
        borderBottomWidth:1.5,
        borderBottomColor:"#c6c6c6"
    },
    text:{
        color:"#c6c6c6",
        textAlign:"right",
        marginBottom:15,
        marginTop:10,
    },
    button:{
        width:"100%",
        height:45,
        backgroundColor:"#ffff",
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
  