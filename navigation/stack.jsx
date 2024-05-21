import { createStackNavigator } from '@react-navigation/stack';
import EventDetailScreen from '../screens/event-detail-screen';
import HomeScreen from '../screens/home-screen';
import {useNavigation} from '@react-navigation/native'
import { NavOptions } from './options';
import ProfileDetailScreen from '../screens/profiles/profile-detail-screen';
import ProfilesScreen from '../screens/profiles/profiles-screen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      screenOptions={() => ({
        ...NavOptions(navigation),
        // Center the title
        headerTitleAlign: 'center', 
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Event" component={EventDetailScreen} />

    </Stack.Navigator>
  );
}

export const ProfileStack = () => {
    const navigation = useNavigation()
    return (
      <Stack.Navigator
        screenOptions={() => ({
            ...NavOptions(navigation),
            // Center the title
            headerTitleAlign: 'center', 
        })} 
      >
        <Stack.Screen name="Profiles" component={ProfilesScreen} />
        <Stack.Screen name="Profile" component={ProfileDetailScreen} />

    </Stack.Navigator>
    );
}