import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Chat from '../../components/ChatRoom';
import { getUserChatRooms, getCurrentUserId, getRoomById, getUserRoomsByUserId } from '../../app/api';

const Message = ({ route, navigation }) => {
    const [roomData, setRoomData] = useState(null);
    const [userChatRooms, setUserChatRooms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = await getCurrentUserId();
                const rooms = await getUserChatRooms(userId);
                setUserChatRooms(rooms);
            } catch (error) {
                console.error('Error al obtener las salas de chat:', error);
            }
        };

        fetchData();
    }, []);

    const handleChatRoomPress = (roomId) => {
        // Navegar a la sala de chat específica cuando se toca una sala de chat
        navigation.navigate('ChatRooms', {
            roomCodeId: roomId,
        });
    };

    const renderChatRoom = ({ item }) => (
        <TouchableOpacity style={{ height: 25, width: 3000, borderRadius: 30 }} onPress={() => handleChatRoomPress(item)}>
            <Text>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={userChatRooms}
                keyExtractor={(item) => item}
                renderItem={renderChatRoom}
                ListEmptyComponent={<Text>No tienes salas de chat.</Text>}
            />
            {/* Otros elementos de la pantalla de mensajes */}
        </View>
    );
};

export default Message;

const styles = StyleSheet.create({
    input: {
        alignContent: 'center',
        width: 205,
        height: 25,
        backgroundColor: '#E4E4E4',
        marginBottom: 10,
        marginLeft: 112,
    },
});