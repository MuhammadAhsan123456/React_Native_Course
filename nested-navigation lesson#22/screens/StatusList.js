import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const StatusList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Status Available</Text>
    </View>
  )
}

export default StatusList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: '#6B7280'
  }
});
