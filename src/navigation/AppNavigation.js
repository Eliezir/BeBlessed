import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileEdit from '../screens/Profile/ProfileEdit';
import Profile from '../screens/Profile/Profile';
import FriendList from "../screens/Friends/FriendsListScreen"
import Feed from "../screens/Feed/FeedScreen"
import PostPhotoScreen from "../screens/Feed/PostPhotoScreen"

const Stack = createNativeStackNavigator();

export default function AppNavigation(props) {
    const user = props.user
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Feed">
    {() => <Feed user={user}/>}
    </Stack.Screen>
    <Stack.Screen name="Camera">
    {() => <PostPhotoScreen user={user}/>}
    </Stack.Screen>
    <Stack.Screen name="Profile">
    {() => <Profile user={user}/>}
    </Stack.Screen>
    <Stack.Screen name="ProfileEdit">
    {() => <ProfileEdit  reloadUser={props.reloadUser} user={user}/>}
    </Stack.Screen>
    <Stack.Screen name="FriendsList">
    {() => <FriendList  user={user}/>}
    </Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>
  );
}

