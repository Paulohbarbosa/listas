import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import Lista from '../component/listagem'
import axios from 'axios';

export default class EquipePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        equipe: []
      }
    }
  
    componentDidMount() {
      axios
        .get('http://api.tvmaze.com/shows/1/crew')
        .then(response => {          
          this.setState({           
            equipe: response.data
          })
        })
    }

    render(){
    return(
        <View style={styles.container}>
             <View style={styles.header}>

                 <View style={styles.textContainer}>
                     <Text style={styles.text}>Lista</Text>
                     <Text style={[styles.text,{color: '#cececf'}]}>Direção</Text>
                     <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                         <MaterialIcons name="filter-list" size={24} color="#000"/>
                     </TouchableOpacity>
                 </View>
            </View>
            <ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Lista equipe={this.state.equipe} onPressItem={(equipe) => {this.props.navigation.navigate('Detalhes do Profissional',
                    { "equipe": equipe })}} />                   
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