import React, { useState, useEffect } from "react";
import Styled from "styled-components/native";
import Geolocation from "react-native-geolocation-service";

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Label = Styled.Text`
    font-size: 24px;
`;

interface ILocation {
    latitude: number;
    longitude: number;
}

const CurrentPosition = () => {
    const [location, setLocation] = useState<ILocation | undefined>(undefined);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
                // const { latitude, longitude } = position.coords;
                // setLocation({
                //     latitude,
                //     longitude,
                // });
                console.log(position)
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    return (
        <Container>
            {location ? (
                <>
                    <Label>Latitude: {location.latitude}</Label>
                    <Label>Latitude: {location.longitude}</Label>
                </>
            ) : (
                <Label>Loading...</Label>
            )}
        </Container>
    );
};

export default CurrentPosition;
