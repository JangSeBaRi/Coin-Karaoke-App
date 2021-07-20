import React, { useRef, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import { ExitApp } from "@utils/BackPress";
import Modal from "@components/Modal";
import { container } from "@style/form";
import Swiper from "react-native-swiper";
import { Icon } from "react-native-elements";
import Nearby from "@subMainPage/Nearby";
import UserKaraoke from "@subMainPage/UserKaraoke";
import MusicRank from "@subMainPage/MusicRank";
import Prepare from "@subMainPage/Prepare";
import UserTeam from "@subMainPage/UserTeam";
import AboutContest from "@subMainPage/AboutContest";
import News from "@subMainPage/News";
import Event from "@subMainPage/Event";

const Home = ({ navigation }) => {
    ExitApp();
    const modalRef = useRef();

    const [modalPage, setModalPage] = useState({
        title: "주변코노",
        component: <Nearby />,
    });

    const eventList = ["그랑사가 플레이시간 이벤트", "포탈2 플레이 이벤트", "짤랑 무료1시간 이벤트"];

    const squareLong = (Dimensions.get("window").width - 30 - 9) / 4;

    return (
        <ScrollView>
            <View style={container}>
                <Swiper autoplay={true} paginationStyle={{top: 265}} onTouchStart={() => console.log('우와')} style={{height: 250, marginTop: 15, }}>
                    <Image source={require("../../../assets/instagram.jpg")} style={{ width: "100%", height: "90%", borderRadius: 5 }} />
                    <Image source={require("../../../assets/adaptive-icon.png")} style={{ width: "100%", height: "90%", borderRadius: 5 }} />
                    <Image source={require("../../../assets/favicon.png")} style={{ width: "100%", height: "90%", borderRadius: 5 }} />
                    <Image source={require("../../../assets/icon.png")} style={{ width: "100%", height: "90%", borderRadius: 5 }} />
                    <Image source={require("../../../assets/instagram.jpg")} style={{ width: "100%", height: "90%", borderRadius: 5 }} />
                </Swiper>
                <View onTouchStart={() => console.log("네비게이션")} style={{marginTop: -13}}>
                    <TouchableOpacity style={{ marginTop: 30, padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: 7, backgroundColor: "#8966E6" }}>
                        <View>
                            <Text style={{ fontSize: 17, color: "white" }}>마일리지 무료 충전소</Text>
                            <Text style={{ color: "white" }}>마일리지 최대 173,653원</Text>
                        </View>
                        <Image source={require("../../../assets/adaptive-icon.png")} style={{ height: 80, width: 100 }} />
                    </TouchableOpacity>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <TouchableOpacity style={{ paddingHorizontal: 10, backgroundColor: "#6091EE", width: "58%", borderRadius: 5 }}>
                            <Text style={{ color: "white", marginTop: 10, fontSize: 16 }}>짤랑페이</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 20 }}>0</Text>
                                <View style={{ borderWidth: 1, paddingVertical: 3, paddingHorizontal: 8, alignItems: "center", justifyContent: "center", borderRadius: 5, borderColor: "white" }}>
                                    <Text style={{ color: "white", fontSize: 12 }}>결제</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 10, borderTopWidth: 1, borderColor: "white", marginBottom: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <View style={{ borderWidth: 1, width: 20, height: 20, borderRadius: 10, borderColor: "white", alignItems: "center", justifyContent: "center" }}>
                                            <Text style={{ color: "white", fontSize: 10 }}>M</Text>
                                        </View>
                                        <Text style={{ marginLeft: 5, color: "white" }}>0</Text>
                                    </View>
                                    <Text style={{ color: "white", fontSize: 12 }}>
                                        마일리지 <Icon name="arrow-right" type="simple-line-icon" color="white" size={8} />
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: "41%", marginLeft: "1%" }}>
                            <TouchableOpacity style={{ alignItems: "center", borderRadius: 5, paddingVertical: 10, backgroundColor: "#FE9900" }}>
                                <Icon name="qr-code-outline" type="ionicon" color="white" size={30} />
                                <Text style={{ color: "white" }}>QR코드 스캔</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1, borderColor: "#FE9900", justifyContent: "center", alignItems: "center", marginTop: "3%", paddingVertical: 10 }}>
                                <Text style={{ color: "#FE9900" }}>번호입력</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 30, borderRadius: 10, backgroundColor: "#FFB901", paddingHorizontal: 3, paddingBottom: 3 }}>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>나의 코인노래방 이용 내역</Text>
                            <Text style={{ color: "white", fontSize: 12, opacity: 0.8 }}>사용종료 시점 데이터 입니다.</Text>
                        </View>
                        <View style={{ borderRadius: 10, backgroundColor: "white", justifyContent: "center", alignItems: "center", paddingVertical: 30, marginTop: 15 }}>
                            <Text style={{ color: "#747474" }}>자주 이용하는 단골 코인노래방을 연동해 보세요.</Text>
                            <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: "#747474" }}>
                                <Text style={{ color: "#747474" }}>코인노래방 연동하는 방법</Text>
                            </TouchableOpacity>
                            <Icon name="refresh" type="font-awesome" color="#FFB901" size={20} containerStyle={{ position: "absolute", top: 8, right: 10 }} />
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>짤랑 코인노래방 이벤트</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#747474", fontSize: 12 }}>모두보기</Text>
                            </TouchableOpacity>
                        </View>
                        {eventList.map((v, i) => {
                            return (
                                <View key={i} style={{ marginTop: 15 }}>
                                    <View style={{ height: 150, backgroundColor: "#D9F424", borderWidth: 1, borderColor: "#d9d9d9", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}></View>
                                    <View
                                        style={{
                                            borderWidth: 1,
                                            borderTopWidth: 0,
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                            borderColor: "#d9d9d9",
                                            backgroundColor: "#ffffff",
                                            padding: 15,
                                        }}
                                    >
                                        <Text>{v}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                    <TouchableOpacity style={{ marginTop: 15, borderWidth: 1, borderRadius: 5, alignItems: "center", paddingVertical: 10 }}>
                        <Text>코인노래방 이벤트 더 확인하러 가기!</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 30 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>이번주 대회정보</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#747474", fontSize: 12 }}>모두보기</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 200, justifyContent: "center", alignItems: "center", backgroundColor: "#497271", borderRadius: 10, marginTop: 15 }}>
                            <Text style={{ color: "white" }}>대회 준비중 입니다.</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity
                            style={{ width: squareLong, height: squareLong, borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9", justifyContent: "center", alignItems: "center" }}
                            onPress={() => {
                                let newObj = { ...modalPage };
                                newObj = { title: "주변코노", component: <Nearby /> };
                                setModalPage(newObj);
                                modalRef.current.toggleModal();
                            }}
                        >
                            <Icon name="target" type="material-community" size={30} />
                            <Text>주변코노</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: squareLong, height: squareLong, borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9", justifyContent: "center", alignItems: "center" }}
                            onPress={() => {
                                let newObj = { ...modalPage };
                                newObj = { title: "MY 코노", component: <UserKaraoke /> };
                                setModalPage(newObj);
                                modalRef.current.toggleModal();
                            }}
                        >
                            <Icon name="mic-circle-outline" type="ionicon" size={30} />
                            <Text>MY 코노</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: squareLong, height: squareLong, borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9", justifyContent: "center", alignItems: "center" }}
                            onPress={() => {
                                let newObj = { ...modalPage };
                                newObj = { title: "노래순위", component: <MusicRank /> };
                                setModalPage(newObj);
                                modalRef.current.toggleModal();
                            }}
                        >
                            <Icon name="library-music" type="material" size={30} />
                            <Text>노래순위</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: squareLong, height: squareLong, borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9", justifyContent: "center", alignItems: "center" }}
                            onPress={() => {
                                let newObj = { ...modalPage };
                                newObj = { title: "준비페이지", component: <Prepare /> };
                                setModalPage(newObj);
                                modalRef.current.toggleModal();
                            }}
                        >
                            <Icon name="hammer-outline" type="ionicon" size={30} />
                            <Text>메뉴준비중</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 3, flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                        <TouchableOpacity
                            style={{ width: squareLong, height: squareLong, borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9", justifyContent: "center", alignItems: "center" }}
                            onPress={() => {
                                let newObj = { ...modalPage };
                                newObj = { title: "MY 팀", component: <UserTeam /> };
                                setModalPage(newObj);
                                modalRef.current.toggleModal();
                            }}
                        >
                            <Icon name="flag" type="simple-line-icon" size={30} />
                            <Text>MY팀</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: squareLong, height: squareLong, borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9", justifyContent: "center", alignItems: "center" }}
                            onPress={() => {
                                let newObj = { ...modalPage };
                                newObj = { title: "대회후기", component: <AboutContest /> };
                                setModalPage(newObj);
                                modalRef.current.toggleModal();
                            }}
                        >
                            <Icon name="pencil-square-o" type="font-awesome" size={30} />
                            <Text>대회후기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: squareLong, height: squareLong, borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9", justifyContent: "center", alignItems: "center" }}
                            onPress={() => {
                                let newObj = { ...modalPage };
                                newObj = { title: "코노소식", component: <News /> };
                                setModalPage(newObj);
                                modalRef.current.toggleModal();
                            }}
                        >
                            <Icon name="newspaper-outline" type="ionicon" size={30} />
                            <Text>코노뉴스</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: squareLong, height: squareLong, borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9", justifyContent: "center", alignItems: "center" }}
                            onPress={() => {
                                let newObj = { ...modalPage };
                                newObj = { title: "이벤트", component: <Event /> };
                                setModalPage(newObj);
                                modalRef.current.toggleModal();
                            }}
                        >
                            <Icon name="gift-outline" type="material-community" size={30} />
                            <Text>이벤트</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal ref={modalRef} title={modalPage.title}>
                {modalPage.component}
            </Modal>
        </ScrollView>
    );
};

export default Home;
