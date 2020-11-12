import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import SeasonDetailsPage from './src/pages/SeasonDetailsPage';
import SeasonPage  from './src/pages/SeasonPage'
const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
function App(){
  return(
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SeasonPage"> 
            { <Stack.Screen name="Série: Under the Dome" component={SeasonPage} /> }
             { <Stack.Screen name="Detalhe do epsódio" component={SeasonDetailsPage} /> }
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
