import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import CovidDetailsPage from './src/vagner/pages/CovidDetailsPage';
import CovidPage  from './src/vagner/pages/CovidPage'
const Stack = createStackNavigator();

function App(){
  return(
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CovidPage">
          <Stack.Screen name="Lista de Países" component={CovidPage} />
          <Stack.Screen name="Detalhe do País" component={CovidDetailsPage} />
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
