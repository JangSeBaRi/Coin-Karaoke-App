import { CommonActions } from "@react-navigation/native";
import { useEffect } from "react";
import { BackHandler, ToastAndroid } from "react-native";

export const ExitApp = () => {
    useEffect(() => {
        let exitApp = false;
        const handleBackButton = () => {
            if (exitApp == undefined || !exitApp) {
                ToastAndroid.show("한번 더 누르시면 종료됩니다.", ToastAndroid.SHORT);
                exitApp = true;

                setTimeout(
                    () => {
                        exitApp = false;
                    },
                    2000 // 2초
                );
            } else {
                clearTimeout(
                    setTimeout(
                        () => {
                            exitApp = false;
                        },
                        2000 // 2초
                    )
                );
                exitApp = false;
                BackHandler.exitApp(); // 앱 종료
            }
            return true;
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton);
        return () => backHandler.remove();
    }, []);
};

export const GoBack = (navigation) => {
    useEffect(() => {
        const handleBackButton = () => {
            navigation.goBack();
            return true;
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton);
        return () => backHandler.remove();
    }, []);
};

// export const GoHome = (navigation) => {
//     const handleBackButton = () => {
//         navigation.dispatch(
//             CommonActions.navigate({
//                 name: "Home",
//             })
//         );
//         return true;
//     };
//     const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton);
//     return () => backHandler.remove();
// };
