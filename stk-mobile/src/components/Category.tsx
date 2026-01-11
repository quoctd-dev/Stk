import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

/* =======================
   Types
======================= */
type CategoryItem = {
  id: string
  title: string
  amount: number
  percent?: number
  colors?: [string, string]
}

type Props = {
  data?: CategoryItem[]
  onPressItem?: (item: CategoryItem) => void
  onPressAdd?: () => void
}

const { width } = Dimensions.get('window')
const CARD_WIDTH = Math.round(Math.min(150, width * 0.64))

const formatVnd = (n: number) =>
    n.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    })

const defaultData: CategoryItem[] = [
  {
    id: '1',
    title: 'Cần thiết',
    amount: 1_000_000,
    percent: 55,
    colors: ['#6d28d9', '#8b5cf6'],
  },
  {
    id: '2',
    title: 'Đào tạo',
    amount: 1_000_000,
    percent: 10,
    colors: ['#38bdf8', '#7dd3fc'],
  },
  {
    id: '3',
    title: 'Hưởng thụ',
    amount: 1_000_000,
    percent: 10,
    colors: ['#fb923c', '#fda4af'],
  },
]

/* =======================
   Component
======================= */
export default function Category({
                                   data = defaultData,
                                   onPressItem,
                                   onPressAdd,
                                 }: Props) {
  return (
      <View style={styles.container}>
        <Text style={styles.heading}>Chi theo phân loại</Text>

        <View style={styles.horizontalWrap}>
          <TouchableOpacity
              style={styles.addCard}
              activeOpacity={0.8}
              onPress={onPressAdd}
          >
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>

          {/* 👉 Chỉ category card mới scroll */}
          <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollRow}
          >
            {data.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.9}
                    style={styles.cardWrapper}
                    onPress={() => onPressItem?.(item)}
                >
                  <LinearGradient
                      colors={item.colors ?? ['#667eea', '#764ba2']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.card}
                  >
                    <Text style={styles.title}>{item.title}</Text>

                    <Text style={styles.amount}>{formatVnd(item.amount)}</Text>

                    {typeof item.percent === 'number' && (
                        <View style={styles.pill}>
                          <Text style={styles.pillText}>{item.percent}%</Text>
                        </View>
                    )}
                  </LinearGradient>
                </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
  )
}

/* =======================
   Styles
======================= */
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },

  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0b1b2b',
    marginBottom: 10,
    paddingHorizontal: 16,
  },

  horizontalWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
  },

  scrollRow: {
    paddingRight: 12,
    alignItems: 'center',
  },

  addCard: {
    width: 64,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#828384',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plus: {
    fontSize: 28,
    color: '#9ca3af',
    lineHeight: 28,
  },

  cardWrapper: {
    marginRight: 12,
  },

  card: {
    width: CARD_WIDTH,
    minHeight: 120,
    borderRadius: 18,
    padding: 16,
    justifyContent: 'space-between',
  },

  title: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 14,
    fontWeight: '600',
  },

  amount: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 6,
  },

  pill: {
    alignSelf: 'flex-start',
    marginTop: 8,
    backgroundColor: 'rgba(255,255,255,0.18)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },

  pillText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
})
