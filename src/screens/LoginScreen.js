import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const logoH = require("../assets/img/logoHorizontal.png");



import LoginButton from "../components/loginButton";
import FormInput from "../components/formInput";
import Row from "../components/orRow";
import ReturnArrow from "../components/ReturnArrow" 

import background from "../assets/img/background2.png";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

import { useNavigation } from '@react-navigation/native';

import {doLogin} from "../services/AuthServices"


export default function LoginScreen() {
  const navigation = useNavigation();

 const[userEmail, setUserEmail] = useState("");
 const[userPassword, setUserPassword] = useState("");
  return (
    <KeyboardAvoidingWrapper>
          <ImageBackground source={background} style={styles.container}>
            <View style={styles.header}>
            <ReturnArrow navigate={"Welcome"}/>
            </View>
            <Text style={styles.title}>Bem-Vindo {"\n"}De Volta</Text>
            <View style={styles.bottomContainer}>
              <FormInput
                icon={"envelope-o"}
                iconColor={"grey"}
                placeholder={"E-mail"}
                setUseState={setUserEmail}
                useState={userEmail}
              />
              <FormInput
                icon={"lock"}
                iconColor={"grey"}
                placeholder={"Password"}
                setUseState={setUserPassword}
                useState={userPassword}
              />
              <Text style={styles.text}>Esqueceu a senha?</Text>
              <LoginButton
                text={"Log in"}
                buttonColor={"#734d9d"}
                textColor={"#ffff"}
                borderColor={"transparent"}
                function={()=>doLogin(userEmail, userPassword)}
              />
              <Row />
              <LoginButton
                text={"Sign Up"}
                buttonColor={"transparent"}
                borderColor={"grey"}
                textColor={"grey"}
                navigate={"Register"}
              />
            </View>
          </ImageBackground>
</KeyboardAvoidingWrapper> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#695FBA",
    alignItems: "center",
    flex:1,

  },
  header: {
    top: 45,
    width: "95%",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    width: "80%",
  },
  title: {
    color: "#ffff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    width: "90%",
    top:"15%"
  },

  text: {
    color: "#734d9d",
    textAlign: "right",
    marginBottom: 15,
    marginTop: 10,
  },
});
