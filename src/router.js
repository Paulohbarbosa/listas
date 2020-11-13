import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './home'
import ListPessoas from './paulo/pages/pessoas'
import DetalhesPessoa from './paulo/pages/detalhes'

import SeasonDetailsPage from './izadora/pages/SeasonDetailsPage'
import SeasonPage from './izadora/pages/SeasonPage'

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
