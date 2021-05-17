import AsyncStorage from '@react-native-async-storage/async-storage'
import ApiAxios from "../ApiAxios"


export const getStorageToken = async () => {
    return AsyncStorage.getItem('task-token')
}

export const setStorageToken = async (token) => {
    return AsyncStorage.setItem('task-token', token)
}

export const checkToken = async (token) => {
    const response = await ApiAxios.post('/auth/check-token', {token})
    return response.data
}

export const postSignIn = async ({email, password}) => {
    const response = await ApiAxios.post('/auth/signin', {email,password})
    return response.data
}

export const postRegister = async ({nome, email, password}) => {
    const response = await ApiAxios.post('/auth/register', {nome, email, password})
    return response.data
}