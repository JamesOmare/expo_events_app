import {useState, useLayoutEffect} from 'react'
import { View, TextInput, StyleSheet, Button, Text } from 'react-native'
import {HeaderBackButton} from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'

const NewEventScreen = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [alert, setAlert] = useState({
        isVisible: false,
        msg: ''
    })
    

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'add new event',
            headerLeft: () => (
                <HeaderBackButton
                 tintColor="white"
                 onPress = {() => navigation.goBack()} 
                />
            )
        })
      }, [])

    const handleAddEvent = async() => {
        const dt = date.toISOString().slice(0, 10)
        
        const data = {
            name: name,
            description: description,
            date: dt
        }

        const response = await fetch('https://c3d0-102-7-166-2.ngrok-free.app/events/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()

        setAlert({
            isVisible: true,
            msg: "Event added successfully"
        })
    }

  return (
    <View style={styles.screen}>
        {alert.isVisible && <Text>{alert.msg}</Text>}
        <TextInput
            value = {name}
            onChangeText={setName}
            placeholder='name'
            style={styles.input}
        />

        <TextInput
            value = {description}
            onChangeText={setDescription}
            placeholder='description'
            style={styles.input}
        />

        <TextInput
            value = {date.toLocaleString()}
            onChangeText={setDate}
            placeholder='name'
            style={styles.input}
        />

        <Button
            onPress={handleAddEvent}
            title='add'
        />
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
    }
})

export default NewEventScreen