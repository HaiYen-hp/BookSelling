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
                            <View style={styles.viewText}>
                                <Text style={styles.avatarText}>Sửa</Text>
                            </View>
                        </ImageBackground>
                    </View>

                </View>
                <View style={styles.avatarBot}>
                    <Text style={{ color: '#fff' }}>Chạm để thay đổi</Text>
                </View>
            </View>

            <View style={styles.contentBox}>
                <View style={styles.block}>
                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Tên</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Text>Admin</Text>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>

                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Bio</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Text>Thiết lập ngay</Text>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>
                </View>
            </View>

            <View style={[ styles.contentBox, styles.mt30 ]}>
                <View style={styles.block}>
                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Giới tính</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Text>Khác</Text>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </Pressable>
                    <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                        <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                            <Text style={styles.customerInfoText}>Ngày sinh</Text>
                        </View>
                        <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                            <Text>15-09-2001</Text>
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
    viewText: {
        marginTop: 60,
        backgroundColor: '#3b3b3b',
        alignItems: 'center'
    },
    avatarText: {
        color: '#fff',
    },
    avatarBot: {
        height: 24,
        width: '100%',
        backgroundColor: '#b8b32a',
        alignItems: 'center'
    },
    contentBox: {
        marginHorizontal: 20,
    },
    mt30: {
        marginTop: 30,
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