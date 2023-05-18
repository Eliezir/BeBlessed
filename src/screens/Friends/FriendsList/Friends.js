import React from "react";
import { FlatList, Text, View } from "react-native";
import FriendItem from "../../../components/FriendInfo";
import { getUsers, removeFriend } from "../../../services/userServices";
import { useEffect, useState } from "react";

export default function Friends(props) {
  const [users, setUsers] = useState([]);
  const { user, refresh, reloadScreens } = props;

  var filter = props.filter.toLowerCase();
  useEffect(() => {
    const userList = [];
    getUsers(user, "friends").then((userFireStore) => {
      userFireStore.forEach((user) => {
        if (user.name.toLowerCase().includes(filter)) {
          userList.push(user);
        }
      });
      setUsers(userList);
    });
  }, [refresh, reloadScreens]);

  const handleRemoveFriend = (friend) => {
    removeFriend(friend, user);
    props.reloadScreens();
  };
  return (
    <View style={{ backgroundColor: "#181a20", height: "100%" }}>
      {users.length > 0 ? (
        <>
          <Text style={{ ...props.sectionTextStyle }}>Seus Amigos!</Text>
          <FlatList
            data={users}
            renderItem={({ item, index }) => (
              <FriendItem
                key={index}
                user={item}
                removeFriendFunc={() => {
                  handleRemoveFriend(item);
                }}
              />
            )}
          />
        </>
      ) : (
        <Text style={{ ...props.sectionTextStyle }}>
          Cadê seus amigos ? Adicione alguns!
        </Text>
      )}
    </View>
  );
}
