import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { DateObject, Calendar } from "react-native-calendars";
import Header from "../../headerNav";


const Main = () => {
    return (
      <View style={styles.container} >
          <Header header="Lawyerly" childHeader="Everyday children saved"/>
          <Calendar style={styles.calendar} current={'2021-01-01'} onDayPress={(day) => console.log(day)}/>
          {console.log("Hello how are o")}
          
     </View>
    );
};

export default Main;


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
    },
    calendar:{
      width:"100%",
      alignContent:"center",
      justifyContent:"center",
      // padding:"10%"
    }
  });
  