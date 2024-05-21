import { StatusBar } from 'expo-status-bar';
import { useState } from'react';
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, Text, SafeAreaView, View, Platform, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import { HomeStack } from './navigation/stack'
import 'react-native-gesture-handler';
import { MyDrawer } from './navigation/drawer';

export default function App() {
  const [text, setText] = useState('');
  return (
   <NavigationContainer>
    {/* <HomeStack /> */}
    <MyDrawer/>
    <StatusBar style='light'/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
