import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import ExpenseSummaryCard from '../components/ExpenseSummaryCard'
import Category from '../components/Category'
import RecentTransactions from '../components/RecentTransactions'

const Home: React.FC = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <ExpenseSummaryCard />
            <Category />
            <RecentTransactions />
        </ScrollView>
    )
}

export default Home
