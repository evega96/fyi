import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { createMsg, onMsgsUpdated, getCurrentUserId, getMsgs } from '../app/api'; // Reemplaza 'tuRutaDeApi' con la ruta real a tus funciones API
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


const PrivateChatScreen = ({ route }) => {
    const { roomCodeId } = route.params;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Obtener los mensajes existentes de la sala de chat privada al cargar la pantalla

        const fetchMessages = async () => {
            try {
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
        try {
            const userId = await getCurrentUserId(); // Espera a que se resuelva la promesa
            await createMsg(roomCodeId, userId, newMessage);

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
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50, marginLeft: 25, marginRight: 25 }}>
                <TextInput
                    style={{ flex: 1, marginRight: 8 }} // Utiliza flex para que el input ocupe el espacio restante
                    placeholder="Escribe un mensaje"
                    value={newMessage}
                    onChangeText={(text) => setNewMessage(text)}
                />
                <TouchableOpacity onPress={handleSendMessage}>
                    <Icon name="send" size={24} color="blue" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PrivateChatScreen;
