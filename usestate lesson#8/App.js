import { Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState("SBS online classes")

  const demo = () => {
    setData("hello ahsan")
  }

  return (
    <View>
      <Text>{data}</Text>
      <TouchableOpacity onPress={demo}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App
