import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Chat from '../../components/ChatRoom';

import { getUserChatRooms, getCurrentUserId, getRoomById, getUserRoomsByUserId, getNameById, getItems } from '../../app/api';

import { SearchBar } from 'react-native-elements';

const Message = ({ route, navigation }) => {
    const [roomData, setRoomData] = useState(null);
    const [userChatRooms, setUserChatRooms] = useState([]);
    const [memberIds, setMemberIds] = useState([]);
    const [memberNames, setMemberNames] = useState({}); // Almacena los nombres de usuario
    const [uid, setUid] = useState();

    const [users, setUsers] = useState();

    var userId;
    var otherUserID

    useEffect(() => {
        const fetchData = async () => {
            try {

                const users = await getItems();
                setUsers(users);

                userId = await getCurrentUserId();
                const chatRooms = await getUserRoomsByUserId(userId);
                setUserChatRooms(chatRooms)

                // Obtener los IDs de los miembros de cada sala
                const memberIdsArray = chatRooms.map(room => room.members);
                setMemberIds(memberIdsArray);

                otherUserID = await getNameById('BcFleS8Au3e7cBKJl9DQggKjOBg1');
                setUid(otherUserID);


                var user = [];
                // Obtener los nombres de usuario a partir de las ID de los miembros
                for (var i = 0; i < users.length; i++) {
                    user[i] = await getUserNameByUserId(users, users[i].id)
                }

                setMemberNames(user.displayName);

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

    function getUserNameByUserId(users, userId) {

        const user = users.find(user => user.id === userId);
        const result = " " + user.user + " ";
        return result;
    }


    return (
        <ScrollView style={{ backgroundColor: '#313131' }}>
            <View style={{ backgroundColor: '#313131' }}>
                <SearchBar
                    placeholder="Buscar..."
                    containerStyle={{ backgroundColor: '#313131' }}
                    inputContainerStyle={{ backgroundColor: '#444' }}
                />
            </View>
            <Text style={styles.sectionTitle}>Salas de Chat:</Text>
            {userChatRooms.map((room) => (
                <TouchableOpacity key={room.id} style={styles.roomContainer} onPress={() => handleButtonChat(room.id)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.img} source={require('../../../assets/FotodePerfil.jpg')} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={styles.roomText}>{uid}</Text>
                            <Text style={styles.lastMessage}>Último mensaje</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}


        </ScrollView>
    );
};

export default Message;

const styles = StyleSheet.create({
    input: {
        alignContent: 'center',
        width: 205,
        height: 25,
        backgroundColor: '#313131',
        marginBottom: 10,
        marginLeft: 112,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ffffff',
    },
    roomContainer: {
        backgroundColor: '#313131',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    roomText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    lastMessage: {
        color: 'white'
    }
});
