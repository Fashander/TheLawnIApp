import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";



const Header=({header, childHeader}:IHeaderProps)=>{

    return(
        <View style={style.container}>
            <Text style={style.header}>{header}</Text>
            <Text style={style.subheader}>{childHeader}</Text>
        </View>
    )
}


export default Header;


const style=StyleSheet.create({
    container:{
        top:0,
        position:"absolute",
        width:"100%",
        height:40,
        backgroundColor:"#b312d3",
    },
    header:{
        fontSize:16,
        textAlign:"center",
        
    },
    subheader:{
        fontSize: 12,
        textAlign:"center",
        // opacity:0.58,

    }
})
interface IHeaderProps{
    header:string,
    childHeader:string,
}