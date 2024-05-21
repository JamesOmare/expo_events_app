import { StyleSheet, Text, View, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native'

const ProfilesScreen = () => {
  const navigation = useNavigation()
  return (
        <View>
            <Text>Profile Screen</Text>
            <Button title="some profile" onPress={() => navigation.navigate('Profiles', {profileId: 1})}/>
        </View>
  )
}

export default ProfilesScreen

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c55c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }
})