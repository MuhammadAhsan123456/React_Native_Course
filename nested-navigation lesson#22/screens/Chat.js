import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Chat = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.msg}>This is Chat Screen</Text>
        </View>
    )
}

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F4F6'
    },
    msg: {
        fontSize: 18,
        color: '#374151'
    }
});
