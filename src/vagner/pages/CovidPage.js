import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import CovidList from '../component/CovidList'

export default class CovidPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      covid: []
    }
  }

  componentDidMount() {
    axios
      .get('https://covid19-brazil-api.now.sh/api/report/v1/countries')
      .then(response => {
        const { data } = response.data
        this.setState({
          covid: data
        })
      })
  }

  render() {
    return (
      <View>
        <CovidList covid={this.state.covid}
          onPressItem={(covid) => {
            this.props.navigation.navigate('Detalhe por País',
              { "covid": covid })
          }}
        />
      </View>

    );
  }

}