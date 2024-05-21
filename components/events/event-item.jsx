import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const EventItem = ({id, title, description}) => {
  const navigation = useNavigation()
  return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Event', {eventId: id, title, description})}>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>
  )
}

export default EventItem

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c55c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }
})