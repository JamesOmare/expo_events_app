import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

export const NavOptions = (nav) => {
    return{
        headerTintColor: "#cbd5e1",
        headerStyle: {
            backgroundColor: "#0f172a"
        },
        headerRight: () => (
            <Ionicons
                name="menu"
                size={32} 
                color="white" 
                style={{marginRight: 15}} 
                onPress={() => nav.toggleDrawer()}
            />
        ),
        headerLeft: () => (
            <Text 
            style={{color:"white", fontSize:20, paddingLeft: 5}}
            >
            Logo
            </Text>
        )
    }
}