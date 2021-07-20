import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { StatusBar, View, Text, Platform } from "react-native";
import { Icon } from "react-native-elements";
import MainTab from "@navigation/MainTab";

const MainIndex = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                height: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
            }}
        >
            <StatusBar
                barStyle="light-content"
                // dark-content, light-content and default
                backgroundColor="#000000"
                //Background color of statusBar only works for Android
                translucent={false}
                //allowing light, but not detailed shapes
                networkActivityIndicatorVisible={true}
            />
            <View style={{ backgroundColor: "#000000", padding: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <Text style={{ color: "white" }}>노래방 어플 로고</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Icon name="apple-pay" type="fontisto" color="#F79601" />
                    <Icon name="calendar-check-o" type="font-awesome" color="#ffffff" containerStyle={{ marginHorizontal: 15 }} />
                    <Icon
                        name="menu"
                        type="feather"
                        color="#ffffff"
                        onPress={() => {
                            navigation.dispatch(DrawerActions.openDrawer());
                        }}
                    />
                </View>
            </View>
            <MainTab />
        </View>
    );
};

export default MainIndex;
