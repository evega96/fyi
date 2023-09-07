import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/AntDesign';
import Chat from '../../components/ChatRoom'

const Message = () => {
    return (
        <Chat></Chat>
    )
}

export default Message

const styles = StyleSheet.create({

    input: {
        alignContent: "center",
        width: 205,
        height: 25,
        backgroundColor: "#E4E4E4",
        marginBottom: 10,
        marginLeft: 112,
    }
});