import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Profile(props) {
    return (
        <View>
            <Text>Profile</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                <Text>
                    Navigate ke register
                </Text>
            </TouchableOpacity>
        </View>
    )
}