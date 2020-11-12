import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import SeasonList from '../component/SeasonList'

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
    })
  }
 
  render(){
    return (
        <View>
        <SeasonList seasons={this.state.seasons} 
                     onPressItem={ (seasons) => {
                         this.props.navigation.navigate('Detalhe do epsódio',
                         {"seasons": seasons})
                     }}
        />
      </View>
    );
  }
 
}