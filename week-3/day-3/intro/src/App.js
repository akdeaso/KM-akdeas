import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import OptionList from './components/OptionList'

const myStyle = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItem: 'center',
    justifyContent: 'space-evenly'
  }
})

const App = () => {
  const callMyName = () => {
    return 'roze'
  }
  return (
    <View style={myStyle.container}>
      <StatusBar backgroundColor='red'></StatusBar>
      <OptionList />
      <OptionList />
      <OptionList />
      <OptionList />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})