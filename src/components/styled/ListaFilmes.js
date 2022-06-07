import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import themes from '../../themes'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default ({ data }) => {
    const navigation = useNavigation()
    const navegaDetalhe = () => {
        navigation.navigate('Filme', { Filme: data })
    }

    const icone = data.genero == 'Ação' ? 'sword' : data.genero == 'Terror' ? 'ghost' : data.genero == 'Drama' ? 'drama-masks' : data.genero == 'Comédia' ? 'robot-happy-outline' : data.genero == 'Documentário' ? 'camera-document' : ''

    return (
        <Area onPress={navegaDetalhe}>
            <InfoArea>
                <MaterialCommunityIcons name={icone} size={50} color={themes.padrao.colors.neutral.neutral_100} />
            </InfoArea>
            <InfoArea>
                <Nome>Nome: {data.nome}</Nome>
                <Diretor>Diretor: {data.diretor}</Diretor>
                <Ano>Ano: {data.ano}</Ano>
                <Nota>Nota: {data.nota}</Nota>
            </InfoArea>
        </Area>
    )
}

const Area = styled.TouchableOpacity`
background: ${themes.padrao.colors.brand.secundario};
margin-bottom: 16px;
border-radius: 16px;
padding: 8px;
flex-direction: row;
`

const InfoArea = styled.View`

margin-right: 10px;
`
const Nome = styled.Text`
color: ${themes.padrao.colors.neutral.neutral_100}
margin-top: 4px;
font-size: 17px;
width: auto;
`
const Diretor = styled.Text`
color: ${themes.padrao.colors.neutral.neutral_100}
font-size: 17px;
width: auto;
`
const Ano = styled.Text`
color: ${themes.padrao.colors.neutral.neutral_100}
font-size: 14px;
margin-top: 4px;
width: auto;
`

const Nota = styled.Text`
color: ${themes.padrao.colors.neutral.neutral_100}
font-size: 14px;
margin-top: 4px;
width: auto;
margin-bottom: 4px;
`
