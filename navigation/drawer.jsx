import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home-screen';
import { HomeStack, ProfileStack } from './stack';

const Drawer = createDrawerNavigator();

export const MyDrawer= () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{title: 'Home'}} />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} options={{title: 'Profiles'}} />
    </Drawer.Navigator>
  );
}