import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"


export default function Button({clickHandler,title}){

    return (
        <TouchableOpacity style={styles.wrapper} onPress={clickHandler}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize : 20,
        padding : 4,
        textTransform : "capitalize",
        color : "white"
    },
    wrapper : {
        borderRadius : 5,
        backgroundColor : "#f01d71",
        borderWidth: 1,
        justifyContent : "center",
        alignItems: 'center',
    }
})