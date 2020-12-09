import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda, DateObject} from "react-native-calendars";
import Home from "./src/components/screen/homepage";

// const [open, setOpen]=useState(false);
// const [date, setDate]=useState<DateObject>()

// const HandlePress=(day:DateObject)=>{
//   setDate(day)
// }
export default function App() {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>LAWI</Text>
      <Calendar current={'2021-01-01'} onDayPress={(day) => console.log(day)}/>
      {console.log("Hello how are o")}
      <Home text="Samuel getting it finally"/>
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
