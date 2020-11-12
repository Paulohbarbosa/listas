import * as React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { SafeAreaView, View, FlatList, TouchableOpacity, StyleSheet, Text, StatusBar } from 'react-native';
import Cards from '../../component/card'
import axios from 'axios'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '57694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Quarto Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Quarto Item',
  },
  {
    id: '57894a0f-3da1-471f-bd96-145571e29d72',
    title: 'Quarto Item',
  },
  {
    id: '58698a0f-3da1-471f-bd96-145571e29d72',
    title: 'Quarto Item',
  },
  {
    id: '51894a0f-3da1-471f-bd96-145571e29d72',
    title: 'Quarto Item',
  },
];

const Item = ({ title }) => (

  <TouchableOpacity>
      <Cards by={DATA.id} onClick={() => navigation.navigate('Pessoas')}>
      {title}
      </Cards>
  </TouchableOpacity>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns='2'
      />
    </SafeAreaView>
  );
}
export default App;