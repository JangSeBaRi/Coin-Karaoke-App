import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";

export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const searchCurrentLocation = async () => {
        if (Platform.OS === "android" && !Constants.isDevice) {
            setErrorMsg("Oops, this will not work on Snack in an Android emulator. Try it on your device!");
            return;
        }
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            alert("위치에 대한 접근권한이 거부되었습니다.");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS === "android" && !Constants.isDevice) {
                setErrorMsg("Oops, this will not work on Snack in an Android emulator. Try it on your device!");
                return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = "Waiting..";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        console.log(location.coords.latitude, location.coords.longitude)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: "center",
    },
});
