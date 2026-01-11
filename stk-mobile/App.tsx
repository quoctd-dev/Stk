import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/screens/Home';

const Tab = createBottomTabNavigator();

// Fake screen cho QR
function QRScreen() {
    return null;
}

function ProfileScreen() {
    return <View style={{ flex: 1, backgroundColor: '#fff' }} />;
}

function SettingsScreen() {
    return <View style={{ flex: 1, backgroundColor: '#fff' }} />;
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                {/* Home */}
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" size={size} color={color} />
                        ),
                    }}
                />

                {/* QR - ở giữa */}
                <Tab.Screen
                    name="QR"
                    component={QRScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.qrButton}>
                                <Ionicons
                                    name="qr-code-outline"
                                    size={30}
                                    color="#fff"
                                />
                            </View>
                        ),
                    }}
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            e.preventDefault();
                            navigation.navigate('QRScanner'); // màn hình scan thật
                        },
                    })}
                />

                {/* Profile */}
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person-outline" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    tabBar: {
        height: 65,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    qrButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30, // NHÔ LÊN
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
    },
});
