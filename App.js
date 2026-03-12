import React,{useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {AuthProvider,AuthContext} from "./context/AuthContext";
import LoginScreen from "./screens/LoginScreen";
import MainTabs from "./navigation/MainTabs";

const Stack = createNativeStackNavigator();

function Root(){

  const {user} = useContext(AuthContext)

  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {
        user ?
        <Stack.Screen name="Main" component={MainTabs}/>
        :
        <Stack.Screen name="Login" component={LoginScreen}/>
      }
    </Stack.Navigator>
  )
}

export default function App(){
  return(
    <AuthProvider>
      <NavigationContainer>
        <Root/>
      </NavigationContainer>
    </AuthProvider>
  )
}