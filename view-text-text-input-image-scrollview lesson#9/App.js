// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const App = () => {
//   const data = "Welcome to"
//   return (
//     <View style={style.wrapper}>

//       {/* view concent start  */}

//       {/* <View style={style.header}>

//       </View>
//       <View style={style.dataBox}>
//         <View style={style.box}>

//         </View>
//       </View> */}

//       {/* view concept end  */}

//       {/* Text concept start */}
//       <Text style={{ color: 'red' }}>{data}</Text>
//       <Text style={style.heading}> <Text style={{ color: 'yellow' }}>Muhammad</Text> Ahsan</Text>
//       {/* Text concept end */}

//     </View>
//   )
// }

// const style = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: 'royalblue',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   // Text ka css start 
//   heading: {
//     fontSize: 30,
//     color: 'white',
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     letterSpacing: 2,
//     textAlign: 'center',
//     backgroundColor: 'black',
//     padding: 10,
//     borderRadius: 10,
//   },
//   // Text ka css end 

//   // view ka css yahan hai 

//   // header: {
//   //   height: 100,
//   //   width: '100%',
//   //   backgroundColor: 'white',
//   //   flex: 1,
//   // },
//   // dataBox: {
//   //   height: 500,
//   //   width: '100%',
//   //   backgroundColor: 'yellow',
//   //   flex: 9,
//   // },
//   // box: {
//   //   height: 100,
//   //   width: 100,
//   //   backgroundColor: 'red',
//   // },

//   // view ka css yaha end 

// })

// export default App


// view and text concept practice end 





// ab start Text input 
// import { useState } from 'react'
// import { Text } from 'react-native';
// import { StyleSheet, TextInput, View } from 'react-native'

// const App = () => {
//   const [email, setEmail] = useState('');
//   return (
//     <View style={styles.wrapper}>
//       <TextInput onChangeText={(text) => {
//         setEmail(text);
//       }} style={styles.inputBox} placeholder='email' />
//       <Text>{email}</Text>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: 'royalblue',
//     padding: 20,
//   },
//   inputBox: {
//     height: 50,
//     width: '90%',
//     backgroundColor: 'white',
//     alignSelf: 'center',
//     borderRadius: 10,
//     paddingLeft: 10,
//     border: 'none',
//     outlineColor: 'none',
//   },
// })
// export default App

// Text input Concept end





// Image kaise lagate hai 

// import React from 'react'
// import { Text } from 'react-native';
// import { StyleSheet } from 'react-native'
// import { View } from 'react-native'
// const jsLogo = require('./assets/js.jpg');
// import { Image } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.wrapper}>
//       {/* ye import karke lagaye  */}
//       <Image style={styles.myLogo} source={jsLogo} />
//       {/* or ye src copy image adress se  */}
//       <Image style={styles.myLogo} source={{ uri: "https://reactnative.dev/img/showcase/facebook.webp" }} />
//       <Text>AHsan</Text>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: 'royalblue',
//     padding: 10,
//   },
//   myLogo: {
//     height: 200,
//     width: 300,
//     resizeMode: 'stretch',
//   },
// })
// export default App

// Image concept end





// ab hai Scroll View 
import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native';
const jsLogo = require('./assets/js.jpg');
import { Image } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <Image style={styles.myLogo} source={jsLogo} />
      <Image style={styles.myLogo} source={{ uri: "https://reactnative.dev/img/showcase/facebook.webp" }} />
      <Text>AHsan</Text>
      <Image style={styles.myLogo} source={jsLogo} />
      <Image style={styles.myLogo} source={{ uri: "https://reactnative.dev/img/showcase/facebook.webp" }} />
      <Text>AHsan</Text>
      <Image style={styles.myLogo} source={jsLogo} />
      <Image style={styles.myLogo} source={{ uri: "https://reactnative.dev/img/showcase/facebook.webp" }} />
      <Text>AHsan</Text>
      <Image style={styles.myLogo} source={jsLogo} />
      <Image style={styles.myLogo} source={{ uri: "https://reactnative.dev/img/showcase/facebook.webp" }} />
      <Text>AHsan</Text>
      <Image style={styles.myLogo} source={jsLogo} />
      <Image style={styles.myLogo} source={{ uri: "https://reactnative.dev/img/showcase/facebook.webp" }} />
      <Text>AHsan</Text>
      <Image style={styles.myLogo} source={jsLogo} />
      <Image style={styles.myLogo} source={{ uri: "https://reactnative.dev/img/showcase/facebook.webp" }} />
      <Text>AHsan</Text>
      <Image style={styles.myLogo} source={jsLogo} />
      <Image style={styles.myLogo} source={{ uri: "https://reactnative.dev/img/showcase/facebook.webp" }} />
      <Text>AHsan</Text>
      <Image style={styles.myLogo} source={jsLogo} />
      <Image style={styles.myLogo} source={{ uri: "https://reactnative.dev/img/showcase/facebook.webp" }} />
      <Text>AHsan</Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
  },
  myLogo: {
    height: 200,
    width: 300,
    resizeMode: 'stretch',
  },
})
export default App