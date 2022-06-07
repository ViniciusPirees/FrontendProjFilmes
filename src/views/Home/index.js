import React from 'react'
import {Container, Title} from './styles'
import Header from '../../components/styled/Header'
import Filme from '../Filme'

export default function Home(){
    return (
        <>
        <Header headerTitle="Filmes" />
        <Container>
            <Filme />
            <Title>Início</Title>
        </Container>
       </>
    )
}