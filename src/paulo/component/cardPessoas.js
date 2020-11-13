import React from 'react'
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const PeopleListItem = (props) => {
    const { people, onPressItemDetails } = props
    const { id } = people.person.id

    const str = people.person.gender
    var newstr;
    if(str == "Male"){
        newstr = "Ator";
    }else{
        newstr = "Atriz";
    }
    

    return (
        <TouchableOpacity style={styles.container} onPress={() => {onPressItemDetails(people)}}>
            <View style={styles.card} key={id}>
                <Avatar.Image size={100} source={{ uri: people.person.image.medium }} />
                <Title>{people.person.name}</Title>
                <Paragraph>{newstr}</Paragraph>
            </View>
        </TouchableOpacity>
    )
}
export default PeopleListItem

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
    shoesText: {
        fontSize: 16
    }
})