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

    const icone = data.tipo == 'Ação' ? 'sword' : data.tipo == 'Terror' ? 'ghost' : data.tipo == 'Drama' ? 'drama' : data.tipo == 'Drama' ? 'drama-masks' : data.tipo == 'Comédia' ? 'laugh-beam' : data.tipo == 'Documentário' ? 'videocamera' : ''

    return (
        <Area onPress={navegaDetalhe}>
            <InfoArea>
                <MaterialCommunityIcons name={icone} size={50} color={themes.padrao.colors.neutral.neutral_100} />
            </InfoArea>
            <InfoArea>
                <Nome>{data.nome}</Nome>
                <Diretor>{data.diretor}</Diretor>
                <Ano>{data.ano}</Ano>
                <Nota>{data.nota}</Nota>
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
margin-horizontal: 10px;
padding-horizonda: 10px;
justify-content: center;

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
`
