import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ImageBackground
} from "react-native";
import { 
    Feather, 
    Entypo, 
    AntDesign
} from '@expo/vector-icons';

const EditProfile = ({ navigation }) => { 
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={30} color="#CAC659" />
                    </Pressable>
                    <Text style={styles.headerText}>Sửa hồ sơ</Text>
                    <Pressable>
                        <AntDesign name="check" size={30} color="#CAC659" />
                    </Pressable>
                </View>

            </View>
            
            <View style={styles.avatarBox}>
                <View style={styles.avatarContent}>
                    <View >
                        <ImageBackground
                            style={styles.avatarImage}
                            source={require("../../../assets/images/blank-profile-picture.png") }
                        >
                            <Text style={styles.avatarText}>Sửa</Text>
                        </ImageBackground>
                    </View>

                </View>
                <View style={styles.avatarBot}>
                    <Text style={{ color: '#fff' }}>Chạm để thay đổi</Text>
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
        </View>
    )
}

export default EditProfile;


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
        paddingVertical: 8,
        justifyContent:'space-between'
    },
    headerText: {
        fontSize: 20,
        marginLeft: 8
    },
    avatarBox: {},
    avatarContent: {
        height: 160,
        backgroundColor: '#CAC659',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarImage: {
        height: 80,
        width: 80,
        borderRadius: 100,
        resizeMode: 'center',
    },
    avatarText: {
        marginTop: 60,
        width: '100%',
        backgroundColor: '#ccc',
        color: '#fff',
        alignSelf: 'center'
    },
    avatarBot: {
        height: 24,
        width: '100%',
        backgroundColor: '#b8b32a',
        alignItems: 'center'
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
 })