import React from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class SeasonDetailsPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            "seasons": props.route.params.seasons,
            key:'0'
        }
    }

    render(){
        var imagem = this.state.seasons.image.original
        const str = this.state.seasons.summary
        var newstr = str.replace('<p>', '');
        var newstr = newstr.replace('</p>', '');

        return(
            
            <ScrollView style={styles.scrollView}>           
             <ImageBackground source={imagem} style={styles.image}>  
                <Text style={styles.text}>{'Temporada ' + this.state.seasons.season}</Text>                   
                <Text style={styles.text}>{this.state.seasons.number + '. ' + this.state.seasons.name}</Text>                
                <Text style={styles.text}>Data de exibição: {this.state.seasons.airdate}</Text>   
                <Text style={styles.text}>Resumo: {newstr}</Text>     
                <Text style={styles.text}>url: {this.state.seasons.url}</Text>       
                </ImageBackground>         
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
        backgroundColor: 'black',
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        width: '100%'
      },
      text: {
        color: 'white' ,
        fontSize: 25
      }, 
      container: {
        backgroundColor: 'black',
    },
}
)