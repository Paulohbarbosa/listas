import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class CasosDetailsPage extends React.Component{
    
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
            <View>
                <Text>url: {this.state.casos.url}</Text>
                <Text>Name: {this.state.casos.name}</Text>
                <Text>Season: {this.state.casos.season}</Text>
                <Text>airdate: {this.state.casos.airdate}</Text>
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