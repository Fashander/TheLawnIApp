import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda, DateObject} from "react-native-calendars";
import Home from "./src/components/screen/homepage";
import Main from "./src/components/screen/main";
import Appnin from "./src/app"

// const [open, setOpen]=useState(false);
// const [date, setDate]=useState<DateObject>()

// const HandlePress=(day:DateObject)=>{
//   setDate(day)
// }
export default function App() {
  return (
      <Appnin/>
  );
}

