import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginOption from "./src/screens/LoginOption";
import MainTabs from "./src/navigation/MainTabs";


export type RootStackParamList = {
    LoginOption: undefined
    MainTabs: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginOption" component={LoginOption} />
                <Stack.Screen name="MainTabs" component={MainTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
