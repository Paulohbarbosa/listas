import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import SeasonListItem from './SeasonListItem'

const SeasonList = props => {
    const {seasons, onPressItem} = props

    const renderItem = ({item}) => {
        return (
            <SeasonListItem 
                key={item.id} 
                seasons={item}
                onPressItemDetails={onPressItem}
            />
        )
    }

    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    Temporadas
                </Text>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={seasons}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.id}}
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
            backgroundColor: 'black',
        },
        headerStyle: {
            flex: 1,
            height: 50,
            width: '100%',
            backgroundColor: "gray",
            justifyContent: "center",
            alignItems: 'center'
        },
        titleStyle: {
            color: 'white',
            fontSize: 30
        }
    }
)

export default SeasonList