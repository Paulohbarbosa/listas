import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class EquipeDetailsPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            "casos": props.route.params.casos,
            key:'0'
        }
    }

    render(){
        var imagem = this.state.casos.person.image.original
        return(
            <ScrollView style={styles.scrollView}>
                <View>                   
                <Text>Type: {this.state.casos.type}</Text>                     
                <Text>url: {this.state.casos.person.url}</Text>                    
                <Text>Name: {this.state.casos.person.name}</Text>
                    <Text>Country: {this.state.casos.person.country.name}</Text>
                    <Text>Timezone: {this.state.casos.person.country.timezone}</Text>
                <Text>birthday: {this.state.casos.person.birthday}</Text>
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