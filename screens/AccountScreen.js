import React,{useContext} from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import {AuthContext} from "../context/AuthContext";

export default function AccountScreen(){

  const {user,logout} = useContext(AuthContext)

  return(
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}/>

      {/* INFO */}
      <View style={styles.info}>

        <Text style={styles.name}>{user.name}</Text>

        <Text style={styles.job}>{user.job}</Text>

        {/* DÒNG CHỮ THÊM BÊN DƯỚI */}
        <Text style={styles.subJob}>React Native developer</Text>

        {/* DESCRIPTION */}
        <Text style={styles.description}>
          I have above 5 years of experience in native
          mobile apps development, now i am learning
          React Native
        </Text>

        {/* SIGN OUT */}
        <TouchableOpacity
          style={styles.button}
          onPress={logout}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

container:{
 flex:1,
 backgroundColor:"#eee"
},

header:{
 width:"100%",
 height:150,
 backgroundColor:"#21a7d0"
},

info:{
 alignItems:"center",
 marginTop:40,
 paddingHorizontal:20
},

name:{
 fontSize:22,
 fontWeight:"bold",
 marginBottom:5
},

job:{
 color:"#21a7d0",
 fontSize:16
},

subJob:{
 fontSize:14,
 color:"#555",
 marginTop:3
},

description:{
 textAlign:"center",
 marginTop:15,
 color:"#777",
 lineHeight:20
},

button:{
 backgroundColor:"#ffa500",
 paddingVertical:10,
 paddingHorizontal:25,
 borderRadius:5,
 marginTop:20
},

buttonText:{
 color:"#fff",
 fontWeight:"bold"
}

});