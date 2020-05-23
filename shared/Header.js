import React from "react";
import { View, StyleSheet,Text, Image, ImageBackground } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"


export default function Header({ navigation , title} ){

    const pressHandler = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require("../assets/game_bg.png")} style = {styles.header} >
            <MaterialIcons name='menu' size={28} onPress = {pressHandler} style = {styles.icon} />
            <View style = {styles.headerTitle}>
                <Image source = { require("../assets/heart_logo.png")} 
                style = { styles.headerImage}/>
                <Text style = {styles.title} > {title} </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header : {
        flexDirection : "row",
        height : '100%',
        width : '100%',
        alignItems : 'center',
        justifyContent : "center",
    },
    title : {
        fontWeight : "bold",
        fontSize : 20,
        letterSpacing : 1
    },
    icon : {
        position : "absolute",
        left : 16
    },
    headerImage : {
        height : 26,
        width : 26,
        marginHorizontal : 10
    },
    headerTitle : {
        flexDirection : "row",
        padding : 5
    }
})