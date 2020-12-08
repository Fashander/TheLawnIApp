import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>LAWnI Sch</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141829",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:"white",
    fontSize:34,
    fontWeight:"700",
  }
});
