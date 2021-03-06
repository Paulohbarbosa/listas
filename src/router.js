import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './home'
import ListPessoas from './paulo/pages/pessoas'
import DetalhesPessoa from './paulo/pages/detalhes'

import SeasonDetailsPage from './Izadora/pages/SeasonDetailsPage'
import SeasonPage from './Izadora/pages/SeasonPage'

import EquipeDetailsPage from './vagner/pages/EquipeDetailsPage'
import EquipePage from './vagner/pages/Equipe'

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="Pessoas" component={ListPessoas}/>
                <Stack.Screen name="Detalhes da Pessoa" component={DetalhesPessoa}/>

                <Stack.Screen name="Epsódios" component={SeasonPage} /> 
                <Stack.Screen name="Detalhe do epsódio" component={SeasonDetailsPage} /> 

                <Stack.Screen name="Equipe" component={EquipePage} /> 
                <Stack.Screen name="Detalhes do Profissional" component={EquipeDetailsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
