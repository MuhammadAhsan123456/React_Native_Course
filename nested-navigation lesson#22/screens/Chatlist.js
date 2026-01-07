import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Chatlist = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => navigation.navigate('chat')}
      >
        <Text style={styles.chatName}>John Doe</Text>
        <Text style={styles.lastMsg}>Hey! How are you?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => navigation.navigate('chat')}
      >
        <Text style={styles.chatName}>Ali</Text>
        <Text style={styles.lastMsg}>Let’s meet today</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Chatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F9FAFB'
  },
  chatItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827'
  },
  lastMsg: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4
  }
});
