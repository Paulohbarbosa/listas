import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class EquipeDetailsPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            "equipe": props.route.params.equipe,
            key:'0'
        }
    }

    render(){
        var imagem = this.state.equipe.person.image  
        
        var imagem = ""

    if(this.state.equipe.person.image === null){
        imagem = 'https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/522641_250805608388636_1863166042_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=TrwQgeUC3vwAX-6LXl8&_nc_ht=scontent.frec8-1.fna&oh=16f2cd84ac2c0cd58678330460820758&oe=5FD53F65'


// 'https://i.pinimg.com/originals/63/dc/de/63dcde7857ba4c976db71314fc79cf19.jpg'

 
    }else{
        imagem = this.state.equipe.person.image.original
        }  
        
        return(
            <ScrollView style={styles.scrollView}>
                <View style={{flexDirection: "row", margin: 15}}>
                    
                <View style={{alignItems: "flex-end"}}>
                        <Image style={{ height: 500, width: 200 }} source={{ uri: imagem }} />            
                    </View>

                    <View style={{flexDirection: "column", paddingLeft:15 }}>
                    
                    <View>    
                        <Text style={styles.textoRotulo}>Função:</Text>
                        <Text style={styles.textoName}> {this.state.equipe.type}</Text>                             
                    </View>
                        
               
                   {/* <View>
                        <Text style={styles.textoRotulo}>URL:</Text>
                        <Text style={styles.textoName}>: {this.state.equipe.person.url}</Text>
                   </View> */}

                        <View>
                            <Text style={styles.textoRotulo}>Nome:</Text>
                            <Text style={styles.textoName}> {this.state.equipe.person.name} </Text>
                        </View>

                        <View>
                            <Text style={styles.textoRotulo}>País:</Text>
                            <Text style={styles.textoName}> {this.state.equipe.person.country === null ? "Sem informação." : this.state.equipe.person.country.name}</Text> 
                        </View>

                        <View>
                        <Text style={styles.textoRotulo}>Código:</Text>
                        <Text style={styles.textoName}> {this.state.equipe.person.country === null ? "Sem informação." : this.state.equipe.person.country.code}</Text>    
                        </View>

                        <View>
                        <Text style={styles.textoRotulo}>Cidade:</Text>
                        <Text style={styles.textoName}> {this.state.equipe.person.country === null ? "Sem informação." : this.state.equipe.person.country.timezone}</Text>    
                        </View>
                        
                        <View>
                        <Text style={styles.textoRotulo}>Aniversário:</Text>
                        <Text style={styles.textoName}> {this.state.equipe.person.birthday === null ? "Sem informação." : this.state.equipe.person.birthday}</Text>
                        </View>
               
                  
                        <View>
                        <Text style={styles.textoRotulo}>Genero:</Text>
                        <Text style={styles.textoName}> {this.state.equipe.person.gender === null ? "Sem informação." : this.state.equipe.person.gender}</Text>   
                        </View>
               
                  </View>                   
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        aspectRatio: 1,
        marginLeft: 10,
        flex: 1,
        borderRadius: 50
    },
    scrollView: {
        backgroundColor: '#FAFAFC',
    },
    
    textoName: {
         fontFamily: 'Fondamento_400Regular',
        fontSize: 14,
        fontWeight: "bold"
    },
    textoRotulo: {
         fontFamily: 'Vidaloka_400Regular',
        fontSize: 18,
        color: '#cabfbf'
    }
}
)