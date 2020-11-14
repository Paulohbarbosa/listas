import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

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

        return (

            <ScrollView style={{ backgroundColor: 'black' }}>
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={imagem} style={styles.image}></Image>
                    </View>
                    <View style={{ justifyContent: 'space-around', paddingHorizontal: 50, paddingVertical: 25 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textRotulo}>T</Text>
                            <Text style={styles.text}>{this.state.seasons.season}</Text>
                            <Text style={styles.textRotulo}>:E</Text>
                            <Text style={styles.text}>{this.state.seasons.number}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textRotulo}>Título: </Text>
                            <Text style={styles.text}>{this.state.seasons.name}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textRotulo}>Tempo de execução: </Text>
                            <Text style={styles.text}>{this.state.seasons.runtime}min</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textRotulo}>Data de exibição: </Text>
                            <Text style={styles.text}>{this.state.seasons.airdate}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textRotulo}>Resumo: </Text>
                            <Text style={styles.text}>{newstr}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: 10 }}>
                            <Text style={styles.textRotulo}>URL: </Text>
                            <Text style={styles.text}>{this.state.seasons.url}</Text>
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
        height: 300,
        width: 300
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