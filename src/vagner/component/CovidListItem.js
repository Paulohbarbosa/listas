/*import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { toUpperFirst } from '../util'

const CovidListitem = (props) => {
    const { covid, onPressItemDetails } = props
    const { country, cases } = covid.country
    return (

        <View style={{ padding: 5, alignItems: 'center'}}>
             
                <Card style={{ elevation: 5, width: 150, height: 200, }}>
                <TouchableOpacity onPress={() => { onPressItemDetails(covid) }}>
                    <Card.Content style={{ alignItems: 'center' }}>                        
                        <Avatar.Image size={100} source={{ uri: covid.picture.medium }} />                        
                        <Title>{`${toUpperFirst(country)}`}</Title>
                        <Paragraph>{cases}</Paragraph>                        
                </Card.Content>  
                </TouchableOpacity >
            </Card>
            
        </View>
        
    )
}
export default CovidListitem */




import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const CovidListitem = props => {
    const {covid, onPressItemDetails} = props
    const {country} = covid.country
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(covid)
        }} >
            <View style={style.line}>
                <Text style={style.lineText} key={country}> 
                {`${covid.country}`}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
        line: {
            height:60,
            borderBottomWidth: 1,
            borderBottomColor: '#bbb',
            alignItems: 'center',
            flexDirection: 'row'
        },
        avatar: {
            aspectRatio: 1,
            marginLeft: 10,
            flex: 1,
            borderRadius: 50
        },
        lineText: {
            fontSize: 20,
            paddingLeft: 20,
            flex: 7
        }
    }
)
export default CovidListitem
