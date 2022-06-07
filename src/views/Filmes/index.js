import React, { useState, useEffect } from 'react'
import { ScrollView, Text, ActivityIndicator, StyleSheet, View } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { StyledButtonPrimario, StyledButtonTerciario } from '../../components/styled/Botao'
import { Container } from '../../components/styled/Outros'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ListaFilmes from '../../components/styled/ListaFilmes'
import themes from '../../themes'
import Header from '../../components/styled/Header'
import Api from '../../resources/api/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [listaFilmes, setLlistaFilmes] = useState([])

    async function getFilmes() {
        setLoading(true)
        const user_id = await AsyncStorage.getItem('user_id')
        let res = await Api.getFilmes(user_id)
        res.ok === 0
            ? alert(`Não foi possível obter a lista de Filmes ${res.codeName}`)
            : setLlistaFilmes(res)
        setLoading(false)
    }

    useEffect(() => {
        getFilmes()
    }, [])


    const handleRedirectFilmeButtonClick = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Filme' },
                ],
            })
        )
    }

    const sair = async () => {
        await Api.logout()
        navigation.navigate('SignIn')
    }

    return (
        <>
            <Header headerTitle="Filmes" />
            <Container>
                <ScrollView>
                    {loading &&
                        <ActivityIndicator size="large"
                            color={themes.padrao.colors.brand.primario} />
                    }
                    {listaFilmes.length === 0 && !loading &&
                        <Text>Ops! Não existe nenhum Filme.</Text>
                    }
                    <MaterialCommunityIcons name="cloud-refresh" size={30} color={themes.padrao.colors.brand.primario} onPress={() => getFilmes()} />

                    {listaFilmes.map((Filme, k) => (
                        <ListaFilmes key={k} data={Filme} />
                    ))}
                </ScrollView>
                <StyledButtonPrimario icon="car" text="Adicionar" onPress={handleRedirectFilmeButtonClick} />
                <StyledButtonTerciario icon="logout" text="Sair" onPress={sair} />
            </Container>
        </>
    );
}

const styles = StyleSheet.create({
    containerBotaoSair: {
        justifyContent: 'center'
    }
})