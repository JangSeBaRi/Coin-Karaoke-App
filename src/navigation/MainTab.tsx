import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "@mainPage/Home";
import Location from "@mainPage/Location";
import Contest from "@mainPage/Contest";
import Coupon from "@mainPage/Coupon";
import { Icon } from "react-native-elements";

const Tab = createMaterialTopTabNavigator();

const MainTab = ({ navigation }) => {
    // const [xxx, setXxx] = useState(0);

    // useEffect(() => {
    //     console.log(xxx)
    // },[])

    return (
        <Tab.Navigator
            // screenOptions={({ route }) => ({
            //     tabBarIcon: ({ focused, color, size }) => {
            //         if (route.name === "Home") {
            //             return <Icon name="download" type="feather" size={size} color={color} />;
            //         } else if (route.name === "Location") {
            //             return <Icon name="download" type="feather" size={size} color={color} />;
            //         } else if (route.name === "Contest") {
            //             return <Icon name="download" type="feather" size={size} color={color} />;
            //         } else if (route.name === "Coupon") {
            //             return <Icon name="download" type="feather" size={size} color={color} />;
            //         }
            //     },
            // })}
            // swipeEnabled={false}
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#F79601",
                inactiveTintColor: "#000000",
                style: {
                    backgroundColor: "#ffffff",
                    // borderTopWidth: 0,
                    // borderTopColor: "transparent",
                    // elevation: 0,
                    // shadowColor: "#5bc4ff",
                    // // shadowOpacity: 0,
                    // // // shadowOffset: {
                    // // //     height: 0,
                    // // // },
                    // // // shadowRadius: 0,
                },
                labelStyle: {
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: "bold",
                },
                indicatorStyle: {
                    borderBottomColor: "#F79601",
                    borderBottomWidth: 4,
                    // opacity : 0
                },
                // indicatorStyle: {
                //     height: null,
                //     top: 0,
                //     backgroundColor: "#ffffff",
                // },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "홈",
                }}
            />
            <Tab.Screen
                name="Location"
                component={Location}
                options={{
                    tabBarLabel: "노래방 찾기",
                }}
            />
            {/* <Tab.Screen
                name="Contest"
                component={Contest}
                options={{
                    tabBarLabel: "노래 대회",
                }}
            />
            <Tab.Screen
                name="Coupon"
                component={Coupon}
                options={{
                    tabBarLabel: "쿠폰함",
                }}
            /> */}
        </Tab.Navigator>
    );
};

export default MainTab;
