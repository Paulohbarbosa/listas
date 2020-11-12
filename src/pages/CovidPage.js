import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import CasosList from '../component/CasosList'

export default class CovidPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      casos: []
    }
  }
 
  componentDidMount(){
    axios
    .get('https://covid19-brazil-api.now.sh/api/report/v1/countries')
    .then(response => {
      const {data} = response.data
      this.setState({
        casos: data
      })
    })
  }
 
  render(){
    return (
        <View>
        <CasosList casos={this.state.casos} 
                     onPressItem={ (casos) => {
                         this.props.navigation.navigate('Detalhe do caso',
                         {"casos": casos})
                     }}
        />
      </View>
    );
  }
 
}