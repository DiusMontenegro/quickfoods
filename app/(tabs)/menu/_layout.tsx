/* eslint-disable prettier/prettier */
import { Stack } from 'expo-router';
import React from 'react';

export default function MenuStack() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: 'Menu' }} />
        </Stack>
    );
}
