import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Dimensions, Image} from 'react-native';
import { SendValidateEmail } from '../services/AuthServices';

export default function UserNotVerified(props) {
    
    const hero = require("../assets/img/check-email.png");


    const user = props.user;
 return (
   <View style={styles.container}>
    <Text style={styles.title}>Validação de Email</Text>
    <View style={styles.hero}>
        <Image style={styles.heroImg} source={hero} />
      </View>
    <Text style={styles.text}>{user.displayName}, para acessar nosso app, primeiro você deve verificar o seu email.{"\n"}nós enviamos um email de verificação para {user.email}, faça a verificação e depois clique no botão abaixo para acessar seu perfil.</Text>
   <TouchableOpacity style={styles.button} onPress={props.checkUser}>
    <Text style={styles.buttonText}>Acessar</Text>
   </TouchableOpacity>
   <View style={{flexDirection:"row", marginTop:20}}>
   <Text style={[styles.text,{ marginHorizontal:0,fontSize:13}]}>Não recebeu o email?</Text>
   <Text style={[styles.text,{ marginHorizontal:0,fontSize:13 ,color:"#894edf"}]}
   onPress={()=>{SendValidateEmail(user)}}
   > clique aqui</Text>
   </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: "#181a20",
      flex:1
    },
    title:{
        fontSize:35,
        color:"#894edf",
        marginTop:30,
        textShadowColor: '#a759ff',
        textShadowRadius: 8,
        textTransform:"uppercase"
    },
    hero: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2,
        
      },
      heroImg: {
        width: "100%",
        height: "100%",
      },
    text:{
        marginHorizontal:"10%",
        color:"#FFF",
        fontSize:18,
        marginTop:5,
        textAlign:"justify"
    },
    button: {
        backgroundColor: "transparent",
        borderColor: "#894edf",
        borderWidth: 1.25,
        alignItems: "center",
        justifyContent: "center",
        width:"80%",
        height:45,
        borderRadius:5,
        marginTop:10
      },
      buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#695FBA",
      },
      
});