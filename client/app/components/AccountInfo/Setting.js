import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image
} from "react-native";
import { 
    Ionicons, 
    Feather, 
    MaterialCommunityIcons , 
    Entypo, 
    FontAwesome5,
    AntDesign,
    Octicons,
    FontAwesome
} from '@expo/vector-icons';

import ButtonBot from "../buttons/ButtonBot";

const Setting = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Pressable>
                        <Feather name="arrow-left" size={30} color="#CAC659" />
                    </Pressable>
                    <Text style={styles.headerText}>Thiết lập tài khoản</Text>
                </View>

            </View>

            <View style={styles.contentBox}>
                <Text style={styles.contentHeader}>Tài khoản</Text>
                <View style={styles.block}>
                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Tài khoản & Bảo mật</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>

                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Địa Chỉ</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>

                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Tài khoản / Thẻ ngân hàng</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>
                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Ngôn ngữ / Language</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>
                </View>
            </View>

            <View style={styles.contentBox}>
                <Text style={styles.contentHeader}>Hỗ trợ</Text>
                <View style={styles.block}>
                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Trung tâm hỗ trợ</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>

                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Tiêu chuẩn cộng đồng</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>

                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Điều khoản</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>
                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Giới thiệu</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>
                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Yêu cầu xóa tài khoản</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>
                </View>
            </View>

            <View style={{ marginTop: 20}}>
                <ButtonBot
                    text="ĐĂNG XUẤT"
                    // navigation={() => navigation.navigate("Sign Up Screen")}
                ></ButtonBot>
            </View>



        </View>
    );
}

export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ccc'
    },
    header: {
        paddingTop: 40,
        backgroundColor: '#f3f3f3',
    },
    headerContent: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignContent: 'center',
        paddingVertical: 8
    },
    headerText: {
        fontSize: 20,
        marginLeft: 8
    },
    contentBox: {
        marginHorizontal: 20
    },
    contentHeader: {
        marginTop: 16,
        marginBottom: 8
    },
    block: {
        // marginTop: 10,
        backgroundColor: '#f3f3f3',
        paddingBottom: 10,
        marginHorizontal: -20        
    },
    customerInfo: {
        flexDirection: 'row',
        paddingTop: 8,
    },
    customerInfoBlock: {
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    customerInfoLeft: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    customerInfoRight: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    // customerInfoText: {
    //     marginLeft: 8,
    // }
})