import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import Cards from './component/card'


export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
             <View style={styles.header}>
                     <Text style={styles.text}>Bem Vindo!</Text>
                     <Text style={[styles.text,{color: '#cececf'}]}>Escolha uma lista</Text>
            </View>

            <ScrollView>
                <View style={{flexDirection: 'Column', justifyContent: 'center', alignItems: 'center'}}>
                    <Cards by="Paulo Barbosa"  onClick={()=> navigation.navigate('Pessoas')}>
                        Lista Pessoas
                    </Cards>
                    <Cards by="Izadora Paim"  onClick={()=> navigation.navigate('Epsódios')}>
                        Lista epsódios
                    </Cards>
                    <Cards by="Paulo"  onClick={()=> navigation.navigate('Pessoas')}>
                        Estados 1
                    </Cards>
                </View>
                
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header:{
        marginBottom: 8,
        flexDirection: 'row',
        padding: '5%'
    },
    image:{
        width: '100%'
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 30,
        marginHorizontal: '1%'
    }
})