/* eslint-disable prettier/prettier */
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import { products, sizes } from '~/assets/data/products';
import { Button } from '~/components/Button';
import { placeholderImage } from '~/constants';

const UserPage = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [selectedSize, setSelectedSize] = useState<string>('M');

    const product = products.find((item) => item.id.toString() === id);

    if (!product) return <Redirect href="/+not-found" />;

    const { name, price, image } = product;

    const addToCart = () => {
        alert(`Added to cart size: ${selectedSize}`);
    };

    return (
        <View className="flex-1 justify-between bg-white">
            <ScrollView className="flex p-2">
                <Stack.Screen options={{ headerTitle: name, title: name }} />

                <Image
                    className="aspect-square w-full"
                    source={{ uri: image || placeholderImage }}
                    resizeMode="contain"
                />

                <Text>Select Size:</Text>
                <View className="my-2.5 flex flex-row justify-around">
                    {sizes.map((size, index) => (
                        <Pressable
                            key={index}
                            className={`${selectedSize === size && 'bg-slate-300'} flex aspect-square w-[50px] items-center justify-center rounded-full`}
                            onPress={() => setSelectedSize(size)}>
                            <Text
                                className={`${selectedSize === size && 'font-semibold text-black'} text-lg text-gray-400`}>
                                {size}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>

            <View className="p-2">
                <Text className="text-lg font-semibold">Price: ${price}</Text>
                <Button onPress={() => addToCart()} text="Add to cart" />
            </View>
        </View>
    );
};

export default UserPage;
