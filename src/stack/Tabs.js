import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()
import Home from '../views/Home'
import Perfil from '../views/Filme'
import Prestadores from '../views/Filmes'

export default function Tabs(){
return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: themes.padrao.colors.brand.amarelo,
            tabBarInactiveTintColor: themes.padrao.colors.neutral.neutral_100,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: themes.padrao.colors.brand.laranja,
                borderTopColor: themes.padrao.colors.neutral.neutral_0,
                paddingTop: 4,
                height: 60
            }
        }} >
            <Tab.Screen name="Filme"  component={Filme}
            options={{
                tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name={'local-movies'}
                color={focused ? themes.padrao.colors.brand.amarelo
                               : themes.padrao.colors.neutral.neutral_100}
                size={35}/>               
                )
            }} />
             <Tab.Screen name="Home"  component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name={'house'}
                color={focused ? themes.padrao.colors.brand.amarelo
                               : themes.padrao.colors.neutral.neutral_100}
                size={35}/>               
                )
            }} />
             <Tab.Screen name="Filmes"  component={Filmes}
            options={{
                tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name={'popcorn'}
                color={focused ? themes.padrao.colors.brand.amarelo
                               : themes.padrao.colors.neutral.neutral_100}
                size={35}/>               
                )
            }} />

    </Tab.Navigator>
)

}