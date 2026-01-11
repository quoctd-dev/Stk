import React from 'react'
import {ScrollView} from 'react-native'
import ExpenseSummaryCard from '../components/ExpenseSummaryCard'
import Category from '../components/Category'
import RecentTransactions from '../components/RecentTransactions'
import {addExpense} from "../../services/expenseService";

const Home: React.FC = () => {
    const handleAdd = async () => {
        try {
            await addExpense({
                amount: Number(),
                category: "test"
            })
        } catch {

        }
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <ExpenseSummaryCard />
            <Category />
            <RecentTransactions />
        </ScrollView>
    )
}

export default Home
