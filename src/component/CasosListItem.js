import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const CasosListItem = props => {
    const {casos, onPressItemDetails} = props
     const {uid} = casos.uid
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(casos)
        }} >
         <View style={style.line}>
                <Text style={style.lineText} key={uid}> 
                {`${casos.uf}`}
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
export default CasosListItem