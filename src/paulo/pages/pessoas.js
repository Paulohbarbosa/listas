import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import Lista from '../component/listagem'
import axios from 'axios';

// const navigation = useNavigation();

export default class Pessoas extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        peoples: [],
      }
    }
  
    componentDidMount() {
      axios
        .get('http://api.tvmaze.com/shows/1/cast')
        .then(response => {
          //const { results } = response.data
          this.setState({
            //peoples: results
            peoples: response.data
          })
        })
    }

    render(){
    return(
        <View style={styles.container}>
             <View style={styles.header}>

                 <View style={styles.textContainer}>
                     <Text style={styles.text}>Lista</Text>
                     <Text style={[styles.text,{color: '#cececf'}]}>Pessoas</Text>
                     <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                         <MaterialIcons name="filter-list" size={24} color="#000"/>
                     </TouchableOpacity>
                 </View>
            </View>
            <ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Lista peoples={this.state.peoples} onPressItem={(peoples) => {this.props.navigation.navigate('Detalhes da Pessoa',
                    { "people": peoples })}} />                   
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