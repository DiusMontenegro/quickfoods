/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View } from 'react-native';

import products from '~/assets/data/products';

const Home = () => {
    const product = products[0];
    const { image, name, price } = product;

    return (
        <View className="rounded-2xl bg-white p-2">
            <Image source={{ uri: image }} className="aspect-square w-full" />
            <Text className="my-1 text-[18px] font-bold">{name}</Text>
            <Text className="text-base font-semibold text-[#2f95dc]">${price}</Text>
        </View>
    );
};

export default Home;
