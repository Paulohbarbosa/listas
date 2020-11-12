import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper';

export default class CovidDetailsPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            "covid": props.route.params.covid,
        }
    }

    render(){
        var imagem = this.state.people.picture.large
        return(
            <ScrollView style={styles.scrollView}>
            <View style={{alignItems:'center'}}>
                <Image style={styles.imagem}  source={{uri:imagem}}/>
                    <Text style={styles.textoPrin}>País: {this.state.covid.country} {this.state.covid.cases}</Text>
                    { <Text>confirmed: {this.state.covid.confirmed}</Text>}
                {/* <Text>Cidade: {this.state.people.location.city} - {this.state.people.location.state}</Text> */}
                <Text>
                    {/* Rua: {this.state.people.location.street.name},  */}
                    {/* Nº: {this.state.people.location.street.number}  */}
                </Text>
                {/* <Text>E-mail: {this.state.people.email}</Text> */}
                {/* <Text>Tel.: {this.state.people.phone}</Text> */}
                
                <Text style={styles.card}>Tel.: {this.state.covid.phone}</Text>
                <Button icon="camera" mode="contained" onPress={()=>{}}>
                    Tirar foto
                </Button>
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