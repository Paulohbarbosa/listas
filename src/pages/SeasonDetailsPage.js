import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class SeasonDetailsPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            "casos": props.route.params.casos,
            key:'0'
        }
    }

    render(){
        var imagem = this.state.casos.image.original
        return(
            <ScrollView style={styles.scrollView}>           
             <View style={styles.container1}>             
                <Text>url: {this.state.casos.url}</Text>
                <Text>Nome: {this.state.casos.name}</Text>
                <Text>Temporada: {this.state.casos.season}</Text>
                <Text>Data de exibição: {this.state.casos.airdate}</Text>
                <Text>Resumo: {this.state.casos.summary}</Text>
                <Image style={{height: 200, width: 200}} source={{uri:imagem}}/>
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
      },
      container1: {
        flexDirection: "row",
        backgroundColor: '#e2f977',
        alignItems: 'left'
    },
}


)