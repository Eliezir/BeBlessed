import React,{useState} from "react";
import {
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import MyInput from "../components/myInput"
import LoginButton from "../components/loginButton";
import Icon from "react-native-vector-icons/Ionicons";
import { getAuth } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import {updateUser, changePhoto} from "../services/userServices";
const {width,height} = Dimensions.get("window")

export default function ProfileEdit(props) {
const navigation = useNavigation();
const firebaseAuth = getAuth();
const user = firebaseAuth.currentUser;

const [overlay, setOverlay] = useState(false);
const [userName, setUsername] = useState(user.displayName);
const [userPhoto, setUserPhoto] = useState(user.photoURL)

const changeUserPhoto = async() =>{
const photo = await changePhoto(userPhoto)
setUserPhoto(photo)
}

const saveUpdates = async()=>{
 await updateUser(user,userName, userPhoto)
  props.reloadUser()
}

 return (
   <View style={styles.container}>
    <View style={styles.header}>
    <Icon name="chevron-back-outline" size={30} color="#ffff" onPress={()=>navigation.navigate("Profile")}/>
    </View>
    
    <ImageBackground source={{uri:userPhoto}} style={styles.userImage}>
     <TouchableOpacity style={styles.updateImageContainer} onPress={()=>{changeUserPhoto()}}>
    <View style={styles.updateImageicon}>
     <Icon name="camera" size={20} color="#000" />
     </View>
     <Text style={styles.updateImageText}>Alterar foto de perfil</Text>
     </TouchableOpacity>
      
      </ImageBackground>

      <MyInput
          icon={"user"}
          style={styles.input}
          placeholder={"Username"}
          onChangeText={setUsername}
          value={userName}
          overlay={(v) => setOverlay(v)}
          placeholderTextColor="#894edf"
        />

         <LoginButton
            text={"Salvar"}
            buttonColor={"#fff"}
            textColor={"#181a20"}
            borderColor={"transparent"}
            height={50}
            marginTop={20}
            width={"90%"}
            function={()=> saveUpdates()}
        />

{overlay ? <View style={styles.overlay} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181a20",
    alignItems: "center",
    flex:1,
  },
  header: {
    top: 35,
    width: "95%",
    justifyContent:"space-between",
    flexDirection:"row"
  },
  userImage:{
    height:height/2.5,
    width:width,
    zIndex:-1,
    top:0,
    marginBottom:10,
    marginTop:-40,
    justifyContent:"center",
    alignItems:"center"
  },
  updateImageContainer:{
    position:'absolute',
    bottom:0, 
    flexDirection:"row",
    alignItems:"center"
  },
  updateImageText:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:16
  },
  updateImageicon:{
    backgroundColor:"#FFF",
    borderRadius:40,
    alignItems:"center",
    width:30,
    height:30,
    justifyContent:"center",
    marginRight:5
    
  },
  input: {
    height: 40,
    fontSize: 13,
    color: "#894edf",
    borderColor: "#894edf",
    borderWidth: 0.5,
    marginTop: 5,
    paddingLeft: 10,
    marginHorizontal: 20,
    width:"70%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    height,
    width,
  },
});
