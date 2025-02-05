/* eslint-disable prettier/prettier */
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text } from 'react-native';

import { placeholderImage } from '~/constants';
import { ProductType } from '~/types';

interface ProductProps {
    product: ProductType;
}

const Product = ({ product }: ProductProps) => {
    const { name, image, price, id } = product;

    return (
        <Link href={{ pathname: '/menu/[id]', params: { id } }} asChild>
            <Pressable className="max-w-[50%] flex-1 rounded-2xl bg-white p-2">
                <Image
                    source={{ uri: image || placeholderImage }}
                    className="aspect-square w-full"
                    resizeMode="contain"
                />
                <Text className="my-1 text-[18px] font-bold">{name}</Text>
                <Text className="text-base font-semibold text-[#2f95dc]">${price}</Text>
            </Pressable>
        </Link>
    );
};

export default Product;
