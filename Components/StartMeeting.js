import React from 'react'
import { View , Text , StyleSheet , TextInput} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
function StartMeeting({name,roomId,setName,setRoomId,joinRoom}) {
    return (
        <View style={Styles.startMeetingContainer}>
            <View style={Styles.info}>
                <TextInput style={Styles.textInput} value={name} onChangeText={text => setName(text)} placeholder='Enter Name' placeholderTextColor="#767476"/>
            </View>
            <View style={Styles.info}>
            <TextInput style={Styles.textInput} value={roomId} onChangeText={text => setRoomId(text)} placeholder='Enter Room ID' placeholderTextColor="#767476"/>
            </View>
            <View style={{alignItems:"center",backgroundColor:"#1c1c1c"}}>
                <TouchableOpacity onPress={()=>{joinRoom()}} style={Styles.startmeatingbutton}><Text style={{color:"white",fontWeight:"bold"}}>Start Meeting</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default StartMeeting
const Styles = StyleSheet.create({
    startMeetingContainer:{
        backgroundColor:"#1c1c1c",
        position: "relative",
        height: "100%"
    },
    info:{
        width:"100%",
        backgroundColor:"#373538",
        height: 50,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#484648",
        padding:12,
        justifyContent:"center",
    },
    textInput:{
        color:"white",
        fontSize:18,
        textDecorationLine:"none",
        textDecorationColor: 'transparent',
        textDecorationStyle: 'solid',
    },
    startmeatingbutton:{
        width:350,
        marginTop:20,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"#0470DC",
        height:50,
        borderRadius:15
    }
});