import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import axios from 'axios'
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
                 </View>
            </View>
            
            <ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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