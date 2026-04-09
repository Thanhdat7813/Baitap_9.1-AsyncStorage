import React, { useEffect, useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "./screens/LoginScreen";
import MainTabs from "./navigation/MainTabs";

const Stack = createNativeStackNavigator();

// 👉 tạo context nhẹ (chỉ để truyền user + setUser)
export const AppContext = createContext();

function Root() {
  const { user } = React.useContext(AppContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Main" component={MainTabs} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {

      // ❌ XOÁ DÒNG clear này sau khi test xong
      // await AsyncStorage.clear();

      const data = await AsyncStorage.getItem("user");

      if (data) {
        setUser(JSON.parse(data));
      } else {
        setUser(null);
      }

      setLoading(false);
    };

    init();
  }, []);

  if (loading) return null;

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </AppContext.Provider>
  );
}
