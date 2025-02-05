/* eslint-disable prettier/prettier */
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const UserPage = () => {
    const { id } = useLocalSearchParams<{ id: string }>();

    return (
        <View>
            <Stack.Screen options={{ headerTitle: `Product Details ${id}` }} />

            <Text className="text-green-500">Hello user {id}</Text>
        </View>
    );
};

export default UserPage;
