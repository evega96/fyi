import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Chat from '../../components/ChatRoom';
import { getUserChatRooms, getCurrentUserId, getRoomById, getUserRoomsByUserId, getNameById, getItems } from '../../app/api';
import { SearchBar } from 'react-native-elements';

const Message = ({ route, navigation }) => {
    const [roomData, setRoomData] = useState(null);
    const [userChatRooms, setUserChatRooms] = useState([]);
    const [memberIds, setMemberIds] = useState([]);
    const [memberNames, setMemberNames] = useState({}); // Almacena los nombres de usuario
const [users, setUsers] = useState();
    var userId;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users = await  getItems();
                setUsers(users);
                userId = await getCurrentUserId();
                const chatRooms = await getUserRoomsByUserId(userId);
                setUserChatRooms(chatRooms)

                // Obtener los IDs de los miembros de cada sala
                const memberIdsArray = chatRooms.map(room => room.members);
                setMemberIds(memberIdsArray);

                var user=[];
                // Obtener los nombres de usuario a partir de las ID de los miembros
                for(var i = 0; i< users.length; i++){
                    user[i] = await getUserNameByUserId(users,users[i].id)
                }
                console.log('ooooooooooo', user)
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

    const getMembersNamesText = (members) => {
        return members.map(memberId => memberNames[memberId]).join(', ');
    };

    function getUserNameByUserId(users,userId){

        const user=   users.find( user => user.id === userId);
        const result = " "+user.user+" ";
        return result;
      }

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

{users &&  <Text style={styles.roomText}>Miembros: {room.members.map(member => getUserNameByUserId(users, member) )}</Text>
}
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
