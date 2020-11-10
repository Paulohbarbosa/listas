import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { toUpperFirst } from '../util'

const PeopleListItem = (props) => {
    const { people, onPressItemDetails } = props
    const { first, last } = people.name
    return (

        <View style={{ padding: 5, alignItems: 'center'}}>
             
                <Card style={{ elevation: 5, width: 150, height: 200, }}>
                <TouchableOpacity onPress={() => { onPressItemDetails(people) }}>
                    <Card.Content style={{ alignItems: 'center' }}>                        
                        <Avatar.Image size={100} source={{ uri: people.picture.medium }} />                        
                        <Title>{`${toUpperFirst(first)}`}</Title>
                        <Paragraph>{toUpperFirst(last)}</Paragraph>                        
                </Card.Content>  
                </TouchableOpacity >
            </Card>
            
        </View>
        
    )
}
export default PeopleListItem