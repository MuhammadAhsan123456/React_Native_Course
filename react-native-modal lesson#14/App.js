import { useState } from "react"
import { Modal, Text, View, StyleSheet } from "react-native"
import { Button } from "react-native-web"

const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={style.wrapper}>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Text>Sbs Online Classes</Text>
      <Text>Demo Content</Text>
      <Button onPress={() => { setModalVisible(true) }} title="open modal" />
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={style.modalWrapper}>
          <View style={style.modalContent}>
            <Text>Modal Content</Text>
            <Button onPress={() => { setModalVisible(false) }} title="close modal" />
          </View>
        </View>
      </Modal>
    </View>
  )
}
const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: 'royalblue',
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  }
})
export default App