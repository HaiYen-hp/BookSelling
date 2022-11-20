import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    TouchableOpacity,
    Image
} from "react-native";
import { 
    Ionicons, 
    Feather, 
    MaterialCommunityIcons , 
    Entypo, 
    FontAwesome5,
    AntDesign  
} from '@expo/vector-icons';

const AccountInfo = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerIcon}>
                        <Ionicons style={styles.icon} name="settings-outline" size={26} color="white" />
                        <Feather style={styles.icon} name="shopping-cart" size={26} color="white" />
                    </View>
                    <View style={styles.headerInfo}>
                        <View style={styles.avatar}> 
                            <Image
                                style={styles.avatarImage}
                                source={require("../../../assets/images/blank-profile-picture.png") }
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>Vương Trung Thành</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.block}>
                <View style={styles.donMua}> 
                    <Pressable>
                        <View style={styles.donMuaHeader}>
                            <View style={styles.donMuaHeaderLeft}>
                                <MaterialCommunityIcons name="clipboard-text-outline" size={26} color="#05a" />
                                <Text style={{ fontSize: 16, marginLeft: 10 }}>Đơn mua</Text>
                            </View>
                            <View style={styles.donMuaHeaderRight}>
                                <Text>Xem lịch sử mua hàng</Text>
                                <Entypo name="chevron-small-right" size={26} color="black" />
                            </View>
                        </View>
                    </Pressable>

                    <View style={styles.boxStatus}>
                        <Pressable style={styles.statusChoose}>
                            <AntDesign name="wallet" size={32} color="black" />
                            <Text>Chờ xác nhận</Text>
                        </Pressable>
                        <Pressable style={styles.statusChoose}>
                            <AntDesign name="inbox" size={32} color="black" />
                            <Text>Chờ lấy hàng</Text>
                        </Pressable>
                        <Pressable style={styles.statusChoose}>
                            <FontAwesome5 name="truck" size={32} color="black" />
                            <Text>Đang giao</Text>
                        </Pressable>
                        <Pressable style={styles.statusChoose}>
                            <MaterialCommunityIcons name="star-circle-outline" size={32} color="black" />
                            <Text>Đánh giá</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </View>
    );
}

export default AccountInfo;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFF'
    },
    header: {
        height: 150,
        backgroundColor: '#CAC659',
    },
    headerContent: {
        marginHorizontal: 20
    },
    headerIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 44,
        alignContent: 'center',
    },
    icon: {
        marginLeft: 20
    },
    headerInfo: {
        flexDirection: 'row',
    },
    avatar: {
        marginRight: 10
    },
    avatarImage: {
        height: 60,
        width: 60,
        borderRadius: 100,
        resizeMode: 'center',
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    name: {
        fontSize: 24,
        lineHeight: 28,
        color: '#fff'
    },
    block: {
        marginVertical: 10,
        backgroundColor: '#f3f3f3',
        paddingBottom: 20        
    },
    donMua: {
        marginHorizontal: 20,
        // paddingVertical: 12
    },
    donMuaHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        // backgroundColor: 'red',
        alignContent: 'center'
        
    },
    donMuaHeaderLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%'
    },
    donMuaHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    statusChoose: {
        height: 60,
        width: '25%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxStatus: {
        flexDirection: 'row',
        marginTop: 8
    }
});