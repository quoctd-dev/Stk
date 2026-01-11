import { addDoc, collection } from 'firebase/firestore'
import { db } from '../src/config/firebase'

export const addExpense = async (data: {
    amount: number
    category: string
    note?: string
}) => {
    await addDoc(collection(db, 'expenses'), {
        ...data,
        createdAt: new Date(),
    })
}
