import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { toUpperFirst } from '../util'

const PeopleListItem = (props) => {
    const { people, onPressItemDetails } = props
    const { first, last } = people.name
    return (

        //style={{ padding: 5, flex: 1, flexDirection: 'row', justifyContent: 'center' }}

        <View style={{ padding: 5}}>
            <TouchableOpacity onPress={() => {onPressItemDetails(people)}} >
                <Card style={{ elevation: 5, width: 150, height: 200 }}>
                    <Card.Content style={{ alignItems:'center' }}>
                        <Avatar.Image size={100} source={{ uri: people.picture.medium }} />
                        <Title>{`${toUpperFirst(first)}`}</Title>
                        <Paragraph>{toUpperFirst(last)}</Paragraph>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        </View>
    )
}
export default PeopleListItem