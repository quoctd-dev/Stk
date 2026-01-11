import React from 'react'
import {
    GestureResponderEvent,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import {RootStackParamList} from "../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import {addExpense} from "../../services/expenseService";

type Props = {
    onPressLine?: (e: GestureResponderEvent) => void
    onPressFacebook?: (e: GestureResponderEvent) => void
    onPressApple?: (e: GestureResponderEvent) => void
    onPressPhone?: (e: GestureResponderEvent) => void
}

const logo = require('../../assets/favicon.png')

function SocialButton({
                          color,
                          background,
                          label,
                          leftContent,
                          onPress,
                      }: {
    color?: string
    background?: string
    label: string
    leftContent: React.ReactNode
    onPress?: (e: GestureResponderEvent) => void
}) {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.button, background ? {backgroundColor: background} : styles.buttonWhite]}
            onPress={onPress}
        >
            <View style={styles.leftIconWrapper}>{leftContent}</View>
            <Text style={[styles.buttonText, color ? {color} : undefined]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default function LoginOption({
                                        onPressLine,
                                        onPressFacebook,
                                        onPressApple,
                                        onPressPhone,
                                    }: Props) {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const goHome = () => {
        navigation.replace('MainTabs')
    }
    const handleAdd = async () => {
        try {
            console.log('start')
            await addExpense({
                amount: Number(12000),
                category: "test"
            })
            console.log('end')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.logoBox}>
                        <Image source={logo} style={styles.logo} resizeMode="contain"/>
                    </View>
                </View>

                <View style={styles.titleWrap}>
                    <Text style={styles.title}>Đăng nhập</Text>
                    <Text style={styles.subtitle}>Vui lòng đăng nhập để sử dụng Money care</Text>
                </View>

                <View style={styles.actions}>
                    <SocialButton
                        background="#00C300"
                        label="Đăng nhập với Line"
                        leftContent={
                            <View style={[styles.iconCircle, {backgroundColor: '#fff'}]}>
                                <Text style={[styles.iconText, {color: '#00C300', fontWeight: '700'}]}>LINE</Text>
                            </View>
                        }
                        onPress={goHome}
                    />

                    <SocialButton
                        background="#1877F2"
                        label="Đăng nhập với Facebook"
                        leftContent={
                            <View style={[styles.iconCircle, {backgroundColor: '#fff'}]}>
                                <Text style={[styles.iconText, {color: '#1877F2', fontWeight: '800'}]}>f</Text>
                            </View>
                        }
                        onPress={onPressFacebook}
                    />

                    <SocialButton
                        background="#000"
                        label="Đăng nhập với Apple"
                        color="#fff"
                        leftContent={
                            <View style={[styles.iconCircle, {backgroundColor: '#fff'}]}>
                                <Text style={[styles.iconText, {color: '#000', fontSize: 18}]}></Text>
                            </View>
                        }
                        onPress={handleAdd}
                    />

                    <SocialButton
                        label="Đăng nhập với số điện thoại"
                        leftContent={
                            <View style={[styles.iconCircle, {backgroundColor: '#f3f4f6'}]}>
                                <Text style={[styles.iconText, {color: '#6b7280'}]}>📞</Text>
                            </View>
                        }
                        onPress={onPressPhone}
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.version}>App version v.12.3</Text>
                </View>

                {/* decorative watermark (large faint dollar) */}
                <Text style={styles.watermark}>$</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        paddingHorizontal: 28,
        paddingTop: 28,
        paddingBottom: 40,
        minHeight: '100%',
    },
    header: {
        marginBottom: 18,
    },
    logoBox: {
        width: 86,
        height: 86,
        borderWidth: 3,
        borderColor: '#2b9cff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#eaf6ff',
    },
    logo: {
        width: 60,
        height: 60,
    },
    titleWrap: {
        marginTop: 8,
        marginBottom: 22,
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#0b1b2b',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 13,
        color: '#9aa3ad',
    },
    actions: {
        marginTop: 8,
        gap: 12,
    },
    button: {
        height: 52,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        marginTop: 12,
    },
    buttonWhite: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e6e6e6',
    },
    leftIconWrapper: {
        width: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconText: {
        fontSize: 14,
        color: '#fff',
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '700',
        color: '#fff',
    },
    footer: {
        marginTop: 28,
        alignItems: 'center',
    },
    version: {
        color: '#c6c6c6',
        fontSize: 12,
    },
    watermark: {
        position: 'absolute',
        right: -20,
        bottom: -40,
        fontSize: 220,
        color: '#f0f6fb',
        opacity: 0.45,
        transform: [{rotate: '6deg'}],
    },
})