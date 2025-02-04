/* eslint-disable prettier/prettier */
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const UserPage = () => {
    const { id } = useLocalSearchParams<{ id: string }>();

    return (
        <View>
            <Text className="text-green-500">Hello user {id}</Text>
        </View>
    );
};

export default UserPage;
