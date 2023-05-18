import { SafeAreaView,View, StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native';
import React,{useState, useEffect, useRef} from 'react';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {makePost} from "../../services/userServices"


export default function Feed(props) {
    const user = props.user;
    const navigation = useNavigation();
    const camRef = useRef(null);
    const [type, setType] = useState(CameraType.front);
    const [hasPermission, setHasPermission] = useState(null);
/*     const [capturedPhoto, setCapturedPhoto] = useState(null); */
    const [flashMode, setFlashMode] = useState(FlashMode.off);



      useEffect(() => {
    (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
      }, []);

      if(hasPermission === null){
        return <ActivityIndicator size="large" color="#9600ff"/>
      }

      if(hasPermission === false){
        alert("Você precisa permitir o acesso à câmera")
        navigation.navigate("Feed")
      }

      const takePicture = async () => {
        if(camRef){
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds(); 
        const time = hours + ":" + min + ":" + sec
          const data = await camRef.current.takePictureAsync();
          navigation.navigate("Feed")
          await makePost(user, data.uri, time)
         
        }
      }

 return (
   <SafeAreaView style={styles.container}>
     <View style={styles.header}>
        <Icon
          name="chevron-down"
          size={25}
          color="#ffff"
          onPress={() => navigation.navigate("Feed")}
        />
      </View>
      <Camera style={styles.photo} type={type} ref={camRef}
      flashMode={flashMode}
      />
      <View style={styles.photoOptions}>
        <Icon name={flashMode === "on" ? "flash-off-outline" : "flash-outline"} size={30} color="#fff" onPress={()=>{setFlashMode(flashMode === "off" ? FlashMode.on : FlashMode.off )}}/>
      <TouchableOpacity style={styles.postButton} onPress={() => takePicture()}/>
      <Icon name="camera-reverse" size={30} color="#fff" onPress={()=>{ setType(type === 'front' ? CameraType.back : CameraType.front)}}/>
      </View>
 

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#181a20",
      alignItems: "center",
      flex: 1,
      top:0,
    },
    header: {
      position: "relative",
      top: 15,
      width: "95%",
      justifyContent: "space-between",
      flexDirection: "row",
      height:75,
    },
    photo:{
        width: "100%",
        height:"63%",
        borderRadius: 10,
        backgroundColor: "#fff",
      },
      photoOptions:{
        position: "absolute",
        bottom: 55,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width: "60%",
      } ,
    postButton:{
      width: 60,
      height: 60,
      borderRadius: 50,
      borderWidth: 5,
      borderColor: "#fff",
    },
 
 
  });