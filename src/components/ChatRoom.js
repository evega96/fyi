import { useState, useRef, useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createMsg, onMsgsUpdated, getOrCreateRoom } from '../app/api';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';

function ChatRoom() {
    const [msgs, setMsgs] = useState([]);
    const [roomCode, setRoomCode] = useState();
    const [userId, setUserId] = useState();
    const msgRef = useRef();

    useEffect(() => {
        if (roomCode) {
            onMsgsUpdated(roomCode, (data) => {
                console.log(data)
                setMsgs(data)
            });
        }
    }, [roomCode]);

    const sendRoomCode = () => {
        getOrCreateRoom(roomCode);
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