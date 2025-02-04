/* eslint-disable prettier/prettier */
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
    return (
        <View>
            <Text className="text-4xl">Home</Text>
            <Link href={{ pathname: '/users/[id]', params: { id: 1 } }}> Go to user 1</Link>
            <Link href={{ pathname: '/users/[id]', params: { id: 2 } }}> Go to user 2</Link>
        </View>
    );
};

export default Home;
