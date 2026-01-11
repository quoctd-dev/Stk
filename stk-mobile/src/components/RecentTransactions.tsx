import React, { useState, useMemo } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  GestureResponderEvent,
} from 'react-native'

type TxType = 'expense' | 'income'

type TransactionItem = {
  id: string
  title: string
  note?: string
  date: string // e.g. '03/06/23'
  amount: number
  color?: string
  type?: TxType
}

type Props = {
  data?: TransactionItem[]
  onPressMore?: (e: GestureResponderEvent) => void
  onPressItem?: (item: TransactionItem) => void
  initialType?: TxType
}

const defaultData: TransactionItem[] = [
  { id: '1', title: 'Tiền siêu thị', note: 'Chi tiêu hàng ngày', date: '03/06/23', amount: 250000, color: '#6b46c1', type: 'expense' },
  { id: '2', title: 'Tiền siêu thị', note: 'Chi tiêu hàng ngày', date: '03/06/23', amount: 250000, color: '#06b6d4', type: 'expense' },
  { id: '3', title: 'Tiền siêu thị', note: 'Chi tiêu hàng ngày', date: '03/06/23', amount: 250000, color: '#fb923c', type: 'expense' },
  { id: '4', title: 'Tiền siêu thị', note: 'Chi tiêu hàng ngày', date: '03/06/23', amount: 250000, color: '#f472b6', type: 'expense' },
    { id: '5', title: 'Tiền siêu thị', note: 'Chi tiêu hàng ngày', date: '03/06/23', amount: 250000, color: '#f472b6', type: 'expense' },
    { id: '6', title: 'Tiền siêu thị', note: 'Chi tiêu hàng ngày', date: '03/06/23', amount: 250000, color: '#f472b6', type: 'expense' },
    { id: '7', title: 'Tiền siêu thị', note: 'Chi tiêu hàng ngày', date: '03/06/23', amount: 250000, color: '#f472b6', type: 'expense' },
  // example income
  { id: '8', title: 'Lương', note: 'Tháng 6', date: '01/06/23', amount: 5000000, color: '#10b981', type: 'income' },
]

const formatVnd = (n: number) => n.toLocaleString('vi-VN', { maximumFractionDigits: 0 })

export default function RecentTransactions({
  data = defaultData,
  onPressMore,
  onPressItem,
  initialType = 'expense',
}: Props) {
  const [type, setType] = useState<TxType>(initialType)

  const items = useMemo(() => data.filter((d) => (d.type ?? 'expense') === type), [data, type])

  const renderItem = ({ item }: { item: TransactionItem }) => (
    <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => onPressItem && onPressItem(item)}>
      <View style={styles.left}>
        <View style={[styles.dot, { backgroundColor: item.color ?? '#cbd5e1' }]} />
        <View style={styles.texts}>
          <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
          {!!item.note && <Text numberOfLines={1} style={styles.subtitle}>{item.note}</Text>}
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.amount}>{formatVnd(item.amount)}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Giao dịch gần đây</Text>
        <TouchableOpacity onPress={onPressMore}>
          <Text style={styles.more}>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabWrap}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, type === 'expense' && styles.tabActive]}
            onPress={() => setType('expense')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, type === 'expense' && styles.tabTextActive]}>Chi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, type === 'income' && styles.tabActive]}
            onPress={() => setType('income')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, type === 'income' && styles.tabTextActive]}>Thu</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 6,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0b1b2b',
  },
  more: {
    color: '#0b84ff',
    fontSize: 13,
    fontWeight: '600',
  },
  tabWrap: {
    marginTop: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    overflow: 'hidden',
    height: 36,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#34a0ff',
  },
  tabText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#fff',
  },
  list: {
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingRight: 4,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
    marginLeft: 4,
  },
  texts: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0b1b2b',
  },
  subtitle: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  right: {
    alignItems: 'flex-end',
    minWidth: 90,
  },
  date: {
    fontSize: 12,
    color: '#94a3b8',
  },
  amount: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginLeft: 28,
  },
})