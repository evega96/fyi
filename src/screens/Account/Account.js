import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = () => {
    return (
        <View>
            <Text>Esto es el perfil</Text>
            <Ionicons name="account" size={30} color="#6451a5" ></Ionicons>
        </View>
    )
}

export default Account