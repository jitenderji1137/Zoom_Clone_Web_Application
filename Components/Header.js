import React from 'react'
import { View , Text ,StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
function Header() {
    return (
    <View style={Styles.container}>
        <Entypo name="notification" size={30} color="#efefef" />
        <Text style={Styles.heading}>Meet & Chat</Text>
        <Entypo name="new-message" size={30} color="#efefef" />
    </View>
    )
}

export default Header
const Styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    heading:{
        color: '#efefef',
        fontSize: 20,
        fontWeight: "700"
    }
})