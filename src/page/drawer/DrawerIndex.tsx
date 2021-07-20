import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import MaskedView from "@react-native-community/masked-view";
import { CommonActions } from "@react-navigation/native";

let photoSize = 75;

const DrawerIndex = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.3, backgroundColor: "black", padding: 15 }}>
                <View style={{ borderBottomWidth: 0.5, borderColor: "gray", paddingBottom: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                        <Icon name="bell" type="simple-line-icon" color="#ffffff" />
                        <MaskedView
                            style={styles.userMask}
                            maskElement={
                                // mask shape : style inline으로 적용
                                <View
                                    style={{
                                        width: photoSize,
                                        height: photoSize,
                                        marginTop: 0,
                                        marginLeft: 0,
                                        borderRadius: photoSize / 2,
                                        backgroundColor: "black",
                                    }}
                                />
                            }
                        >
                            <View style={{ width: photoSize, height: photoSize, backgroundColor: "#ffffff", alignItems: "center", justifyContent: "center" }}></View>
                        </MaskedView>
                        <Icon name="settings" type="simple-line-icon" color="#ffffff" />
                    </View>
                    <View style={{ alignItems: "center", marginTop: 15 }}>
                        <Text style={{ color: "#ffffff", fontSize: 16 }}>장세진님 반갑습니다!</Text>
                    </View>
                </View>
                <View style={{ marginTop: 15, paddingLeft: 10 }}>
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={{ borderWidth: 1, width: 30, height: 30, borderRadius: 15, borderColor: "#FBAF09", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ color: "#FBAF09" }}>₩</Text>
                                </View>
                                <Text style={{ marginLeft: 5, color: "#FBAF09", fontSize: 20 }}>0</Text>
                            </View>
                            <View style={{ borderWidth: 1, borderColor: "gray", justifyContent: "center", alignItems: "center", borderRadius: 7, padding: 5 }}>
                                <Text style={{ color: "gray" }}>페이충전</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={{ borderWidth: 1, width: 30, height: 30, borderRadius: 15, borderColor: "gray", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ color: "gray" }}>M</Text>
                                </View>
                                <Text style={{ marginLeft: 5, color: "gray", fontSize: 20 }}>0</Text>
                            </View>
                            <View style={{ borderWidth: 1, borderColor: "gray", justifyContent: "center", alignItems: "center", borderRadius: 7, padding: 5 }}>
                                <Text style={{ color: "gray" }}>마일리지</Text>
                            </View>
                        </View>
                    </View>
                    <View></View>
                </View>
            </View>
            <View style={{ flex: 0.7, backgroundColor: "#FAFAFA" }}>
                <View style={{ height: "45%", backgroundColor: "white" }}>
                    <View style={{ flexDirection: "row", height: `${100 / 3}%`, borderBottomWidth: 0.5, borderColor: "#E7E7E7" }}>
                        <TouchableOpacity
                            style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center" }}
                            onPress={() => {
                                navigation.dispatch(
                                    CommonActions.navigate({
                                        name: "Notice",
                                    })
                                );
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>공지사항</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center", borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: "#E7E7E7" }}
                            onPress={() => {
                                navigation.dispatch(
                                    CommonActions.navigate({
                                        name: "UserInf",
                                    })
                                );
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>내 정보</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center" }}
                            onPress={() => {
                                navigation.dispatch(
                                    CommonActions.navigate({
                                        name: "LoginHistory",
                                    })
                                );
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>로그인 내역</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", height: `${100 / 3}%`, borderBottomWidth: 0.5, borderColor: "#E7E7E7" }}>
                        <TouchableOpacity
                            style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center" }}
                            onPress={() => {
                                navigation.dispatch(
                                    CommonActions.navigate({
                                        name: "SmartReceipt",
                                    })
                                );
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>스마트 영수증</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center", borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: "#E7E7E7" }}
                            onPress={() => {
                                navigation.dispatch(
                                    CommonActions.navigate({
                                        name: "Bookmark",
                                    })
                                );
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>즐겨찾는 매장</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center" }}
                            onPress={() => {
                                navigation.dispatch(
                                    CommonActions.navigate({
                                        name: "InviteFriends",
                                    })
                                );
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>친구초대</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", height: `${100 / 3}%`, borderBottomWidth: 0.5, borderColor: "#E7E7E7" }}>
                        <TouchableOpacity
                            style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center" }}
                            onPress={() => {
                                navigation.dispatch(
                                    CommonActions.navigate({
                                        name: "Review",
                                    })
                                );
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>앱 리뷰쓰기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center", borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: "#E7E7E7" }}
                            onPress={() => {
                                navigation.dispatch(
                                    CommonActions.navigate({
                                        name: "Ranking",
                                    })
                                );
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>노래순위</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center" }}
                            onPress={() => {
                                navigation.dispatch(
                                    CommonActions.navigate({
                                        name: "CustomerService",
                                    })
                                );
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>고객센터</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 10, flexDirection: "row", backgroundColor: "white", height: "15%" }}>
                    <TouchableOpacity style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center" }}>
                        <Icon name="facebook" type="entypo" color="#46619B" size={40} />
                        <Text style={{ fontSize: 12 }}>페이스북</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../../assets/instagram.jpg")} style={{ width: 38, height: 38 }} />
                        <Text style={{ fontSize: 12, top: 2 }}>인스타그램</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: `${100 / 3}%`, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 12 }}></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    userMask: {
        width: photoSize,
        height: photoSize,
    },
});

export default DrawerIndex;
