import React from "react";
import { View, Text } from "react-native";
import { GoBack } from "@utils/BackPress";

const LoginHistory = ({ navigation }) => {
    // 뒤로가기 버튼
    GoBack(navigation);

    return (
        <View>
            <Text>로그인 내역</Text>
        </View>
    );
};

export default LoginHistory;
