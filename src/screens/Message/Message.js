import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, RefreshControl } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Chat from '../../components/ChatRoom';

import { getLatestMsg,getUserChatRooms, getCurrentUserId, getRoomById, getUserRoomsByUserId, getNameById, getItems } from '../../app/api';

import { SearchBar } from 'react-native-elements';

const Message = ({ route, navigation }) => {
    const [roomData, setRoomData] = useState(null);
    const [userChatRooms, setUserChatRooms] = useState([]);
    const [memberIds, setMemberIds] = useState([]);
    const [memberNames, setMemberNames] = useState({}); // Almacena los nombres de usuario
    const [uid, setUid] = useState();

    const [users, setUsers] = useState();
    const [usersInChatLobby, setUsersInChatLobby] = useState();
    const [name, setName] = useState();
    const [isRefreshing, setIsRefreshing] = useState(false);

    var userId;
    var otherUserID;

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            const users = await getItems();
            setUsers(users);

            userId = await getCurrentUserId();
            const currentUserChatRooms = await getUserRoomsByUserId(userId);
            setUserChatRooms(currentUserChatRooms);

            // Obtener los IDs de los miembros de cada sala
            const memberIdsArray = currentUserChatRooms.map(room => room.members);
            setMemberIds(memberIdsArray);
            var user = [];
            var res;
            // Obtener los nombres de usuario y último mensaje a partir de las ID de los miembros
            for (var i = 0; i < currentUserChatRooms.length; i++) {
                // console.log('aaaaaaaaaaaaaaaaa')
                // user[i] = await getUserNameByUserId(users, users[i].id);
// console.log('bbbbbbbbbbbbbb', currentUserChatRooms)
                const latestMsg = await getLatestMsg(currentUserChatRooms[i].id);
// console.log('5555555555555555r')
currentUserChatRooms[i].latestMsg = latestMsg ? latestMsg.msg : '';
currentUserChatRooms[i].latestMsgSender = latestMsg ? latestMsg.senderId : '';

             res = await getNameById(currentUserChatRooms[i].latestMsgSender);
            }
            // console.log('pppppppppp', memberIds)
            for(var i = 0; i<memberIds.length; i++){


                for(var j = 0; j<memberIds[i].length; j++){
                    console.log(memberIds[i][j] , 121123423423212)
                

                    // console.log(j ,"jota")

                    // console.log(memberIds[0],12121233223442343423423423212)
                    if(memberIds[i][j] === userId){
                        otherUserID= await getNameById(userId);
                    }else {
                        otherUserID = await getNameById(memberIds[i][j]);
                        setUsersInChatLobby(otherUserID)
                    }
                }
            }
            console.log(currentUserChatRooms)

    
            setName(res);
            setMemberNames(user.displayName);
            setRoomData(currentUserChatRooms);
            
        } catch (error) {
            console.error('Error al obtener las salas de chat:', error);
        }
    };

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

  

   const onRefresh = async () => {
    
    setIsRefreshing(true)
  
    setIsRefreshing(false)
  
  fetchData(); 
}


return (
    <ScrollView style={{ flex: 1, backgroundColor: '#313131' }}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          tintColor="#fff"
        />
      }>
      <View style={{ backgroundColor: '#313131' }}>
        <SearchBar
          placeholder="Buscar..."
          containerStyle={{ backgroundColor: '#313131' }}
          inputContainerStyle={{ backgroundColor: '#444' }}
        />
      </View>
      <Text style={styles.sectionTitle}>Salas de Chat:</Text>
      {userChatRooms && userChatRooms.length > 0 ? (
        userChatRooms.map((room) => (
          <TouchableOpacity key={room.id} style={styles.roomContainer} onPress={() => handleButtonChat(room.id)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.img} source={require('../../../assets/fotodeperfil.jpg')} />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={styles.roomText}>{usersInChatLobby}</Text>
                <Text style={styles.lastMessage}>
                  {room.latestMsgSender === userId ? 'Tú: ' : `${name}: `}
                  {room.latestMsg}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No hay salas de chat disponibles.</Text>
      )}
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
