import AsyncStorage from '@react-native-async-storage/async-storage'
//const BASE_API = "http://localhost:4000/api"
const BASE_API = "http://localhost:4000/api"
export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/usuarios/token`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },
    signIn: async (email, senha) => {
        const req = await fetch(`${BASE_API}/usuarios/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha })
        })
        const json = await req.json()
        return json
    },
    logout: async () => {
        await AsyncStorage.removeItem('token')
        return null
    },
    signUp: async (nome, email, senha) => {
        const req = await fetch(`${BASE_API}/usuarios`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha })
        })
        const json = await req.json()
        return json
    },
    getFilmes: async (user_id) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/filmes/user_id/${user_id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
        const json = await req.json()
        return json
    },
    incluiFilme: async (dadosFilme) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/filmes`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(dadosFilme)
        })
        const json = await req.json()
        return json
    },
    alteraFilme: async (dadosFilme) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/filmes`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(dadosFilme)
        })
        const json = await req.json()
        return json
    },
    deletaFilme: async (id) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/filmes/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
        const json = await req.json()
        return json
    }
}