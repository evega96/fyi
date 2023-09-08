import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {
    createItem,
    updateItem,
    getItems,
    getItemsByCondition,
    getItemById,
    deleteItem,
} from '../app/api';

const ChatComponent = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        loadChatHistory();
    }, []);

    const loadChatHistory = async () => {
        const chatMessages = await getItems();
        setMessages(chatMessages);
    };

    const sendMessage = async () => {
        if (message.trim() !== '') {
            const newMessageId = await createItem({ text: message, timestamp: Date.now() });
            setMessage('');
            setMessages([...messages, { id: newMessageId, text: message, timestamp: Date.now() }]);
        }
    };

    const deleteMessage = async (id) => {
        await deleteItem(id);
        const updatedMessages = messages.filter((msg) => msg.id !== id);
        setMessages(updatedMessages);
    };

    const onPress = async () => {
        sendMessage();
        loadChatHistory();
    }

    return (
        <View>
            <Text>Chat en tiempo real</Text>
            <View>
                {messages.map((message) => (
                    <View key={message.id}>
                        <Text>{message.text}</Text>
                        <Button title="Eliminar" onPress={() => deleteMessage(message.id)} />
                    </View>
                ))}
            </View>
            <TextInput
                placeholder="Escribe tu mensaje"
                value={message}
                onChangeText={(text) => setMessage(text)}
            />
            <Button title="Enviar" onPress={onPress} />
        </View>
    );
};

export default ChatComponent;
