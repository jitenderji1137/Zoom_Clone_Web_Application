import React from 'react'
import { View , Text ,StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
function SearchBar() {
    return (
    <View style={Styles.container}>
        <Fontisto name='search' size={20} color={"#858585"} />
        <Text style={Styles.textSearchBar}>Search</Text>
    </View>
    )
}

export default SearchBar
const Styles = StyleSheet.create({
    container:{
        backgroundColor: "#333333",
        flexDirection: "row",
        paddingHorizontal: 10,
        height: 40,
        alignItems: "center",
        borderRadius: 10
    },
    textSearchBar:{
        color: "#858585",
        paddingLeft:10,
        fontSize:20
    }
});