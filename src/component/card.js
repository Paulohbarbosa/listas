import React from 'react'
import { View,Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Title, Paragraph} from 'react-native-paper';


export default function Cards(props) {

    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <View style={styles.card}>
                <Title>{props.children}</Title>
                <Paragraph>By {props.by}</Paragraph>
            </View>
        </TouchableOpacity>
    )
}

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

        elevation: 4,
    },
    shoesText: {
        fontSize: 16
    }
})