import React, { useState, useEffect } from 'react'
import { StyleSheet, Platform, View }
    from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PickerSelect from 'react-native-picker-select';
import Api from '../../resources/api/Api'
import Header from '../../components/styled/Header'
import themes from '../../themes'
import { InputArea, InputFormFilme } from '../../components/styled/Input'
import { StyledButtonSecundario, StyledButtonTerciario } from '../../components/styled/Botao'
import { StyledButtonDelete } from './styles'

export default ({ route }) => {
    const navigation = useNavigation()

    const dadosExistentes = route.params ? route.params.Filme :
        {//aaaaaaaaaaaaaaa
            genero: 'Ação', nome: '', diretor: '', ano: '',
            nota: '', user_id: ''
        }

    const [Filme, setFilme] = useState(dadosExistentes)

    useEffect(() => {
        setFilme(dadosExistentes)
    }, [route])


    const salvarFilme = async (dadosFilme) => {
        dadosFilme.user_id = await AsyncStorage.getItem('user_id')
        let salvar = dadosFilme.hasOwnProperty('_id') ? await Api.alteraFilme(dadosFilme) : await Api.incluiFilme(dadosFilme)
        if (salvar.hasOwnProperty('errors')) {
            Platform.OS === 'web' ? alert(`‼️Erro: ${salvar.errors[0].msg}`) : Alert.alert("‼️Erro", salvar.errors[0].msg)
        } else if (salvar.hasOwnProperty('acknowledged')) {
            Platform.OS === 'web' ? alert(`Salvo com sucesso `) : Alert.alert("Ok", 'Salvo com sucesso')
            navigation.navigate('Filmes')
        }
    }

    const deletarFilme = async (id) => {
        let res = await Api.deletaFilme(id)
        if (res.hasOwnProperty('acknowledged')) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Filmes' },
                    ],
                })
            )
        } else {
            Platform.OS === 'web' ? alert(`‼️Erro: ${res.errors[0].msg}`) : Alert.alert("‼️Erro", res.errors[0].msg)
        }
    }

    return (//aaaaaaaaaaaaaaaaaaa
        <View>
            <Header headerTitle="Filme" />
            {dadosExistentes.nome !== '' &&
                <StyledButtonDelete icon="delete" onPress={() => deletarFilme(Filme._id)} />
            }
            <InputArea>
                <PickerSelect
                    onValueChange={(value) => setFilme({ ...Filme, genero: value })}
                    value={Filme.genero}
                    items={[
                        { label: 'Ação', value: 'Ação' },
                        { label: 'Terror', value: 'Terror' },
                        { label: 'Drama', value: 'Drama' },
                        { label: 'Comédia', value: 'Comédia' },
                        { label: 'Documentário', value: 'Documentário' }]}
                    style={pickerSelectStyles}
                    placeholder={{}}
                />
                <InputFormFilme
                    name='nome'
                    onChangeText={(text) => setFilme({ ...Filme, nome: text })}
                    value={Filme.nome}
                    keyboardType='default'
                    placeholder='Nome'
                    maxLength={100}
                />
                <InputFormFilme
                    name='diretor'
                    onChangeText={(text) => setFilme({ ...Filme, diretor: text })}
                    value={Filme.diretor}
                    keyboardType='default'
                    placeholder='Diretor'
                    maxLength={100}
                />
                <InputFormFilme
                    name='ano'
                    onChangeText={(text) => setFilme({ ...Filme, ano: text })}
                    value={Filme.ano}
                    keyboardType='default'
                    placeholder='Ano'
                    maxLength={4}
                />

                <InputFormFilme
                    name="nota"
                    onChangeText={(text) => setFilme({ ...Filme, nota: text })}
                    value={Filme.nota}
                    keyboardType="default"
                    placeholder='Nota'
                    maxLength={2}
                />
                <StyledButtonSecundario
                    text='Salvar o Registro'
                    onPress={() => salvarFilme(Filme)}
                />
                <StyledButtonTerciario
                    text='Cancelar'
                    onPress={() => navigation.navigate('Filmes')}
                    background-color={themes.padrao.colors.brand.terciario}
                />
            </InputArea>
        </View>
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height: 64,
        backgroundColor: themes.padrao.colors.neutral.neutral_20,
        flexDirection: 'row',
        borderRadius: 32,
        paddingLeft: 16,
        marginBottom: 16,
        fontSize: 16
    },
    inputAndroid: {
        height: 64,
        backgroundColor: themes.padrao.colors.neutral.neutral_20,
        flexDirection: 'row',
        borderRadius: 32,
        paddingLeft: 16,
        marginBottom: 16,
        fontSize: 16
    },
    inputWeb: {
        height: 64,
        backgroundColor: themes.padrao.colors.neutral.neutral_20,
        flexDirection: 'row',
        borderRadius: 32,
        paddingLeft: 16,
        marginBottom: 16,
        fontSize: 16
    }
});