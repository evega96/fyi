import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Chat from '../../components/ChatRoom';
import { getUserChatRooms, getCurrentUserId, getRoomById, getUserRoomsByUserId } from '../../app/api';

const Message = ({ route, navigation }) => {
    const [roomData, setRoomData] = useState(null);
    const [userChatRooms, setUserChatRooms] = useState([]);

    var chatRooms = [];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = await getCurrentUserId();
                chatRooms = await getUserRoomsByUserId(userId);
                console.log('555555555555', chatRooms)
                setUserChatRooms(chatRooms);
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

    const handleButtonChat = (roomId) => {
        navigation.navigate('ChatRooms', {
            roomCodeId: roomId,
        });
    };

    return (
        <View>
            <Text style={styles.sectionTitle}>Salas de Chat:</Text>
            {userChatRooms.map((room) => (
                <TouchableOpacity key={room.id} style={styles.sectionTitle} onPress={() => handleButtonChat(room.id)}>
                    <Text style={styles.roomText}>ID de la Sala: {room.id}</Text>
                    <Text style={styles.roomText}>Miembros: {room.members.join(', ')}</Text>
                </TouchableOpacity>
            ))}
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    roomContainer: {
        backgroundColor: '#E4E4E4',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    roomText: {
        fontSize: 16,
        color: 'black',
    },
});