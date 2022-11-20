import { View, StyleSheet, Text, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import TopIconHomePage from "../components/cards/TopIconHomePage";

function HomePage() {
    const [loaded] = useFonts({
        SansCasual: require("../../assets/fonts/RecursiveSansCslSt-Regular.ttf"),
        SansCasualMedium: require("../../assets/fonts/RecursiveSansCslSt-Med.ttf"),
        SansCasualBold: require("../../assets/fonts/RecursiveSansCslSt-Bold.ttf"),
    });
    if (!loaded) {
    return <AppLoading />;
    }

    return(
        <View style={styles.container}>
            <TopIconHomePage/>
            <View style={styles.header}>
                <View style={styles.textBox}>
                    <Text style={[ styles.headerText, styles.featureProduct ]}>Sản phẩm nổi bật</Text>
                    <Text style={[ styles.headerText, styles.title ]}>Nguồn Cội - Tái Bản 2022</Text>
                    <Text style={[ styles.headerText, styles.author ]}>Dan Brown</Text>
                </View>
                <View style={styles.headerImage}>
                    <Image  source={require("../../assets/images/NguonCoi.png")}></Image>
                </View>
                <View style={styles.backgroundImage}>
                    <Image source={require("../../assets/icons/SanPhamNoiBat.png")}></Image>
                </View>
            </View>

            
        </View>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginHorizontal: 30,
        marginTop: 20,
        backgroundColor: '#B03131',
        borderRadius: 30,
        height: 180,
        flexDirection: 'row'
    },
    textBox: {
        marginLeft: 20,
        width: '50%',
        flexDirection: 'column'
    },
    headerText: {
        color: '#FBFBFB',
        marginTop: 20,
        fontFamily: 'SansCasual',
    },
    featureProduct: {
        fontSize: 10,
        lineHeight: 12
    },
    title: {
        fontSize: 18,
        lineHeight: 22
    },
    author: {
        fontSize: 13,
        lineHeight: 16,
        alignItems: 'flex-end'
    },
    headerImage: {
        marginTop: 10,
        zIndex: 1
    },
    backgroundImage: {
        position: 'absolute',
        right: 0
    }

});