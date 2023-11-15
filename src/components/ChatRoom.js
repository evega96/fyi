import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { createMsg, onMsgsUpdated, getCurrentUserId, getMsgs } from '../app/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Avatar } from 'react-native-paper'; // Importa componentes de react-native-paper
import Icon from 'react-native-vector-icons/FontAwesome';


const PrivateChatScreen = ({ route }) => {
    const { roomCodeId } = route.params;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [uid, setUid] = useState();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const msgs = await getMsgs(roomCodeId);
                setMessages(msgs);
            } catch (error) {
                console.error('Error al obtener los mensajes:', error);
            }
        };

        fetchMessages();

        const unsubscribe = onMsgsUpdated(roomCodeId, (updatedMessages) => {
            setMessages(updatedMessages);
        });

        return () => {
            unsubscribe();
        };
    }, [roomCodeId]);

    const handleSendMessage = async () => {
        try {
            const userId = await getCurrentUserId();
            await createMsg(roomCodeId, userId, newMessage);
            setNewMessage('');
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
        }
    };



    useEffect(() => {
        const f = async () => {
            const uid = await getCurrentUserId();

            setUid(uid);
        }
        f();


    }, [])
    return (
        <View style={{ flex: 1 }}>
            {
                uid && <FlatList

                    data={messages}
                    keyExtractor={(message) => message.id}
                    renderItem={
                        ({ item }) => {
                            return (
                                (

                                    <Card
                                        style={{
                                            margin: 8,
                                            alignSelf: item.userId === uid ? 'flex-end' : 'flex-start',
                                            maxWidth: '70%', // Limita el ancho de la burbuja
                                        }}
                                    >
                                        <Card.Content>
                                            <Text>{item.msg}</Text>
                                        </Card.Content>
                                        <Card.Actions>
                                            <Text style={{ fontSize: 12 }}>
                                                {/* {new Date(item.timestamp).toLocaleTimeString()} */}
                                            </Text>
                                        </Card.Actions>
                                    </Card>
                                )
                            )
                        }}
                />

            }
<<<<<<< Updated upstream
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50, marginLeft: 25, marginRight: 25 }}>
=======
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50, marginLeft: 10, marginRight: 10, backgroundColor: '#ffffff', height: 60, width: 370, borderRadius: 30 }}>
>>>>>>> Stashed changes
                <TextInput
                    style={{ flex: 1, marginRight: 8 }}
                    value={newMessage}
                    onChangeText={(text) => setNewMessage(text)}
                />
                <TouchableOpacity onPress={handleSendMessage}>
<<<<<<< Updated upstream
                    <Icon name="send" size={24} color="blue" />
=======
                    <Image style={{ marginRight: 10 }} source={require('../../assets/send.png')} />
>>>>>>> Stashed changes
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PrivateChatScreen;
