import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Platform } from "react-native";
import { Icon } from "react-native-elements";
import WebView from "react-native-webview";
import Modal from "@components/Modal";
import * as Indicator from "react-native-indicators";
import Constants from "expo-constants";
import * as Locat from "expo-location";

const Location = ({ navigation }) => {
    const modalRef = useRef();
    const modalRef_local = useRef();
    const [idx, setIdx] = useState(0);
    const [city, setCity] = useState("서울");
    const [isIndicator, setIsIndicator] = useState(false);
    const [cityQuery, setCityQuery] = useState("");

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const searchCurrentLocation = async () => {
        if (Platform.OS === "android" && !Constants.isDevice) {
            alert("Android 에뮬레이터의 스낵에서는 작동하지 않습니다. 장치에서 사용해 보십시오!");
            return;
        }
        let { status } = await Locat.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            alert("위치에 대한 접근권한이 거부되었습니다.");
            return;
        }

        let location = await Locat.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
    };

    const localGovernment = {
        서울: [
            "강남/역삼/삼성/논현",
            "서초/신사/방배",
            "잠실/신천(잠실새내)",
            "영등포/여의도",
            "신림/서울대/사당/동작",
            "천호/길동/둔촌",
            "화곡/까치산/양천/목동",
            "구로/금천/오류/신도림",
            "신촌/홍대/합정",
            "연신내/불광/응암",
            "종로/대학로/동묘앞역",
            "성신여대/성북/월곡",
            "이태원/용산/서울역/명동/회현",
            "동대문/을지로/충무로/신당/약수",
            "화기/고려대/청량리/신설동",
            "장안동/답십리",
            "건대/군자/구의",
            "왕십리/성수/금호",
            "수유/미아",
            "상봉/중랑/면목",
            "태릉/노원/도봉/창동",
        ],
        경기: [
            "수원 인계/권선/영통",
            "수원역/구운/장안/세류",
            "안양/평촌/인덕원/과천",
            "성남/분당/위례",
            "용인",
            "동탄/화성/오산/병점",
            "하남/광주/여주/이천",
            "안산 중앙역",
            "안산 고잔/상록수/선부동/월피동",
            "군포/의왕/금정/산본",
            "시흥",
            "광명",
            "평택/송탄/안성",
            "부천",
            "일산/고양",
            "파주",
            "김포",
            "의정부",
            "구리",
            "남양주",
            "포천",
            "양주/동두천/연천",
            "양평",
            "가평/청평",
            // "제부도/대부도",
        ],
        인천: [
            "부평",
            "구월",
            "서구(석남,서구청,검단)",
            "계양(작전,경인교대)",
            "주안",
            "송도/연수",
            "인천공항/을왕리",
            "중구(월미도,차이나타운,신포,동인천)",
            "강화/옹진",
            "동암/간석",
            "남동구(소래,만수)",
            "용현/숭의/도화/동구",
        ],
        강원: ["춘천/강촌", "원주", "경포대/사천/주문진/정동진", "강릉역/교동/옥계", "영월/정선", "속초/고성", "양양(서피비치,낙산)", "동해/삼척/태백", "평창", "홍천/횡성", "화천/철원/인제/양구"],
        제주: ["제주시", "서귀포시", "하귀/애월/한림/협재"],
        대전: ["유성구", "중구(은행,대흥,선화,유천)", "동구(용전,복합터미널)", "서구(둔산,용문,월평)", "대덕구(중리,신탄진)"],
        충북: ["청주 흥덕구/서원구(청주 터미널)", "청주 상당구/청원구(청주 국제공항)", "충주/수안보", "제천/진천/음성/단양", "보은/옥천/괴산/증평/영동"],
        "충남/세종": ["천안 서북구", "천안 동남구", "아산", "공주/동학사/세종", "계룡/금산/논산", "예산/홍성", "태안/안면도/서산", "당진", "보령/대천해수욕장", "서천/부여"],
        부산: [
            "해운대/센텀시티/재송",
            "송정/기장/정관",
            "광안리/수영",
            "경성대/디연/용호동/문현",
            "서면/양정/초읍/부산시민공원",
            "남포동/중앙동/태종대/송도/영도",
            "부산역/범일동/부산진역",
            "연산/토곡",
            "동래/사직/온천장/부산대/구서",
            "사상(경진철)/엄궁/학장",
            "덕천/화명/만덕/구포(구포역,KTX역)",
            "하단/명지/김해공항/다대포/강서/신호/괴정/지사",
        ],
        울산: ["남구/중구(삼산,성남,무거,신정)", "동구/북구/울주군(일산,진장,진하,KTX역,영남알프스)"],
        경남: [
            "창원 상남동/용호동/중앙동/창원시청",
            "창원 명서동/봉곡동/팔용동/북면온천/창원종합버스터미널",
            "마산",
            "진해",
            "김해/장유",
            "양산/밀양",
            "진주",
            "거제/통영/고성",
            "사천/남해",
            "하동/산청/함양",
            "거창/함안/창녕/합천/의령",
        ],
        대구: [
            "동성로/서문시장/대구시청/삼덕동/교동/종로",
            "대구역/칠성시장/경북대/엑스코/칠곡지구/태전동/금호지구",
            "동대구역/고속버스터미널/신천동/신암동",
            "대구공항/혁신도시/동촌유원지/팔공산/이시아폴리스",
            "수성못/범어/라이온즈파크/월드컵경기장/앞산공원/대명동/봉덕동",
            "북부정류장/이현공단/평리동/내당동/비산동/원대동",
            "두류공원/이월드/광장코아/서부정류장/본리동/죽전동",
            "성서/계명대/성서공단/상인동/달성군/가창/현풍/논공",
        ],
        경북: [
            "포항/남구(시청,시외버스터미널,구룡포,쌍사,문덕,오천)",
            "포항/북구(영일대,죽도시장,여객터미널,송도)",
            "경주(보문단지,황리단길,불국사,양남,감포,안강)",
            "구미",
            "경산(영남대,대구대,갓바위,하양,진량,자인)",
            "안동(경북도청,하회마을)",
            "영천/청도",
            "김천/칠곡/성주",
            "문경/상주/영주/예천/군위/의성/봉화",
            "울진/영덕/청송",
            "울릉도",
        ],
        광주: ["상무지구/금호지구/유스퀘어/서구", "첨단지구/하남지구/송정역/광산구", "충장로/대인시장/국립아시아문화전당/동구/남구", "광주역/기아챔피언스필드/전대사거리/북구"],
        전남: ["여수", "순천", "광양", "목포/무안/영암/신안", "나주/함평/영광/장성", "담양/곡성/화순/구례", "해남/완도/진도/강진/장흥/보성/고흥"],
        "전주/전북": ["전주 덕진구", "전주 완산구/완주", "군산", "익산", "남원/임실/순창/무주/진안/장수", "정읍/부안/김제/고창"],
    };

    const couponStatus = ["지역", "지하철", "지도 검색"];

    useEffect(() => {
        console.log(cityQuery);
    }, [cityQuery]);
    // useEffect(() => {
    //     console.log(city);
    // }, [city]);
    

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10, backgroundColor: "#F3F3F3" }}>
                <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 5, borderColor: "#d9d9d9" }}>
                    {couponStatus.map((v, i) => {
                        return (
                            <TouchableOpacity
                                key={v}
                                style={{
                                    paddingVertical: 15,
                                    width: `${100 / couponStatus.length}%`,
                                    alignItems: "center",
                                    backgroundColor: idx == i ? "#FE9900" : "white",
                                    borderTopLeftRadius: i == 0 ? 5 : 0,
                                    borderBottomLeftRadius: i == 0 ? 5 : 0,
                                    borderTopRightRadius: i == couponStatus.length - 1 ? 5 : 0,
                                    borderBottomRightRadius: i == couponStatus.length - 1 ? 5 : 0,
                                    borderLeftWidth: i != 0 ? 1 : 0,
                                    borderColor: "#d9d9d9",
                                }}
                                // onPress={() => (i != 2 ? {setIdx(i)} : modalRef.current.toggleModal())}
                                onPress={
                                    i != 2
                                        ? () => setIdx(i)
                                        : () => {
                                            setIsIndicator(true);
                                            searchCurrentLocation();
                                            modalRef.current.toggleModal();
                                        }
                                }
                            >
                                {v == "지역" ? (
                                    <Icon name="compass-outline" type="ionicon" size={30} color={idx == i ? "white" : "black"} />
                                ) : v == "지하철" ? (
                                    <Icon name="subway-outline" type="ionicon" size={30} color={idx == i ? "white" : "black"} />
                                ) : (
                                    <Icon name="map-search-outline" type="material-community" size={30} color={idx == i ? "white" : "black"} />
                                )}
                                <Text
                                    style={{
                                        color: idx == i ? "white" : "black",
                                        marginTop: 5,
                                    }}
                                >
                                    {v}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
            {idx == 0 ? (
                <View style={{ flexDirection: "row", flex: 1, backgroundColor: "white" }}>
                    <ScrollView style={{ width: "30%" }} showsVerticalScrollIndicator={false}>
                        {Object.keys(localGovernment).map((v, i) => {
                            return (
                                <TouchableOpacity
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: v == city ? "white" : "#E4E4E4",
                                        width: "100%",
                                        borderTopWidth: i == 0 ? 0 : 1,
                                        borderColor: "#d9d9d9",
                                        height: 45,
                                        marginTop: -1,
                                    }}
                                    key={v}
                                    onPress={() => {
                                        setCity(v);
                                    }}
                                >
                                    <Text style={{ fontSize: 15, fontWeight: v == city ? "bold" : undefined, color: v == city ? "black" : "gray" }}>{v}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                    <ScrollView style={{ width: "70%" }}>
                        {localGovernment[city].map((v, idx) => {
                            let cityArray = Object.keys(localGovernment);
                            return (
                                <TouchableOpacity
                                    key={v}
                                    style={{ justifyContent: "center", width: "100%", height: 45, backgroundColor: "white", paddingHorizontal: 15, marginTop: -1 }}
                                    onPress={() => {
                                        setIsIndicator(true);
                                        let kkk = v.split("/");
                                        let xxx = "";
                                        for (var i = 0; i < kkk.length; i++) {
                                            xxx += city=='충남/세종' || '전주/전북' ? `id=${kkk[i].replace(/\((.*?)\)/g, '')} 코인노래방&` : `id=${city} ${kkk[i].replace(/\((.*?)\)/g, '')} 코인노래방&`;
                                            if (i == kkk.length - 1) {
                                                setCityQuery(xxx.substr(0, xxx.length - 1));
                                            }
                                        }
                                        modalRef_local.current.toggleModal();
                                    }}
                                >
                                    <Text>{v}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            ) : (
                <View style={{ flex: 1, backgroundColor: "white" }}></View>
            )}
            <Modal ref={modalRef} title={"지도 검색"}>
                {/* <WebView source={{ uri: "https://jjalrangmap.netlify.app/" }} onLoadEnd={() => setIsIndicator(false)} /> */}
                <WebView
                    source={{ uri: `https://jjalrangmap.netlify.app/sejin?lat=${latitude}&lng=${longitude}` }}
                    onLoadEnd={() => setIsIndicator(false)}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEnabled={false}
                    style={{ marginLeft: "-2.5%", marginTop: "-2.5%", width: "326%" }}
                />
                {isIndicator ? (
                    <View style={{ position: "absolute", width: "100%", height: "100%" }}>
                        <Indicator.UIActivityIndicator color="#FE9900" />
                    </View>
                ) : null}
            </Modal>
            <Modal ref={modalRef_local} title={"지역별 검색"}>
                <WebView
                    source={{ uri: `https://jjalrangmap.netlify.app/search?${cityQuery}` }}
                    onLoadEnd={() => setIsIndicator(false)}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEnabled={false}
                    style={{ marginLeft: "-2.5%", marginTop: "-2.5%", width: "326%" }}
                />
                {isIndicator ? (
                    <View style={{ position: "absolute", width: "100%", height: "100%" }}>
                        <Indicator.UIActivityIndicator color="#FE9900" />
                    </View>
                ) : null}
            </Modal>
        </View>
    );
};

export default Location;
