import { Text, TextInput, View, Button } from 'react-native'
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Fontisto';

const Favorite = () => {
    return (
        <View>
            <Text>esto es favoritos</Text>
            <Ionicons name="favorite" size={30} color="#6451a5" ></Ionicons>
        </View>

    )
}

export default Favorite