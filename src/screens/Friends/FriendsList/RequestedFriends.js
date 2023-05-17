import React from 'react';
import { FlatList, Text, View } from 'react-native';
import FriendItem from "../../../components/FriendInfo"
import { acceptFriend, getUsers, removeInvite } from "../../../services/userServices";
import { useEffect, useState } from 'react';

export default function RequestedFriends(props) {
    const[users, setUsers] = useState([])
    const[invites, setInvites] = useState([])
    const {user, refresh, reloadScreens} = props;

    useEffect(()=>{
    getUsers(user,"requestedFriends").then((userFireStore)=>{
      setUsers(userFireStore)
    })
    getUsers(user,"sentRequestFriends").then((userFireStore)=>{
        setInvites(userFireStore)
      })
  },[refresh, reloadScreens])

    const  handleAcceptFriend = (friend) => {
        acceptFriend(friend,user)
        props.reloadScreens()
      }
    const handleRemoveInvite = (friend) => {
        removeInvite(friend,user)
        props.reloadScreens()
    }
    
 return (
    <View style={{backgroundColor: "#181a20", height:"100%"}}>
 
 {users.length > 0 ? <>
   <Text style={{... props.sectionTextStyle}}>Solicitação de amigos!</Text>
  <FlatList
  data={users}
  renderItem={({item, index}) =>  
  <FriendItem key={index} user={item}  addFriendFunc={()=>{handleAcceptFriend(item)}}/>}
  />
  </> :invites.length == 0 ?<Text style={{... props.sectionTextStyle}}>Você não tem nenhuma solicitação pedente ! </Text> : null }

  {invites.length > 0 ? <>
   <Text style={{... props.sectionTextStyle}}>Pedidos de amizade enviados!</Text>
  <FlatList
  data={invites}
  renderItem={({item, index}) =>  
  <FriendItem key={index} user={item}  removeFriendFunc={()=>{handleRemoveInvite(item)}}/>}
  />
  </>: null}
   </View>
  );
}