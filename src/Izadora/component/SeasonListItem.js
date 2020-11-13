import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'


const SeasonListItem = props => {
    const {seasons, onPressItemDetails} = props
     const {id} = seasons.id
     var imagem = seasons.image.medium
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(seasons)
        }} >
            
          <View style={style.line}>
               { <Image style={{height: 40, width: 40}} source={{uri:imagem}}/>   }
                <Text style={style.lineText} key={id}> 
                {`${seasons.number + '. ' + seasons.name}`}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
         line: {
             height:60,
             borderBottomWidth: 3,
             borderBottomColor: 'gray',
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
            flex: 7,
            color: 'white'
        }
    }
)
export default SeasonListItem