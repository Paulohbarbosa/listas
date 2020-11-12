import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const EquipeListItem = props => {
    const {casos, onPressItemDetails} = props
     const {id} = casos.person.id
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(casos)
        }} >
         <View style={style.line}>
                <Text style={style.lineText} key={id}> 
                {`${casos.person.name}`}
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
export default EquipeListItem