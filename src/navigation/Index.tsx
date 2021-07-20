import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions } from "@react-navigation/native";
import MainIndex from "@mainPage/MainIndex";
import Notice from "@drawerPage/Notice";
import UserInf from "@drawerPage/UserInf";
import LoginHistory from "@drawerPage/LoginHistory";
import SmartReceipt from "@drawerPage/SmartReceipt";
import Bookmark from "@drawerPage/Bookmark";
import InviteFriends from "@drawerPage/InviteFriends";
import Review from "@drawerPage/Review";
import Ranking from "@drawerPage/Ranking";
import CustomerService from "@drawerPage/CustomerService";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

const Index = ({ navigation }) => {

    let initPage = "MainIndex";

    return (
        <Stack.Navigator
            initialRouteName={initPage}
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerRight: () => {
                    return (
                        <View style={{ marginRight: 10 }}>
                            <Icon
                                name="menu"
                                type="feather"
                                color="#ffffff"
                                onPress={() => {
                                    navigation.dispatch(DrawerActions.openDrawer());
                                }}
                            />
                        </View>
                    );
                },
                headerTitleStyle: {
                    fontSize: 17,
                },
            }}
        >
            <Stack.Screen name="MainIndex" component={MainIndex} options={{ headerShown: false }} />
            <Stack.Screen name="Notice" component={Notice} options={{ headerTitle: "공지사항" }} />
            <Stack.Screen name="UserInf" component={UserInf} options={{ headerTitle: "내 정보" }} />
            <Stack.Screen name="LoginHistory" component={LoginHistory} options={{ headerTitle: "로그인 내역" }} />
            <Stack.Screen name="SmartReceipt" component={SmartReceipt} options={{ headerTitle: "스마트 영수증" }} />
            <Stack.Screen name="Bookmark" component={Bookmark} options={{ headerTitle: "즐겨찾는 매장" }} />
            <Stack.Screen name="InviteFriends" component={InviteFriends} options={{ headerTitle: "친구초대" }} />
            <Stack.Screen name="Review" component={Review} options={{ headerTitle: "앱 리뷰쓰기" }} />
            <Stack.Screen name="Ranking" component={Ranking} options={{ headerTitle: "노래순위" }} />
            <Stack.Screen name="CustomerService" component={CustomerService} options={{ headerTitle: "고객센터" }} />
        </Stack.Navigator>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
    },
});
