import React from 'react'
import { View , Text , StyleSheet} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const contactsMenueButtons = [
    {
        id:1,
        type:"star",
        name:"Jitender",
        photo:"https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png"
    },
    {
        id:2,
        type:"star",
        name:"Jitender",
        photo:"https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png"
    },
    {
        id:3,
        type:"star",
        name:"Jitender saini",
        photo:"https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png"
    },
    {
        id:4,
        type:"star",
        name:"Ravi",
        photo:"https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png"
    }
];
function ContactsMenu() {
    return (
    <View style={Styles.container}>
        {contactsMenueButtons.map((item)=>
        <View style={Styles.row} key={item.id}>
            <View style={Styles.starredIcons}>
                <AntDesign name={item.type} size={30} color="#efefef" />
            </View>
            <Text style={Styles.text}>{item.name}</Text>
        </View>
        )}
    </View>
    )
}

export default ContactsMenu
const Styles = StyleSheet.create({
    container:{

    },
    text:{
        color: "white",
        paddingLeft: 15,
        fontSize: 18,
    },
    row:{
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"

    },
    starredIcons:{
        backgroundColor: "#333333",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    image:{
        width: 55,
        height: 55,
        borderRadius: 20
    }
});