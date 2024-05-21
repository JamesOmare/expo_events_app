import { StyleSheet, Text, View } from 'react-native'
import { useLayoutEffect } from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'
import {HeaderBackButton} from '@react-navigation/elements'

const ProfileDetailScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const {profileId} = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
            <HeaderBackButton
             tintColor="white"
             onPress = {() => navigation.goBack()} 
            />
        )
    })
  }, [])
  return (
    <View style={styles.screen}>
      <Text>Profile id: {profileId}</Text>
    </View>
  )
}

export default ProfileDetailScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})