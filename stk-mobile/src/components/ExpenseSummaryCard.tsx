import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import {ChartDecoration} from "./ChartDecoration";

const { width } = Dimensions.get('window')

const ExpenseSummaryCard: React.FC = () => {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.wrapper}>
                <ChartDecoration />

                <View style={styles.left}>
                    <Text style={styles.heading}>
                        Số tiền bạn chi trong tháng
                    </Text>

                    <TouchableOpacity style={styles.detailRow} activeOpacity={0.7}>
                        <Text style={styles.detailText}>Xem chi tiết</Text>
                        <Text style={styles.detailArrow}>➜</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.right}>
                    <View style={styles.dashedOuter}>
                        <View style={styles.dashedInner}>
                            <Text style={styles.bigNumber}>15.000.000</Text>
                            <Text style={styles.balanceText}>Số dư: 2.500.000</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ExpenseSummaryCard

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#f6f8fb' },
    wrapper: {
        margin: 16,
        borderRadius: 22,
        backgroundColor: '#eaf6ff', // light blue background
        flexDirection: 'row',
        paddingVertical: 26,
        paddingHorizontal: 22,
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
    },
    left: { flex: 1, paddingRight: 12 },
    heading: {
        fontSize: 16,
        fontWeight: '500',
        color: '#0b1b2b'
    },
    detailRow: {
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailText: {
        color: '#0b84ff',
        fontSize: 12,
        fontWeight: '700',
    },
    detailArrow: {
        color: '#0b84ff',
        marginLeft: 8,
        fontSize: 16,
    },
    right: {
        width: Math.min(260, width * 0.46),
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 8,
    },
    dashedOuter: {
        width: '100%',
        borderRadius: 16,
        padding: 10,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#cfcfcf',
        backgroundColor: 'transparent',
    },
    dashedInner: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        // subtle shadow
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 2,
    },
    bigNumber: {
        color: '#ff7a2d',
        fontSize: 24,
        fontWeight: '900',
    },
    balanceText: {
        marginTop: 6,
        color: '#666',
        fontSize: 14,
    },
})