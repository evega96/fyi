import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import the plus icon
import { getUserChatRooms, getCurrentUserId, getOrCreateRoom } from '../../app/api';


const Message = ({ route }) => {
  const { userId, roomCodeId } = route.params;
  const [chatRooms, setChatRooms] = useState([]);
  const navigation = useNavigation(); // Use the navigation hook

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        // Fetch chat rooms from Firebase Firestore
        const userChatRooms = await getUserChatRooms(userId);
        setChatRooms(userChatRooms); // Set chat rooms data from Firebase
      } catch (error) {
        console.error('Error fetching chat rooms:', error);
      }
    };
  
    fetchChatRooms();
  }, [userId]);

  const otherUserId ='06041996';

  // Function to navigate to the screen for creating a new chat room
  const handleAddChatRoom = async () => {
    try {
        // Obtén el ID del usuario actual (puedes usar la función adecuada para esto)
        const currentUserId = await getCurrentUserId();
    
        // Crea una sala de chat privada y obtén el código de sala
        const roomCode = await getOrCreateRoom(`private_${currentUserId}_${otherUserId}`);
  
        console.log('222222222222', roomCode)
        
        navigation.navigate("Message", {
          roomCodeId: roomCode,
          userId: currentUserId
        })
  
      } catch (error) {
        console.error("Error al iniciar el chat privado:", error);
      }
  };

  return (
    <View>
      <Text>Your Chat Rooms</Text>
      <FlatList
        data={chatRooms}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chat', { roomCodeId: item, userId });
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={handleAddChatRoom} style={styles.addButton}>
        <Ionicons name="ios-add" size={30} color="blue" />
      </TouchableOpacity>
    </View>
  );
};


export default Message;

const styles = StyleSheet.create({
  // Your styles here
});
