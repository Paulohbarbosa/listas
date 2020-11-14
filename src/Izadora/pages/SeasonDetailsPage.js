import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 


export default class SeasonDetailsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            "seasons": props.route.params.seasons,
            key: '0'
        }
    }

    render() {
        var imagem = this.state.seasons.image.original

        const str = this.state.seasons.summary
        var newstr = str.replace('<p>', '');
        var newstr = newstr.replace('</p>', '');

        const data = this.state.seasons.airdate
        const ano = data.substring(0, 4);
        const mes = data.substring(5, 7);
        const dia = data.substring(8, 10);
        var newData = `${dia}/${mes}/${ano}`;

        return (

            <ScrollView style={{ backgroundColor: 'black' }}>
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={imagem} style={styles.image}></Image>
                    </View>

                    <View style={{ justifyContent: 'space-around', paddingHorizontal: 10, paddingVertical: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textRotulo}>Título: </Text>
                                <Text style={styles.text}>{this.state.seasons.name}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textRotulo}>T</Text>
                                <Text style={styles.text}>{this.state.seasons.season}</Text>
                                <Text style={styles.textRotulo}>:E</Text>
                                <Text style={styles.text}>{this.state.seasons.number}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="av-timer" size={24} color="#bfbbbb" />
                            <Text style={styles.text}> {this.state.seasons.runtime}min</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textRotulo}>Data de exibição: </Text>
                            <Text style={styles.text}>{newData}</Text>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textRotulo}>Resumo: </Text>
                            <Text style={[styles.text, { marginHorizontal: 5 }]}>{newstr}</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        // resizeMode: "cover",
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        width: '100%'
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    textRotulo: {
        color: '#bfbbbb',
        fontWeight: 'bold',
        fontSize: 20,
    },
    container: {
        backgroundColor: 'black',
    },
}
)