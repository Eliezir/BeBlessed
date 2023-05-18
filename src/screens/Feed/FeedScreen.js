import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Post from "../../components/FeedPost";
import UserIcon from "../../components/userIcon"
import {getUserAndFriendsPosts} from "../../services/userServices"
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


export default function screens(props) {
    const navigation = useNavigation();
    const [posts, setPosts] = useState();
    const user = props.user;

 useEffect(() => {
  getUserAndFriendsPosts(user).then((posts) => {
    setPosts(posts);
  });
 }, []);



 return (
   <SafeAreaView style={styles.container}>
    <View style={styles.header}>
        <Icon
          name="people-sharp"
          size={30}
          color="#ffff"
          onPress={() => navigation.navigate("FriendsList")}
        />
     
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <UserIcon user={user}/>
        </TouchableOpacity>
      </View>
      {posts && 
      <FlatList  
      contentContainerStyle={{paddingBottom: 600}}
      style={styles.FlatList} data={posts}
        renderItem={({item, index}) => <Post key={index} post={item}/>} />
        }
      <TouchableOpacity style={styles.postButton} onPress={() => navigation.navigate("Camera")}
      />
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

    postButton:{
      position: "absolute",
      bottom: 15,
      width: 60,
      height: 60,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "#fff",
    },
    FlatList:{
     width: "95%",
     height: "100%",
    }
  });