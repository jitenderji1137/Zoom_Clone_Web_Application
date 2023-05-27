import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const items = [
    {
        id:1,
        name:"video-camera",
        title:"New Meeting",
        customColor:"#FF751F"
    },
    {
        id:2,
        name:"plus-square",
        title:"Join",
        customColor:"blue"
    },
    {
        id:3,
        name:"calendar",
        title:"Schedule",
        customColor:"blue"
    },
    {
        id:4,
        name:"upload",
        title:"Share Screen",
        customColor:"blue"
    }
];
function MenuButton( {navigation} ) {
    return (
        <View style={Styles.container}>
            {items.map((item) =>
                <View style={Styles.buttonContainer} key={item.id}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Room")}} style={{...Styles.button,backgroundColor:item.customColor}}>
                        <FontAwesome name={item.name} size={23} color={"#efefef"} />
                    </TouchableOpacity>
                    <Text style={Styles.menuText}>{item.title}</Text>
                </View>  
            )}
        </View>
    )
}

export default MenuButton
const Styles = StyleSheet.create({
    container:{
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: "#1f1f1f",
        borderBottomWidth:1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonContainer:{
        alignItems: 'center',
        flex: 1
    },
    menuText:{
        color: "#858585",
        fontSize: 12,
        paddingTop:10,
        fontWeight:"600"
    },
    button:{
        width: 50,
        height: 50,
        borderRadius :15,
        display: "flex",
        justifyContent : "center",
        alignItems : "center"
    }
});