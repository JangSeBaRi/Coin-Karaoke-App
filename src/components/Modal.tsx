import React, { forwardRef, useImperativeHandle, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import ModalLayer from "react-native-modal";

interface ModalProps {
    title: String;
    children: any;
}

const Modal = forwardRef((props: ModalProps, ref) => {
    const { title, children } = props;

    // 모달 활성화 유무
    const [isModalVisible, setModalVisible] = useState(false);

    // 모달 활성화 함수
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    // 부모인자에서 모달 활성화 시키기위한 함수생성
    useImperativeHandle(ref, () => ({
        toggleModal() {
            setModalVisible(!isModalVisible);
        },
    }));

    return (
        <ModalLayer style={styles.modalContainer} isVisible={isModalVisible} animationType="slide" onRequestClose={toggleModal}>
            <View style={styles.modalContents}>
                <View style={styles.modalHeader}>
                    <Text style={styles.title}>{title}</Text>
                    <Icon name="close" type="antdesign" color="#ffffff" containerStyle={styles.close} onPress={toggleModal} />
                </View>
                {children}
            </View>
        </ModalLayer>
    );
});

export default Modal;

const styles = StyleSheet.create({
    modalContainer: {
        margin: 0,
        justifyContent: "flex-end",
    },
    modalContents: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
    },
    modalHeader: {
        backgroundColor: "black",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
    close: {
        position: "absolute",
        right: 10,
    },
});
