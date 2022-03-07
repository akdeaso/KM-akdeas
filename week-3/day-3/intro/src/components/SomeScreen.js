import React from "react";
import { View, Text } from 'react-native';

const RenderSomeScreens2 = props => {
    return (
        <View>
            <Text>
                <Text> pada suatu {props.waktu}, hiduplah seekor {props.hewan} berkaki {props.kaki}</Text>
            </Text>
        </View>
    )
}

export default RenderSomeScreens2;