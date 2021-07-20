import React from "react";
import { View, Text } from "react-native";
import { GoBack } from "@utils/BackPress";

const Userinf = ({ navigation }) => {
    // 뒤로가기 버튼
    GoBack(navigation);

    return (
        <View>
            <Text>내 정보</Text>
        </View>
    );
};

export default Userinf;
