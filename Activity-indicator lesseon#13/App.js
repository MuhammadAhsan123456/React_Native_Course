import { ActivityIndicator } from "react-native"
import { StyleSheet, View } from "react-native"


const App = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'royalblue',
  }
})
export default App