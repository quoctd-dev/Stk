import React from "react";
import {StyleSheet, View} from "react-native";

export const ChartDecoration: React.FC = () => {
    return (
        <View style={styles.decoration}>
            <View style={[styles.coin, styles.coinTopRight]} />
            <View style={[styles.coin, styles.coinBottomRight]} />
            <View style={styles.chartRow}>
                <View style={styles.chartDot} />
                <View style={styles.chartLine} />
                <View style={[styles.chartDot, { left: 36 }]} />
                <View style={[styles.chartLine, { left: 36, width: 40 }]} />
                <View style={[styles.chartDot, { left: 84 }]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    decoration: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 0,
    },
    coin: {
        position: 'absolute',
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: '#ffd97a',
        opacity: 0.18,
    },
    coinTopRight: {
        top: -12,
        right: -18,
    },
    coinBottomRight: {
        bottom: -10,
        right: -6,
        width: 54,
        height: 54,
        borderRadius: 27,
    },
    chartRow: {
        position: 'absolute',
        left: 24,
        right: 130,
        bottom: 18,
        height: 40,
        justifyContent: 'center',
    },
    chartDot: {
        position: 'absolute',
        left: 0,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#dbeefc',
        opacity: 0.9,
    },
    chartLine: {
        position: 'absolute',
        left: 8,
        top: 4,
        height: 2,
        width: 28,
        backgroundColor: '#dbeefc',
        opacity: 0.9,
    },
})