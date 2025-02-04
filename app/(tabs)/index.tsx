/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';

import products from '~/assets/data/products';
import Product from '~/components/shared/Product';

const Home = () => {
    return (
        <View>
            <Product product={products[0]} />
        </View>
    );
};

export default Home;
