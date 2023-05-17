import React from 'react';
import { FlatList, Text, View } from 'react-native';
import FriendItem from "../../../components/FriendInfo"
import { addFriend, getUsers } from "../../../services/userServices";
import { useEffect, useState } from 'react';

export default function FriendList(props) {
    const[users, setUsers] = useState()
    const {user, refresh, reloadScreens} = props;
    useEffect(()=>{
    getUsers(user, "allUsers").then((userFireStore)=>{
      setUsers(userFireStore)

    })
  },[refresh, reloadScreens])

  const handleAddFriend = (friend) => {
    addFriend(friend,user)
    props.reloadScreens()
  }
 return (
   <View style={{backgroundColor: "#181a20", height:"100%"}}>
    <Text style={{... props.sectionTextStyle}}>Adicione seus amigos!</Text>
{users &&
  <FlatList
  data={users}
  renderItem={({item, index}) =>  
  <FriendItem key={index} user={item} addFriendFunc={()=>{handleAddFriend(item)}}/>}
  />}
   </View>
  );
}