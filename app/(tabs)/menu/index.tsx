/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList } from 'react-native';

import { products } from '~/assets/data/products';
import Product from '~/components/shared/Product';

export default function Menu() {
    return (
        <FlatList
            data={products}
            renderItem={({ item }) => <Product product={item} />}
            numColumns={2}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            columnWrapperStyle={{ gap: 10 }}
        />
    );
}
