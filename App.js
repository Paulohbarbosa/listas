import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import CasosDetailsPage from './src/pages/EquipeDetailsPage';
import CovidPage  from './src/pages/EquipePage'
const Stack = createStackNavigator();

function App(){
  return(
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CovidPage">          
            { <Stack.Screen name="Equipe" component={CovidPage} /> }          
             { <Stack.Screen name="Detalhe do Profissional" component={CasosDetailsPage} /> }
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    }
  }
)

export default App;
