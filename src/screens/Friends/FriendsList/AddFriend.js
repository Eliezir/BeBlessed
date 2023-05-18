import React from 'react';
import { FlatList, Text, View } from 'react-native';
import FriendItem from "../../../components/FriendInfo"
import { addFriend, getUsers } from "../../../services/userServices";
import { useEffect, useState } from 'react';

export default function FriendList(props) {
    const[users, setUsers] = useState()
    const {user, refresh, reloadScreens} = props;
    var filter = props.filter.toLowerCase();
  
  
    useEffect(()=>{
    const userList = [];
    getUsers(user, "allUsers").then((userFireStore)=>{
      userFireStore.forEach((user)=>{
        if(user.name.toLowerCase().includes(filter)){
          userList.push(user)
        }
      })
      setUsers(userList)
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