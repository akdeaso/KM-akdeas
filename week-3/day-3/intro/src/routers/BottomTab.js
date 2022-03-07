import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

//screen
import Home from '../screens/Home/Home'
import Profile from '../screens/Profile/Profile'
import Explore from '../screens/Explore/Explore'

const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <Feather name="home" size={20} color="red" /> }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => <AntDesign name="user" size={20} color="red" /> }} />
            <Tab.Screen name="Explore" component={Explore} />
        </Tab.Navigator>
    )
}

export default BottomTab;