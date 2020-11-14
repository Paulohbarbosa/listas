import React from 'react'
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const EquipeListItem = (props) => {
    const { equipe, onPressItemDetails } = props
    const { id } = equipe.person.id

    var imagem = ""

    if(equipe.person.image === null && equipe.person.gender === 'Female'){
        imagem = 'https://www.dinamize.com.br/wp-content/uploads/2016/10/man-3.png'
    }else if(equipe.person.image === null && equipe.person.gender === 'Male'){
        imagem ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTenfEl-b_QiEs6hMLJDnYXRP8WzMWarpve_Q&usqp=CAU'
    }else if(equipe.person.image === null && equipe.person.gender === null){
        imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRtHz0_U8J-W86rWKVoS2xqqGUcSMvc0DrIw&usqp=CAU"
    }else{
        imagem = equipe.person.image.medium
    }  
    return (
        <TouchableOpacity style={styles.container} onPress={() => {onPressItemDetails(equipe)}}>
            <View style={styles.card} key={id}>
                {imagem != null && (<Avatar.Image size={100} source={{uri: imagem }} />)}               
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