import { View, StyleSheet, Text } from "react-native";
import { AntDesign, Entypo  } from "@expo/vector-icons";

function TopIconHomePage() {
    return(
        <View style={styles.boxIcon}>
            <View style={styles.searchIcon}>
                <AntDesign name="search1" size={26} color="black" />
            </View>
            <View style={styles.iconRight}>
                <AntDesign style={{ marginRight: 12}} name="shoppingcart" size={26} color="black" />
                <Entypo name="dots-three-vertical" size={26} color="black" />
            </View>
        </View>
    );
}

export default TopIconHomePage;

const styles = StyleSheet.create({
    boxIcon: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
    },
    searchIcon: {

    },
    iconRight:{
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
});