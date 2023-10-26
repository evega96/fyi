import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Chat from '../../components/ChatRoom';
import { getUserChatRooms, getCurrentUserId, getRoomById, getUserRoomsByUserId, getNameById } from '../../app/api';
import { SearchBar } from 'react-native-elements';

const Message = ({ route, navigation }) => {
    const [roomData, setRoomData] = useState(null);
    const [userChatRooms, setUserChatRooms] = useState([]);
    const [memberIds, setMemberIds] = useState([]);
    const [memberNames, setMemberNames] = useState({}); // Almacena los nombres de usuario

    var userId;

    useEffect(() => {
        const fetchData = async () => {
            try {
                userId = await getCurrentUserId();
                const chatRooms = await getUserRoomsByUserId(userId);
                setUserChatRooms(chatRooms)

                // Obtener los IDs de los miembros de cada sala
                const memberIdsArray = chatRooms.map(room => room.members);
                setMemberIds(memberIdsArray);

                // Obtener los nombres de usuario a partir de las ID de los miembros
                const namesMap = {};
                for (const room of chatRooms) {
                    for (const memberId of room.members) {
                        if (memberId !== userId) { // Evita obtener el nombre del usuario actual
                            if (!namesMap[memberId]) {
                                namesMap[memberId] = await getNameById(memberId);
                            }
                        }
                    }
                }
                setMemberNames(namesMap);
            } catch (error) {
                console.error('Error al obtener las salas de chat:', error);
            }
        };

        fetchData();
    }, []);

    const handleButtonChat = (roomId) => {
        navigation.navigate('ChatRooms', {
            roomCodeId: roomId,
        });
    };

    const getMembersNamesText = (members) => {
        const d = members[1];
        return d;
    };

    return (
        <View>
            <View style={{ backgroundColor: '#333' }}>
                <SearchBar
                    placeholder="Buscar..."
                    containerStyle={{ backgroundColor: '#333' }}
                    inputContainerStyle={{ backgroundColor: '#444' }}
                />
            </View>
            <Text style={styles.sectionTitle}>Salas de Chat:</Text>
            {userChatRooms.map((room) => (
                <TouchableOpacity key={room.id} style={styles.roomContainer} onPress={() => handleButtonChat(room.id)}>
                    <Text style={styles.roomText}>ID de la Sala: {room.id}</Text>
                    <Text>Miembros: {room.members.join(',')}</Text>
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
