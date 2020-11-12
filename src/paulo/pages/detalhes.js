import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class PeopleDetailsPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            "people": props.route.params.people,
        }
    }

    render(){
        var imagem = this.state.people.picture.large
        return(
            <ScrollView style={styles.scrollView}>
            <View style={{alignItems:'center'}}>
                <Image style={styles.imagem}  source={{uri:imagem}}/>
                <Text style={styles.textoPrin}>Nome: {this.state.people.name.first} {this.state.people.name.last}</Text>
                <Text>Cidade: {this.state.people.location.city} - {this.state.people.location.state}</Text>
                <Text>
                    Rua: {this.state.people.location.street.name}, 
                    Nº: {this.state.people.location.street.number} 
                </Text>
                <Text>E-mail: {this.state.people.email}</Text>
                <Text>Tel.: {this.state.people.phone}</Text>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FAFAFC',
        padding: 20,
    },
    imagem:{
        width: 400,
        height: 400,
    },
    card:{
        width: 321,
        height: 85,
        left: 19,
        top: 46,
    },
    textoPrin:{
        width: 196,
        height: 21,
        left: 52,
    }
}
)