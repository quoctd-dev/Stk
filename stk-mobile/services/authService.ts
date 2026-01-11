import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../src/config/firebase'

export const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
}
