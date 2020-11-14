import React from 'react'
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const EquipeListItem = (props) => {
    const { equipe, onPressItemDetails } = props
    const { id } = equipe.person.id

    var imagem =  equipe.person.image.medium  
    return (
        <TouchableOpacity style={styles.container} onPress={() => {onPressItemDetails(equipe)}}>
            <View style={styles.card} key={id}>
                {imagem != null && (<Avatar.Image size={100} source={{uri: imagem.medium }} />)}               
                <Title style={styles.text}>{equipe.person.name}</Title>
                <Paragraph style={styles.text}>{equipe.person.type}</Paragraph>
            </View>
        </TouchableOpacity>
    )
}
export default EquipeListItem

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%'
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 200,
        height: 200,
        //backgroundColor: "#f2f2f3",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 2,
    },
    text: {
        fontFamily: 'Anton_400Regular'
    }
})