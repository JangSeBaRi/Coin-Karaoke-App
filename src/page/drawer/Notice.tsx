import React from "react";
import { View, Text } from "react-native";
import { GoBack } from "@utils/BackPress";

const Notice = ({ navigation }) => {
    // 뒤로가기 버튼
    GoBack(navigation);

    return (
        <View>
            <Text>공지사항</Text>
        </View>
    );
};

export default Notice;
