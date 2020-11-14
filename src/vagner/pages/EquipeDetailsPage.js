import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class EquipeDetailsPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            "equipe": props.route.params.equipe,
            key:'0'
        }
    }

    render(){
        var imagem = this.state.equipe.person.image  
        
        return(
            <ScrollView style={styles.scrollView}>
                <View>                   
                <Text>Type: {this.state.equipe.type}</Text>                     
                <Text>url: {this.state.equipe.person.url}</Text>                    
                <Text>Name: {this.state.equipe.person.name}</Text>
                <Text>Country: {this.state.equipe.person.country === null ? "Sem informação." : this.state.equipe.person.country.name }</Text>                    
                <Text>Timezone: {this.state.equipe.person.country === null ? "Sem informação." : this.state.equipe.person.country.timezone}</Text>                     
                <Text>birthday: {this.state.equipe.person.birthday === null ? "Sem informação." : this.state.equipe.person.birthday}</Text>               
                {imagem != null && (<Image style={{ height: 400, width: 400 }} source={{ uri: imagem.original }} />)}                    
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