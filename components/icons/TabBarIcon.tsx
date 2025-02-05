/* eslint-disable prettier/prettier */
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';

export default function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}
