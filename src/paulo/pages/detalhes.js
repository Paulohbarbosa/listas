import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class PeopleDetailsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            "people": props.route.params.people,
        }
    }

    render() {
        var imagem = this.state.people.person.image.original
        var data = ""
        var idade = 0
        const dat = this.state.people.person.birthday === null ? "Sem informação" : this.state.people.person.birthday

        if (dat != "Sem informação") {
            const ano = dat.substring(0, 4);
            const mes = dat.substring(5, 7);
            const dia = dat.substring(8, 10);
            data = `${dia}/${mes}/${ano}`;
            idade = 2020 - ano

        } else {
            data = "Sem informação";
            idade = "--";
        }

        const str = this.state.people.person.gender
        var newstr;
        var profis;
        if (str == "Male") {
            newstr = "Homem";
            profis = "Ator"
        } else {
            newstr = "Mulher";
            profis = "Atriz"
        }

        return (
            <ScrollView style={styles.scrollView}>
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.imagem} source={{ uri: imagem }} />
                    </View>

                    <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ marginTop: 15 }}>
                                <Text style={styles.textoRotulo}>Nome:</Text>
                                <Text style={styles.textoName}>{this.state.people.person.name}</Text>
                            </View>

                            <View style={{ marginTop: 15 }}>
                                <Text style={styles.textoRotulo}>Sexo:</Text>
                                <Text style={styles.textoName}>{newstr}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.textoRotulo}>Pais:</Text>
                            <Text style={styles.textoName}>{this.state.people.person.country.name}</Text>
                        </View>

                        <View style={{ marginTop: 15, marginRight: 7 }}>
                            <Text style={styles.textoRotulo}>Profissão:</Text>
                            <Text style={styles.textoName}>{profis}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 50 }}>

                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.textoRotulo}>Nascimento:</Text>
                            <Text style={styles.textoName}>{data}</Text>
                        </View>

                        <View style={{ marginTop: 15, marginRight: 37 }}>
                            <Text style={styles.textoRotulo}>Idade:</Text>
                            <Text style={styles.textoName}>{idade}</Text>
                        </View>

                    </View>
                </View>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FAFAFC',
        padding: 20,
    },
    imagem: {
        width: 400,
        height: 600,
        borderRadius: 20
    },
    card: {
        width: 321,
        height: 85,
        left: 19,
        top: 46,
    },
    textoName: {
        fontFamily: 'Anton_400Regular',
        fontSize: 30,
        fontWeight: "200"
    },
    textoRotulo: {
        fontFamily: 'Anton_400Regular',
        fontSize: 20,
        color: '#cabfbf'
    }
}
)