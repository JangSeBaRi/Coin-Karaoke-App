import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";
import { GoBack } from "@utils/BackPress";

const Bookmark = ({ navigation }) => {
    // 뒤로가기 버튼
    GoBack(navigation);
    

    return (
        <View>
            <Text>즐겨찾는 매장</Text>
        </View>
    );
};

export default Bookmark;
