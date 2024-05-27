import { StyleSheet, View, Button } from 'react-native'
import {useEffect, useState} from 'react'
import EventList from '../components/events/event-list'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const navigation = useNavigation()

  const handleRefresh = () => {
    console.log('refreshing')
    setRefresh(prevstate => !prevstate)
  }

  useEffect(() => {
    try{
      fetchData()
    }
    catch(err){
        console.error(err)
    }
  }, [refresh])

  const fetchData = async() => {
    const response = await fetch('https://c3d0-102-7-166-2.ngrok-free.app/events/')
    const data = await response.json()
    setData(data)
  }

  return (
    <View style={styles.screen}>
      <Button 
        onPress={() => navigation.navigate('New Event')}
        title='Add New Event'
      />
      <EventList data={data} onRefresh={handleRefresh} />
    </View>
  ) 
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})