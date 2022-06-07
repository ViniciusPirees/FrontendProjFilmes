import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PreLoad from '../views/PreLoad'
import SignIn from '../views/SignIn/index'
import SignUp from '../views/SignUp/index'
import Filme from '../views/Filme'
import Filmes from '../views/Filmes'

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='PreLoad'>
                <Stack.Screen name="PreLoad" component={PreLoad} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Filme" component={Filme} />
                <Stack.Screen name="Filmes" component={Filmes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}