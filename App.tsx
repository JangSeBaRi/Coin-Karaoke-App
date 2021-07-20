import "react-native-gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerIndex from "@drawerPage/DrawerIndex";
import Index from "@navigation/Index";

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType="front"
                drawerPosition="left"
                drawerContent={(props) => <DrawerIndex {...props} />}
                screenOptions={{ swipeEnabled: true }} // 스와이프 기능처리 활성화 여부 gestureEnabled: true  swipeEnabled: false
            >
                <Drawer.Screen name="Index" component={Index} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
