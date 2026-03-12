import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import ExplorerScreen from "../screens/ExplorerScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs(){

  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Explorer" component={ExplorerScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
    </Tab.Navigator>
  )
}