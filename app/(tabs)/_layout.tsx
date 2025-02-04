/* eslint-disable prettier/prettier */
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{ headerTitle: 'Home', headerShown: false, title: 'Home' }}
            />
            <Tabs.Screen
                name="users/[id]"
                options={{ headerTitle: 'User', headerShown: false, title: 'User' }}
            />
        </Tabs>
    );
}
