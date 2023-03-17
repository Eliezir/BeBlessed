import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
const logoH = require("../assets/img/logoHorizontal.png");
import background from "../assets/img/background3.png";

import LoginButton from "../components/loginButton";
import FormInput from "../components/formInput";
import Row from "../components/orRow";
import ReturnArrow from "../components/ReturnArrow" 

import {createUser} from "../services/AuthServices"

import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

export default function LoginScreen() {
  const[userEmail, setUserEmail] = useState("");
  const[userPassword, setUserPassword] = useState("");
  const[userName, setUserName] = useState("");

  return (
    <KeyboardAvoidingWrapper>
          <ImageBackground source={background} style={styles.container}>
            <View style={styles.header}>
            <ReturnArrow navigate={"Welcome"}/>
            </View>
            <Text style={styles.title}>Faça Seu{"\n"}Cadastro</Text>
            <View style={styles.bottomContainer}>
                <FormInput
                 icon={"user-o"}
                 iconColor={"grey"}
                 placeholder={"Nome"}
                 setUseState={setUserName}
                 useState={userName}
              />
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
                placeholder={"Senha"}
                setUseState={setUserPassword}
                useState={userPassword}
              />
              <LoginButton
                text={"Sign Up"}
                buttonColor={"#734d9d"}
                textColor={"#ffff"}
                borderColor={"transparent"}
                function={()=>createUser(userEmail, userPassword)}
              />
              <Row />
              <LoginButton
                text={"Log in"}
                buttonColor={"transparent"}
                borderColor={"grey"}
                textColor={"grey"}
                navigate={"Login"}
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
