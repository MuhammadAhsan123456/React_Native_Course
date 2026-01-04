
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const App = () => {
  const demo = (x) => {
    console.log("ahsan", x);
  }
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => { demo(10) }} style={styles.myBtn}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#eee',
  },
  myBtn: {
    width: '90%',
    height: 50,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default App















