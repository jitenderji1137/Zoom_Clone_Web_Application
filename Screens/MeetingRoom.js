import React ,{ useState , useEffect} from 'react'
import { View , Text , StyleSheet , TextInput, Alert, SafeAreaView ,TouchableOpacity} from "react-native";
import StartMeeting from '../Components/StartMeeting';
import { io } from "socket.io-client";
import { Camera } from "expo-camera"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const menueIcon = [
    {
        id:1,
        name:"microphone",
        title:"Mute",
        customColor:"#efefef"
    },
    {
        id:2,
        name:"video-camera",
        title:"Stop Video",
        customColor:"#efefef"
    },
    {
        id:3,
        name:"upload",
        title:"Share Content",
        customColor:"#efefef"
    },
    {
        id:4,
        name:"group",
        title:"Participants",
        customColor:"#efefef"
    }
];
let socket ;
function MeetingRoom() {
    const [name,setName] = useState();
    const [roomId,setRoomId] = useState();
    const [activeUsers,setActiveUsers] = useState();
    const [startCamera,setStartCamera] = useState(false);
    const startcamera = async()=>{
        const {status} = await Camera.requestCameraPermissionsAsync();
        if(status === "granted"){
            setStartCamera(true);
        }
        else{
            Alert.alert("Access denied")
        }
    }
    const joinRoom = ()=>{
        startcamera();
        socket.emit('join-room',{roomId:roomId,userName:name})
    }
    useEffect(()=>{
        const API_URL = "http://192.168.1.13:3001";
        socket = io(API_URL);
        socket.on("connection",()=>console.log("connected"));
        socket.on("all-user",user =>{
            console.log("Active users")
            console.log(user);
            setActiveUsers(user);
        })
    },[]);
    return (
        <View style={Styles.container}>
            {startCamera ? (
                <SafeAreaView style={{flex:1}}>
                    <View style={Styles.cameraContainer}>
                        <Camera type={"front"} style={{width:"100%",height:500}}></Camera>
                    </View>
                    <View style={Styles.menu}>
                        {menueIcon.map((item)=>
                            <TouchableOpacity style={Styles.tile} key={item.id}>
                                <FontAwesome name={item.name} size={24} color={"#efefef"}></FontAwesome>
                                <Text style={Styles.textTile}>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                        
                    </View>
                </SafeAreaView>
            ):(
            <StartMeeting name={name} setName={setName} roomId={roomId} setRoomId={setRoomId} joinRoom={joinRoom}/>
            )}
        </View>
    )
}

export default MeetingRoom
const Styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1
    },
    menu:{
        backgroundColor:"black",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    textTile:{
        color:"white",
        marginTop:10
    },
    tile:{
        justifyContent: "center",
        alignItems: "center",
        height:50,
        marginTop:15
    },
    cameraContainer:{
        flex:1,
        backgroundColor:"black",
        justifyContent: "center"
    }
});