/* eslint-disable prettier/prettier */
import { Redirect } from 'expo-router';
import React from 'react';

export default function Menu() {
    return <Redirect href={`${'/menu/'}` as any} />;
}
