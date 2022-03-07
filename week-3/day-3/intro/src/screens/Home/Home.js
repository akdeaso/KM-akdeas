import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Home(props) {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Explore")}>
                <Text>
                    Navigate ke explore
                </Text>
            </TouchableOpacity>
        </View>
    )
}