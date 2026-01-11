import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import QRScanner from '../screens/QRScanner'

const Tab = createBottomTabNavigator()

export default function MainTabs() {
    return (
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
                        <Ionicons
                            name="home-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            {/* QR */}
            <Tab.Screen
                name="QR"
                component={QRScanner}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.qrWrapper}>
                            <View style={styles.qrButton}>
                                <Ionicons
                                    name="qr-code-outline"
                                    size={30}
                                    color="#fff"
                                />
                            </View>
                        </View>
                    ),
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        navigation.navigate('QR')
                    },
                })}
            />

            {/* Profile */}
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="person-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        height: 65,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
    },
    qrWrapper: {
        top: -25, // 👈 đẩy QR nổi lên
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 4 },
    },
})
