import React from "react";
import { View, Text, ScrollView } from "react-native";
import { container } from "@style/form";

const Contest = ({ navigation }) => {
    return (
        <View style={container}>
            <ScrollView>
                <View>
                    <Text
                        style={{ fontSize: 40 }}
                    >
                        λΈλ λν
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Contest;
