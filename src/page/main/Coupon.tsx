import React, { useRef, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { container } from "@style/form";
import { Icon } from "react-native-elements";
import { MoneyRegex } from "@utils/MoneyRegex";
import Modal from "@components/Modal";
import { TextInput } from "react-native-gesture-handler";

const Coupon = ({ navigation }) => {
    const modalRef = useRef();
    const [miles, setMiles] = useState("");
    const [discountCoupon, setDiscountCoupon] = useState("");

    const textChange_miles = (e) => {
        setMiles(e);
    };

    const textChange_discountCoupon = (e) => {
        setDiscountCoupon(e);
    };

    let couponStatus = ["쿠폰 리스트", "보유중인 쿠폰"];
    let couponRegistor = ["마일리지 충전", "할인쿠폰 등록"];
    const [idx, setIdx] = useState(0);
    const couponList = [
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
        {
            title: "노래 아이템 3종",
            name: "데카론 M",
            endDate: "2021.06.29",
            remainTicket: 4023,
        },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
                <View
                    style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 10, borderBottomWidth: 0.5, borderColor: "#d9d9d9", paddingHorizontal: 15 }}
                >
                    <Text style={{ fontWeight: "bold" }}>
                        보유 쿠폰: <Text style={{ color: "red" }}>1장</Text>
                    </Text>
                    <TouchableOpacity
                        style={{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 15, alignItems: "center", justifyContent: "center", borderRadius: 5 }}
                        onPress={() => {
                            modalRef.current.toggleModal();
                        }}
                    >
                        <Text>쿠폰등록</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 15 }}>
                    <View style={{ backgroundColor: "skyblue", borderRadius: 10, height: 100 }}></View>
                </View>
                <View style={{ padding: 10, backgroundColor: "#F3F3F3" }}>
                    <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9" }}>
                        {couponStatus.map((v, i) => {
                            return (
                                <TouchableOpacity
                                    key={v}
                                    style={{
                                        paddingVertical: 15,
                                        width: `${100 / couponStatus.length}%`,
                                        alignItems: "center",
                                        backgroundColor: idx == i ? "#FE9900" : "white",
                                        borderTopLeftRadius: i == 0 ? 5 : 0,
                                        borderBottomLeftRadius: i == 0 ? 5 : 0,
                                        borderTopRightRadius: i == couponStatus.length - 1 ? 5 : 0,
                                        borderBottomRightRadius: i == couponStatus.length - 1 ? 5 : 0,
                                        borderLeftWidth: i != 0 ? 1 : 0,
                                        borderColor: "#d9d9d9",
                                    }}
                                    onPress={() => {
                                        setIdx(i);
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: idx == i ? "white" : "black",
                                        }}
                                    >
                                        {v}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
                    {couponList.map((v, i) => {
                        return (
                            <View key={i} style={{ marginTop: 15 }}>
                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderBottomWidth: 0,
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,
                                        borderColor: "#d9d9d9",
                                        backgroundColor: "#f3f3f3",
                                        alignItems: "center",
                                        paddingVertical: 10,
                                    }}
                                >
                                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{v.title}</Text>
                                </View>
                                <View style={{ height: 150, backgroundColor: "yellow", borderLeftWidth: 1, borderRightWidth: 1, borderColor: "#d9d9d9" }}>
                                    <View style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", position: "absolute", paddingHorizontal: 5 }}>
                                        <Text style={{ color: "white" }}>D-29</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderTopWidth: 0,
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10,
                                        borderColor: "#d9d9d9",
                                        backgroundColor: "#ffffff",
                                        padding: 15,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <View>
                                        <Text>{v.name}</Text>
                                        <Text style={{ color: "gray" }}>{`${v.endDate}까지 | ${MoneyRegex(v.remainTicket)}남음`}</Text>
                                    </View>
                                    <Icon
                                        name="download"
                                        type="feather"
                                        size={30}
                                        containerStyle={{ opacity: 0.3 }}
                                        onPress={() => {
                                            alert(`${v.title} 티켓 발급`);
                                        }}
                                    />
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
            <Modal ref={modalRef} title={"홈 모달"}>
                <View style={{ padding: 10, backgroundColor: "#F3F3F3" }}>
                    <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9" }}>
                        {couponRegistor.map((v, i) => {
                            return (
                                <TouchableOpacity
                                    key={v}
                                    style={{
                                        paddingVertical: 15,
                                        width: `${100 / couponStatus.length}%`,
                                        alignItems: "center",
                                        backgroundColor: idx == i ? "#FE9900" : "white",
                                        borderTopLeftRadius: i == 0 ? 5 : 0,
                                        borderBottomLeftRadius: i == 0 ? 5 : 0,
                                        borderTopRightRadius: i == couponStatus.length - 1 ? 5 : 0,
                                        borderBottomRightRadius: i == couponStatus.length - 1 ? 5 : 0,
                                        borderLeftWidth: i != 0 ? 1 : 0,
                                        borderColor: "#d9d9d9",
                                    }}
                                    onPress={() => {
                                        setIdx(i);
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: idx == i ? "white" : "black",
                                        }}
                                    >
                                        {v}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View style={{ paddingHorizontal: 15 }}>
                    <Text style={{ marginTop: 20 }}>{idx == 0 ? "마일리지 충전쿠폰 PIN입력" : "할인쿠폰 PIN입력"}</Text>
                    {idx == 0 ? (
                        <TextInput
                            value={miles}
                            onChangeText={textChange_miles}
                            placeholder={"충전쿠폰 PIN을 입력해 주세요"}
                            style={{ backgroundColor: "#F8F8F8", marginTop: 15, height: 45, paddingLeft: 15 }}
                        />
                    ) : (
                        <TextInput
                            value={discountCoupon}
                            onChangeText={textChange_discountCoupon}
                            placeholder={"보유하신 쿠폰 PIN을 입력해 주세요"}
                            style={{ backgroundColor: "#F8F8F8", marginTop: 15, height: 45, paddingLeft: 15 }}
                        />
                    )}
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <TouchableOpacity style={{ borderRadius: 5, paddingVertical: 15, backgroundColor: "#FE9900", alignItems: "center", width: "60%" }}>
                            <Text style={{ color: "white" }}>확인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Coupon;
