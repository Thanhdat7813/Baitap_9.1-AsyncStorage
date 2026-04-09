import React,{useState,useContext} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppContext} from "../App";

export default function LoginScreen(){

  const {setUser} = useContext(AppContext);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async ()=>{

    if(email==="admin@gmail.com" && password==="123456"){

      const user = {
        name:"Thanh Dat",
        job:"Mobile developer"
      };

      await AsyncStorage.setItem("user", JSON.stringify(user));

      setUser(user);

    }else{
      alert("Sai tài khoản hoặc mật khẩu");
    }
  }

  return(

    <View style={styles.container}>

      <Text style={styles.title}>Sign In</Text>

      <Text>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        onChangeText={setEmail}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={{color:"#fff"}}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.google}>
          <Text>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebook}>
          <Text style={{color:"#fff"}}>Facebook</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

container:{
 flex:1,
 justifyContent:"center",
 padding:20
},

title:{
 fontSize:26,
 fontWeight:"bold",
 marginBottom:20,
 textAlign:"center"
},

input:{
 borderWidth:1,
 borderColor:"#ccc",
 padding:12,
 borderRadius:5,
 marginBottom:15
},

button:{
 backgroundColor:"#ffa500",
 padding:15,
 alignItems:"center",
 borderRadius:5
},

or:{
 textAlign:"center",
 marginTop:20,
 marginBottom:10
},

socialRow:{
 flexDirection:"row",
 justifyContent:"space-between"
},

google:{
 borderWidth:1,
 padding:12,
 width:"48%",
 alignItems:"center"
},

facebook:{
 backgroundColor:"#3b5998",
 padding:12,
 width:"48%",
 alignItems:"center"
}

});
