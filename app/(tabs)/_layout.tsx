/* eslint-disable prettier/prettier */
import { Tabs } from 'expo-router';

import TabBarIcon from '~/components/icons/TabBarIcon';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="menu"
                options={{
                    headerTitle: 'Menu',
                    headerShown: false,
                    title: 'Menu',
                    tabBarIcon: ({ color }) => <TabBarIcon name="cutlery" color={color} />,
                }}
            />
            <Tabs.Screen
                name="orders"
                options={{
                    headerTitle: 'Orders',
                    headerShown: false,
                    title: 'Orders',
                    tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{ headerTitle: 'Index', headerShown: false, title: 'Index', href: null }}
            />
        </Tabs>
    );
}
