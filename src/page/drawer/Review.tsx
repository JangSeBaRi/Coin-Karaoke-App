import React from "react";
import { View, Text } from "react-native";
import { GoBack } from "@utils/BackPress";

const Review = ({ navigation }) => {
    // 뒤로가기 버튼
    GoBack(navigation);

    return (
        <View>
            <Text>앱 리뷰쓰기</Text>
        </View>
    );
};

export default Review;
