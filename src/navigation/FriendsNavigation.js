import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddFriend from "../screens/Friends/FriendsList/AddFriend"
import Friends from "../screens/Friends/FriendsList/Friends.js"
import RequestedFriends from "../screens/Friends/FriendsList/RequestedFriends.js"

const Tab = createBottomTabNavigator();

function NavegacaoCompartilhada({ user, refresh, setRefresh,reloadScreens, filter   }) {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, showLabel: false, tabBarShowLabel: false, tabBarStyle: [styles.tabBar] }}>
      <Tab.Screen name="AddFriends"
        children={() => <AddFriend filter={filter} refresh={refresh} setRefresh={setRefresh} reloadScreens={reloadScreens}  user={user} sectionTextStyle={styles.sectionText} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconView} >
              <Text style={[styles.navbarText, { backgroundColor: focused ? "#6320EE" : "transparent" }]}> Sugestions</Text>
            </View>
          )
        }} />
      <Tab.Screen name="Friends"
        children={() => <Friends  filter={filter} refresh={refresh} setRefresh={setRefresh} user={user} sectionTextStyle={styles.sectionText} reloadScreens={reloadScreens} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconView} >
              <Text style={[styles.navbarText, { backgroundColor: focused ? "#6320EE" : "transparent" }]}> Friends</Text>
            </View>
          )
        }} />
      <Tab.Screen name="RequestedFriends"
        children={() => <RequestedFriends refresh={refresh} setRefresh={setRefresh} user={user} sectionTextStyle={styles.sectionText} reloadScreens={reloadScreens} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconView} >
              <Text style={[styles.navbarText, { backgroundColor: focused ? "#6320EE" : "transparent" }]}> Requests</Text>
            </View>
          )
        }} />

    </Tab.Navigator>
  );
}

export default function FriendsNavigation(props) {
  const user = props.user
  const [refresh, setRefresh] = useState(false)

  const reloadScreens = () => {
    setRefresh(!refresh);
  }

  return (
    <NavigationContainer independent={true}>
      <NavegacaoCompartilhada filter={props.filter} user={user} refresh={refresh} reloadScreens={()=>{reloadScreens()}}/>
  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#1a252d',
    elevation: 1,
    borderRadius: 15,
    height: 50,
    width: "100%",
    borderTopColor: "transparent",
  },
  navbarText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    padding: 10,
    borderRadius: 15,
 
},
sectionText: {
color: "#cecece",
fontSize: 13,
textTransform: "uppercase",
fontWeight: "bold",
textAlign: "left",
width: "100%",
marginVertical: 10,
},
buttonContainer: {
alignItems: 'center',
marginTop: 20,
},
});