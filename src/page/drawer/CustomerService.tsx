import React from "react";
import { View, Text } from "react-native";
import { GoBack } from "@utils/BackPress";

const CustomerService = ({ navigation }) => {
    // 뒤로가기 버튼
    GoBack(navigation);

    return (
        <View>
            <Text>고객센터</Text>
        </View>
    );
};

export default CustomerService;
