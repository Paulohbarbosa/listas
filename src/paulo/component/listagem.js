import * as React from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, StyleSheet, Text, StatusBar } from 'react-native';
import CardPessoas from './cardPessoas'

const listagem = props => {
  const { peoples, onPressItem } = props

  const renderItem = ({ item }) => {
    return (
      <CardPessoas
        key={item.id}
        people={item}
        onPressItemDetails={onPressItem}
      />
    )
  }

    return (
      <SafeAreaView>
        <FlatList
          data={peoples}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns='2'
        />
      </SafeAreaView>
    )
}
export default listagem