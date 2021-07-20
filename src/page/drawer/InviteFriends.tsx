import React from "react";
import { View, Text } from "react-native";
import { GoBack } from "@utils/BackPress";

const InviteFriends = ({ navigation }) => {
    // 뒤로가기 버튼
    GoBack(navigation);

    return (
        <View>
            <Text>친구초대</Text>
        </View>
    );
};

export default InviteFriends;
