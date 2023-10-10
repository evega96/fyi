import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { createMsg, onMsgsUpdated, getCurrentUserId, getMsgs } from '../app/api'; // Reemplaza 'tuRutaDeApi' con la ruta real a tus funciones API
import { TouchableOpacity } from 'react-native-gesture-handler';

const PrivateChatScreen = ({ route }) => {
    const { roomCodeId } = route.params;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Obtener los mensajes existentes de la sala de chat privada al cargar la pantalla

        const fetchMessages = async () => {
            try {
                console.log('11111111111111111roomCode: ', roomCodeId)
                const msgs = await getMsgs(roomCodeId);
                setMessages(msgs);
            } catch (error) {
                console.error('Error al obtener los mensajes:', error);
            }
        };

        fetchMessages();

        // Escuchar actualizaciones en tiempo real de los mensajes en la sala de chat privada
        const unsubscribe = onMsgsUpdated(roomCodeId, (updatedMessages) => {
            setMessages(updatedMessages);
        });

        return () => {
            // Desinscribirse de las actualizaciones al desmontar la pantalla
            unsubscribe();
        };
    }, [roomCodeId]);

    const handleSendMessage = async () => {
        // Enviar el nuevo mensaje a la sala de chat privada
        try {
            await createMsg(roomCodeId, getCurrentUserId(), newMessage);
            setNewMessage('');
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id}
                renderItem={({ item }) => (
                    <Text>{item.msg}</Text>
                    // Renderiza otros detalles del mensaje según tu estructura de datos
                )}
            />
            <View>
                <TextInput
                    placeholder="Escribe un mensaje"
                    value={newMessage}
                    onChangeText={(text) => setNewMessage(text)}
                />
                <TouchableOpacity style={{ marginBottom: 25, marginLeft: 200 }} onPress={handleSendMessage}><Text>Enviar</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default PrivateChatScreen;
