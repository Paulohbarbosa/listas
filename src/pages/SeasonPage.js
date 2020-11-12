import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import SeasonList from '../component/SeasonList'

export default class SeasonPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      casos: []
    }
  }
 
  componentDidMount(){
    axios
    // .get('https://covid19-brazil-api.now.sh/api/report/v1')
      .get('http://api.tvmaze.com/seasons/1/episodes')
    .then(response => {
      // const {data} = response.data
      this.setState({
        // casos: data
        casos: response.data
      })
    })
  }
 
  render(){
    return (
        <View>
        <SeasonList casos={this.state.casos} 
                     onPressItem={ (casos) => {
                         this.props.navigation.navigate('Detalhe da temporada',
                         {"casos": casos})
                     }}
        />
      </View>
    );
  }
 
}