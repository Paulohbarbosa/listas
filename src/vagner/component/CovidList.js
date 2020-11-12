import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import CovidListitem from './CovidListItem'

const CovidList = props => {
    const {covid, onPressItem} = props

    const renderItem = ({item}) => {
        return (
            <CovidListitem 
                key={item.country} 
                covid={item}
                onPressItemDetails={onPressItem}
                
            />
        ) 
    }

    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    Países
                </Text>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <SafeAreaView >
                <FlatList
                    data={covid}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.country}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#FAFAFC'
        },
        headerStyle: {
            flex: 1,
            height: 50,
            width: '100%',
            backgroundColor: "#a1f254e6",
            justifyContent: "center",
            alignItems: 'center'
        },
        titleStyle: {
            color: '#000',
            fontSize: 20
        }
    }
)

export default CovidList