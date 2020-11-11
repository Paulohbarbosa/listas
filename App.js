import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage';
import PeoplePage  from './src/pages/PeoplePage'
import CasosDetailsPage from './src/pages/CasosDetailsPage';
import CovidPage  from './src/pages/CovidPage'
const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
function App(){
  return(
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CovidPage"> 
          {/* <Stack.Screen name="Lista de Pessoas" component={PeoplePage} /> */}
            { <Stack.Screen name="Lista de Casos" component={CovidPage} /> }
          {/* <Stack.Screen name="Detalhe da Pessoa" component={PeopleDetailsPage} /> */}
             { <Stack.Screen name="Detalhe do caso" component={CasosDetailsPage} /> }
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
