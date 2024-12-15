import React, { createContext, useContext, useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthMethod from "./screens/Guests/AuthMethod";

import { StatusBar } from "react-native";
import Welcome from "./screens/Guests/Welcome";
import Register from "./screens/Guests/Register";
import Welcomethree from "./screens/Guests/Welcomethree";
import Welcometwo from "./screens/Guests/Welcometwo";
import Login from "./screens/Guests/Login";
import FullInfo from "./screens/Guests/FullInfo";
import PinKeypad from "./screens/Guests/Pin";
import Verifytype from "./screens/Guests/Verifytype";
import OTP from "./screens/Guests/OTP";
import Password from "./screens/Guests/Password";

import HomeInside from "./screens/Users/InsiderScreens.js/HomeInside";
import ProfileInsider from "./screens/Users/InsiderScreens.js/ProfileInsider";
import Messages from "./screens/Users/Messages";
import CourseInside from "./screens/Users/InsiderScreens.js/CourseInsider";
import Toast from "react-native-toast-message";
import MessageInsider from "./screens/Users/InsiderScreens.js/MessageInsider";
import TransInsider from "./screens/Users/InsiderScreens.js/TransInsider";
import { AuthContext, AuthProvider } from "./VAUTH/Auth";
import adm from "./screens/Guests/ADMINS";
import Phone from "./screens/Guests/Phone";
import AdminLogin from "./screens/Guests/AdminLogin";
// import AddCourse from './screens/Users/Major/Tas';
function Tabs() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const { user,  loading} = useContext(AuthContext);
  const [isload, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: "white", height: "100%" }}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          hidden={false}
          translucent={false}
          networkActivityIndicatorVisible={false}
        />
        {/* <Image source={require("./assets/logo.png")} /> */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator
            style={{ height: "80%" }}
            size="large"
            color="#007bff"
          />
        </View>
      </View>
    );
  }
  return (
    <>
      <NavigationContainer>
        {Object.keys(user).length !=0 ? (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "location" : "location-outline";
                } else if (route.name === "Explore") {
                  iconName = focused ? "location" : "location-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#007AFF",
              tabBarInactiveTintColor: "#202244",
              tabBarShowLabel: true,
              headerShown: false,
              showLabel: false,
              tabBarStyle: {
                backgroundColor: "#F5F9FF",
              },
            })}
          >
            {}

            <Tab.Screen
              name="Home"
              component={HomeInside}
              options={({ route }) => ({
                tabBarIcon: ({ focused, size }) => (
                  <Image
                    source={
                      focused
                        ? require("./assets/download2.png")
                        : require("./assets/download.png")
                    }
                    style={{ width: size, height: size }}
                  />
                ),
                tabBarLabel: "HOME", // Specify the label text here
                labelStyle: {
                  fontSize: 14, // Adjust the font size here as desired
                },
              })}
            />

            <Tab.Screen
              name="CourseInsider"
              component={CourseInside}
              options={({ route }) => ({
                tabBarIcon: ({ focused, size }) => (
                  <Image
                    source={
                      focused
                        ? require("./assets/cos2.png")
                        : require("./assets/cos.png")
                    }
                    style={{ width: 28, height: 33 }}
                  />
                ),
                tabBarLabel: "AMASOMO",
                labelStyle: {
                  fontSize: 14,
                },
              })}
            />

            <Tab.Screen
              name="Messages"
              component={MessageInsider}
              options={({ route }) => ({
                tabBarIcon: ({ focused, size }) => (
                  <Image
                    source={
                      focused
                        ? require("./assets/mes2.png")
                        : require("./assets/mes.png")
                    }
                    style={{ width: 28, height: 35 }}
                  />
                ),
                tabBarLabel: "UBUTUMWA",
                labelStyle: {
                  fontSize: 14,
                },
              })}
            />
            <Tab.Screen
              name="Pay"
              component={TransInsider}
              options={({ route }) => ({
                tabBarIcon: ({ focused, size }) => (
                  <Image
                    source={
                      focused
                        ? require("./assets/pay2.png")
                        : require("./assets/pay.png")
                    }
                    style={{ width: 28, height: 27 }}
                  />
                ),
                tabBarLabel: "AMAFARANGA",
                labelStyle: {
                  fontSize: 14,
                },
              })}
            />

            <Tab.Screen
              name="ProfileInsider"
              component={ProfileInsider}
              options={({ route }) => ({
                tabBarIcon: ({ focused, size }) => (
                  <Image
                    source={
                      focused
                        ? require("./assets/acc.png")
                        : require("./assets/acc2.png")
                    }
                    style={{ width: 28, height: 28 }}
                  />
                ),
                tabBarLabel: "KONTE",
                labelStyle: {
                  fontSize: 14,
                },
              })}
            />
          </Tab.Navigator>
        ) : (
          <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Welcome" component={Welcome} />

              <Stack.Screen name="FullInfo" component={FullInfo} />

              <Stack.Screen name="Password" component={Password} />

              <Stack.Screen name="OTP" component={OTP} />

              <Stack.Screen name="VerifyType" component={Verifytype} />
              <Stack.Screen name="Admin" component={adm} />
              <Stack.Screen name="AuthMethod" component={AuthMethod} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Welcomethree" component={Welcomethree} />
              <Stack.Screen name="Welcometwo" component={Welcometwo} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Phone" component={Phone} />
              <Stack.Screen name="AdminLogin" component={AdminLogin} />
              <Stack.Screen name="Pin" component={PinKeypad} />
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <>
      <AuthProvider>
        <Tabs />
      </AuthProvider>
    </>
  );
}
// exp://192.168.1.66:19000
