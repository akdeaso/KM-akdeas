import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
// import OptionList from './components/OptionList'
// import RenderSomeScreens2 from './components/SomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import MainRoutes from './routers/MainRoutes'

// const myStyle = StyleSheet.create({
//   container: {
//     height: 120,
//     flexDirection: 'row',
//     // backgroundColor: 'red',
//     alignItem: 'center',
//     justifyContent: 'space-evenly'
//   }
// })

// const App = () => {
//   const callMyName = () => {
//     return 'roze'
//   }
//   return (
//     <View style={myStyle.container}>
//       <StatusBar backgroundColor='red'></StatusBar>
//       <OptionList />
//       <OptionList />
//       <OptionList />
//       <OptionList />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

export default function App() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
  // const RenderSomeScreens = props => {
  //   return (
  //     <View>
  //       <Text> nama saya adalah {props.nama}</Text>
  //     </View>
  //   )
  // }
  // //state merupakan data yg hanya bisa diakses oleh si component tsb, terkecuali jika data tsb dikirimkan via props
  // const [firstName, setFirstName] = useState('Audy Wisuda')
  // const [age, setAge] = useState(20)

  // if (firstName === 'audy') {
  //   return (
  //     <View>
  //       <TouchableOpacity onPress={() => setFirstName('selain audy')}>
  //         <Text>ganti nama atas</Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // } else {

  //   return (
  //     <ScrollView>
  //       <TouchableOpacity onPress={() => setFirstName('audy')}>
  //         <Text>ganti nama bawah</Text>
  //       </TouchableOpacity>
  //       <Text>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ligula ac nunc
  //         elementum sollicitudin. Suspendisse vitae purus nunc. Nullam viverra lacinia eleifend. Ut v
  //         el turpis tempus erat tristique tempor at a felis. Praesent luctus lacus nisi, a finibus augue
  //         lacinia a. In nisi nisi, bibendum a scelerisque elementum, porttitor vel nisi. Nam quis enim e
  //         u diam aliquam dignissim sed vitae est. Cras accumsan metus in augue tincidunt, eget ornare el
  //         it congue. Etiam eu consectetur enim, a hendrerit magna. Maecenas tellus purus, tempor in vive
  //         rra vel, fringilla vitae libero. Fusce quis eleifend ante. Donec non magna quis quam tempus ac
  //         cumsan eget eget ante. Etiam gravida vel mauris sed rhoncus. Aliquam ornare nunc sed lectus sc
  //         elerisque, sed tincidunt arcu mattis.
  //         Morbi porttitor augue eu nibh bibendum tincidunt. Nullam ac magna erat. Sed faucibus condimentum
  //         massa pretium consequat. In accumsan turpis in diam tristique, eget vulputate eros scelerisque. C
  //         ras in ex interdum ligula convallis ultricies. Nulla a orci leo. Mauris pretium neque ante, in fe
  //         ugiat mi porta a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incepto
  //         s himenaeos. In a nunc rutrum, vestibulum mauris malesuada, congue nulla. Cras egestas ante at ve
  //         stibulum fringilla. Vivamus quis turpis dolor. Curabitur tincidunt tellus eget hendrerit interdum
  //         . Nunc a feugiat erat.
  //         Nullam viverra nisl et ligula faucibus, id ornare dui euismod. Praesent dictum ac nisl vitae faci
  //         lisis. Aliquam maximus porttitor felis. Aliquam faucibus, ante id gravida hendrerit, est ex susci
  //         s sed posuere turpis, quis tincidunt nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //         Proin pharetra libero et quam sagittis eleifend. Nunc porta odio et orci posuere aliquet.cinia eleifend. Ut v
  //         el turpis tempus erat tristique tempor at a felis. Praesent luctus lacus nisi, a finibus augue
  //         lacinia a. In nisi nisi, bibendum a scelerisque elementum, porttitor vel nisi. Nam quis enim e
  //         u diam aliquam dignissim sed vitae est. Cras accumsan metus in augue tincidunt, eget ornare el
  //         it congue. Etiam eu consectetur enim, a hendrerit magna. Maecenas tellus purus, tempor in vive
  //         rra vel, fringilla vitae libero. Fusce quis eleifend ante. Donec non magna quis quam tempus ac
  //         cumsan eget eget ante. Etiam gravida vel mauris sed rhoncus. Aliquam ornare nunc sed lectus sc
  //         elerisque, sed tincidunt arcu mattis.
  //         Morbi porttitor augue eu nibh bibendum tincidunt. Nullam ac magna erat. Sed faucibus condimentum
  //         massa pretium consequat. In accumsan turpis in diam tristique, eget vulputate eros scelerisque. C
  //         ras in ex interdum ligula convallis ultricies. Nulla a orci leo. Mauris pretium neque ante, in fe
  //         ugiat mi porta a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incepto
  //         s himenaeos. In a nunc rutrum, vestibulum mauris malesuada, congue nulla. Cras egestas ante at ve
  //         stibulum fringilla. Vivamus quis turpis dolor. Curabitur tincidunt tellus eget hendrerit interdum
  //         . Nunc a feugiat erat.
  //         Nullam viverra nisl et ligula faucibus, id ornare dui euismod. Praesent dictum ac nisl vitae faci
  //         lisis. Aliquam maximus porttitor felis. Aliquam faucibus, ante id gravida hendrerit, est ex susci
  //         s sed posuere turpis, quis tincidunt nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //         Proin pharetra libero et quam sagittis eleifend. Nunc porta odio et orci posuere aliquet.
  //       </Text>

  //       <Text>Hello guys</Text>
  //       <Text>{firstName} is not my name and {age} is not my age</Text>
  //       {RenderSomeScreens({ nama: 'audy' })}
  //       <RenderSomeScreens nama="yohanes" />
  //       <RenderSomeScreens2 waktu="siang" hewan="gajah" kaki="empat" />
  //       <RenderSomeScreens2 waktu="sore" hewan="ulat" kaki="banyak" />
  //       <RenderSomeScreens2 waktu="malam" hewan="tupai" kaki="dua" />
  //     </ScrollView>
  //   )
  // }
}
