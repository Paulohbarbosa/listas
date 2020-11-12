import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './home'
import ListPessoas from './paulo/pages/pessoas'
import DetalhesPessoa from './paulo/pages/detalhes';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="Pessoas" component={ListPessoas}/>
                <Stack.Screen name="Detalhes da Pessoa" component={DetalhesPessoa}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
