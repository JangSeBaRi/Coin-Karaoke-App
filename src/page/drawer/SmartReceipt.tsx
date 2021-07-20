import React from "react";
import { View, Text } from "react-native";
import { GoBack } from "@utils/BackPress";

const SmartRecipt = ({ navigation }) => {
    // 뒤로가기 버튼
    GoBack(navigation);

    return (
        <View>
            <Text>스마트 영수증</Text>
        </View>
    );
};

export default SmartRecipt;
