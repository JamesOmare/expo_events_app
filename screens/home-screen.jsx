import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import EventList from '../components/events/event-list'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <EventList/>
    </View>
  ) 
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})