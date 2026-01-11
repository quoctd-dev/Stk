import React from 'react'
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

// Fake screen cho nút QR
function EmptyScreen() {
    return null
}

export default function QRScanner() {
    return (
        <div>
            QR
        </div>
    )
}