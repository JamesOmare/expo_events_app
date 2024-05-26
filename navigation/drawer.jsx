import { DrawerItemList, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack, ProfileStack } from './stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, Linking } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export const MyDrawer= () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={(props) => {
        return(
          <SafeAreaView style={{flex: 1, backgroundColor: '#99f6e4', paddingTop: 20}}>
            <View style={{justifyContent:'center', alignItems: 'center', height: 140}}>
              <Image
                style={{width: 100, resizeMode: 'contain'}}
                source={require('../assets/images/logo.png')}
              />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              label="More Info"
              onPress={() => Linking.openURL('https://www.google.com')}
              icon={() => (
                  <Ionicons name="information" size={22} color="black" />
                )}
            />
          </SafeAreaView>
        )
      }}
      >
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{
        title: 'Home',
        drawerIcon: () => <Ionicons name="home" size={22} color="black" />
        }}
      />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} options={{
        title: 'Profiles',
        drawerIcon: () => <MaterialCommunityIcons name="face-man-profile" size={22} color="black" />
        }}
      />
    </Drawer.Navigator>
  );
}