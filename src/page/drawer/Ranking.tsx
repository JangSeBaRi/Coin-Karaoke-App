import React from "react";
import { View, Text } from "react-native";
import { GoBack } from "@utils/BackPress";

const Ranking = ({ navigation }) => {
    // 뒤로가기 버튼
    GoBack(navigation);

    return (
        <View>
            <Text>노래순위</Text>
        </View>
    );
};

export default Ranking;
