import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class PeopleDetailsPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            "people": props.route.params.people,
            key:'0'
        }
    }
//<Image style={style.avatar} source={{uri: people.picture.large}}></Image>
    render(){
        var imagem = this.state.people.picture.large
        return(
            <ScrollView style={styles.scrollView}>
            <View>
                <Text>Nome: {this.state.people.name.first} {this.state.people.name.last}</Text>
                <Text>Cidade: {this.state.people.location.city} - {this.state.people.location.state}</Text>
                <Text>
                    Rua: {this.state.people.location.street.name}, 
                    Nº: {this.state.people.location.street.number} 
                </Text>
                <Text>E-mail: {this.state.people.email}</Text>
                <Text>Tel.: {this.state.people.phone}</Text>
                <Image style={{height: 400, width: 400}}  source={{uri:imagem}}/>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        aspectRatio: 1,
        marginLeft: 10,
        flex: 1,
        borderRadius: 50
    },
    scrollView: {
        backgroundColor: '#FAFAFC',
      }
}
)