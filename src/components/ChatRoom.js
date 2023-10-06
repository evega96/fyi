import React, { useState, useRef, useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createMsg, onMsgsUpdated, getOrCreateRoom, getUserChatRooms } from '../app/api'; // Agrega getUserChatRooms a tu import
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';

function ChatRoom({route}) {
    const {roomCodeId} = route.params;
    const [msgs, setMsgs] = useState([]);
    const [roomCode, setRoomCode] = useState();
    const [userId, setUserId] = useState();
    const msgRef = useRef();

    useEffect(() => {
        if (roomCodeId) {
            onMsgsUpdated(roomCodeId, (data) => {
                console.log(data)
                setMsgs(data)
            });
        }
    }, [roomCodeId]);

    const sendRoomCode = async () => {
        // Agrega aquí la lógica para verificar si la sala de chat pertenece al usuario actual antes de establecer roomCode
        const userChatRooms = await getUserChatRooms(userId);
        if (userChatRooms.includes(roomCode)) {
            setRoomCode(roomCode);
        } else {
            console.log("No tienes acceso a esta sala de chat.");
        }
    }

    const sendMessage = async () => {
        const msg = msgRef.current.value;
        await createMsg(roomCode, userId, msg);
        msgRef.current.value = '';
    }

    return (
        <View>
            <Input type="text" placeholder='UserId' onChange={e => setUserId(e.target.value)} />
            <Input type="text" placeholder='RoomCode' onChange={e => setRoomCode(e.target.value)} />
            <TouchableOpacity onPress={sendRoomCode}>
                <Text>Create Room if not exist</Text>
            </TouchableOpacity>

            {
                msgs.map(msg => <Msg key={msg.id} isOwnMsg={msg.userId === userId}>{msg.msg}</Msg>)
            }

            <Input type="text" placeholder='Message Text' ref={msgRef} />
            <TouchableOpacity onPress={sendMessage}>
                <Text>Send Message</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChatRoom;

const styles = StyleSheet.create({
    button: {

    }
});
