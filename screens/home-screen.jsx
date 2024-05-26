import { StyleSheet, View } from 'react-native'
import {useEffect, useState} from 'react'
import EventList from '../components/events/event-list'

const HomeScreen = () => {

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)

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
    const response = await fetch('https://1745-154-153-181-202.ngrok-free.app/events/')
    const data = await response.json()
    setData(data)
  }

  return (
    <View style={styles.screen}>
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