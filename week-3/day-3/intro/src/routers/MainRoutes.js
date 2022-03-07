import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'
import BottomTab from './BottomTab'


const Stack = createStackNavigator()

export default function MainRoutes() {
    return (
        <Stack.Navigator initialRouteName='Register' >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Main" component={BottomTab} />
        </Stack.Navigator>
    )
}

// screen awal must be register, dari register pindah ke login,
// dari login pindah ke home, dari home pindah ke explore,
//dari explore pindah ke profile, dari profile pindah ke statement awal (register)