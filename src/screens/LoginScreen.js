import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet, ImageBackground, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const logoH = require("../assets/img/logoHorizontal.png")


import LoginButton from "../components/loginButton"
import FormInput from "../components/formInput"

import background from "../assets/img/background2.jpeg"


export default function LoginScreen() {
    return (
        <ImageBackground source={background} style={styles.container}>
            <StatusBar/>
            <View style={styles.header}><Icon name="chevron-back-outline" size={30} color="#ffff" /></View>
            <Text style={styles.title}>Bem-Vindo {'\n'}De Volta</Text>
            <View style={styles.bottomContainer}>
            <TextInput style={styles.textInput}   placeholder={"E-mail"}></TextInput>
 {/*            <TextInput style={styles.textInput}   placeholder={"Senha"}></TextInput> */}
            <FormInput/>
            <Text style={styles.text}>Esqueceu a senha?</Text>
            <LoginButton text={"Log in"}  buttonColor={"#695FBA"} textColor={"#ffff"} borderColor={"transparent"}/>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:12.5,}}>
            <View style={{flex: 1, height: 1.25, backgroundColor: 'grey'}} />
            <View>
                <Text style={{width: 50, textAlign: 'center', color:"grey"}}>Ou</Text>
            </View>
            <View style={{flex: 1, height: 1.25, backgroundColor: 'grey'}} />
            </View>
            <LoginButton text={"Sign Up"} buttonColor={'transparent'} borderColor={"grey"} textColor={"grey"}/>
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
  