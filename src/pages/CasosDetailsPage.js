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
        return(
            <ScrollView style={styles.scrollView}>
            <View>
                <Text>country: {this.state.casos.country}</Text>
                <Text>deaths: {this.state.casos.deaths}</Text>
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