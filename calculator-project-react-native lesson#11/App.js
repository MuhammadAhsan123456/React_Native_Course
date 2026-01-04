import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
const App = () => {
  const [displayValue, setDisplayValue] = useState("");
  const calculateValue = () => {
    const d = eval(displayValue);
    setDisplayValue(d.toString());
  }
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor="red" />
      <Text style={styles.heading}>React Native Calculator</Text>
      <TextInput value={displayValue} style={styles.display} />
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "7") }} style={styles.btn}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "8") }} style={styles.btn}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "9") }} style={styles.btn}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "+") }} style={[styles.btn, { backgroundColor: 'orange' }]}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "4") }} style={styles.btn}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "5") }} style={styles.btn}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "6") }} style={styles.btn}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "-") }} style={[styles.btn, { backgroundColor: 'orange' }]}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "1") }} style={styles.btn}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "2") }} style={styles.btn}>
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "3") }} style={styles.btn}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "*") }} style={[styles.btn, { backgroundColor: 'orange' }]}>
          <Text style={styles.btnText}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => { setDisplayValue("") }} style={[styles.btn, { backgroundColor: 'orange' }]}>
          <Text style={styles.btnText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "0") }} style={[styles.btn, { backgroundColor: 'orange' }]}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + ".") }} style={[styles.btn, { backgroundColor: 'orange' }]}>
          <Text style={styles.btnText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setDisplayValue(displayValue + "/") }} style={[styles.btn, { backgroundColor: 'orange' }]}>
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={calculateValue} style={[styles.btn, { width: '100%', backgroundColor: '#4CAF50' }]}>
          <Text style={[styles.btnText, { color: 'white', fontSize: 50 }]}>=</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#0f172a', // dark blue
    padding: 20,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#38bdf8',
  },

  display: {
    width: '100%',
    height: 90,
    backgroundColor: '#020617',
    borderRadius: 20,
    textAlign: 'right',
    fontSize: 38,
    paddingHorizontal: 20,
    color: '#e5e7eb',
    marginBottom: 10,
  },

  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  btn: {
    height: 75,
    width: 75,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },

  btnText: {
    fontSize: 26,
    color: '#f8fafc',
    fontWeight: '500',
  },
});

export default App