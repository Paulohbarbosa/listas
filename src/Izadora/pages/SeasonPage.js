import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native'
import axios from 'axios'
import {useNavigation} from '@react-navigation/native'
import {MaterialIcons} from '@expo/vector-icons'
import SeasonList from '../component/SeasonList';

export default class SeasonPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      seasons: []
    }
  }
 
  componentDidMount(){
    axios
      .get('http://api.tvmaze.com/seasons/1/episodes')
    .then(response => {
      this.setState({
        seasons: response.data
      })
      console.log(response)
    })
  }
 
 render(){
    return(
        <View style={styles.container}>
             <View style={styles.header}>
                 <View style={styles.textContainer}>
                     <Text style={styles.text}>Lista</Text>
                     <Text style={[styles.text,{color: '#cececf'}]}>Epsódios</Text>
                     <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                         <MaterialIcons name="filter-list" size={24} color="#000"/>
                     </TouchableOpacity>
                 </View>
            </View>
            {/* colocar a listagem */}
            <ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <SeasonList seasons={this.state.seasons} onPressItem={(seasons) => {this.props.navigation.navigate('Detalhe do epsódio',
                    { "seasons": seasons })}} />                   
                </View>
            </ScrollView>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header:{
        marginBottom: 5
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: '2%',
        marginHorizontal: "2%"
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    }
})