import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/screen/homepage";
import Main from "./components/screen/main"
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator style={styles.tab}>
      <Tab.Screen  name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={Main} />
      <Tab.Screen name="Me" component={Main} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


const styles =StyleSheet.create({
  tab:{
    fontSize:28,
  }
})