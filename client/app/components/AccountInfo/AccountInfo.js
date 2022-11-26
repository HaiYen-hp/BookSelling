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
    MaterialIcons,
    Octicons,
    FontAwesome
} from '@expo/vector-icons';

const AccountInfo = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerIcon}>
                        <Pressable onPress={() => navigation.navigate("Setting")}>
                            <Ionicons style={styles.icon} name="settings-outline" size={26} color="white" />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("Cart")}>
                            <Feather style={styles.icon} name="shopping-cart" size={26} color="white" />
                        </Pressable>
                    </View>
                    <View style={styles.headerInfo}>
                        <Pressable onPress={() => navigation.navigate("EditProfile")}>
                            <View style={styles.avatar}> 
                                <Image
                                    style={styles.avatarImage}
                                    source={require("../../../assets/images/blank-profile-picture.png") }
                                />
                            </View>
                        </Pressable>
                        <View style={styles.info}>
                            <Text style={styles.name}>Admin</Text>
                            <View style={styles.rank}>
                                <Text style={styles.rankName}>Thành viên</Text>
                                <Entypo style={styles.rankName} name="chevron-small-right" size={22} color="black" />

                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.block}>
                <View style={styles.donMua}> 
                    <Pressable>
                        <View style={styles.donMuaHeader}>
                            <View style={styles.donMuaHeaderLeft}>
                                <MaterialCommunityIcons name="clipboard-text-outline" size={22} color="#05a" />
                                <Text style={{ fontSize: 16, marginLeft: 10 }}>Đơn mua</Text>
                            </View>
                            <View style={styles.donMuaHeaderRight}>
                                <Text>Xem lịch sử mua hàng</Text>
                                <Entypo name="chevron-small-right" size={26} color="black" />
                            </View>
                        </View>
                    </Pressable>

                    <View style={styles.boxStatus}>
                        <Pressable style={[styles.statusChoose, styles.statusPrepare ]}>
                            <AntDesign name="wallet" size={28} color="black" />
                            <Text>Chờ xác nhận</Text>
                        </Pressable>
                        <Pressable style={[styles.statusChoose, styles.statusPrepare ]}>
                            <AntDesign name="inbox" size={28} color="black" />
                            <Text>Chờ lấy hàng</Text>
                        </Pressable>
                        <Pressable style={styles.statusChoose}>
                            <MaterialCommunityIcons name="truck-outline" size={28} color="black" />
                            <Text>Đang giao</Text>
                        </Pressable>
                        <Pressable style={styles.statusChoose}>
                            <MaterialCommunityIcons name="star-circle-outline" size={28} color="black" />
                            <Text>Đánh giá</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.block}>
                <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                    <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                        <MaterialIcons name="attach-money" size={24} color="#CAC659" />
                        <Text style={styles.customerInfoText}>Khách hàng thân thiết</Text>
                    </View>
                    <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                        <Text>Thành viên</Text>
                        <Entypo name="chevron-small-right" size={26} color="black" />
                    </View>
                </Pressable>

                <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                    <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                        <AntDesign name="hearto" size={24} color="#CAC659" />
                        <Text style={styles.customerInfoText}>Đã thích</Text>
                    </View>
                    <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                        <Text>0 Like</Text>
                        <Entypo name="chevron-small-right" size={26} color="black" />
                    </View>
                </Pressable>

                <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                    <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                        <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="#05a" />
                        <Text style={styles.customerInfoText}>Đã xem gần đây</Text>
                    </View>
                    <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                        <Entypo name="chevron-small-right" size={26} color="black" />
                    </View>
                </Pressable>

                <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                    <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                        <Feather name="star" size={24} color="#CAC659" />
                        <Text style={styles.customerInfoText}>Đánh giá của tôi</Text>
                    </View>
                    <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                        <Entypo name="chevron-small-right" size={26} color="black" />
                    </View>
                </Pressable>
            </View>

            <View style={styles.block}>
                <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                    <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                        <FontAwesome name="user-o" size={24} color="#05a" />
                        <Text style={styles.customerInfoText}>Thiết lập tài khoản</Text>
                    </View>
                    <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                        <Entypo name="chevron-small-right" size={26} color="black" />
                    </View>
                </Pressable>

                <Pressable style={ [ styles.customerInfo, styles.customerInfoBlock ]}>
                    <View style={[ styles.customerInfo, styles.customerInfoLeft ]}>
                        <Octicons name="question" size={24} color="#CAC659" />
                        <Text style={styles.customerInfoText}>Trung tâm hỗ trợ</Text>
                    </View>
                    <View style={[ styles.customerInfo, styles.customerInfoRight ]}>
                        <Entypo name="chevron-small-right" size={26} color="black" />
                    </View>
                </Pressable>

            </View>


        </View>
    );
}

export default AccountInfo;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ccc'
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
    rank:{ 
        flexDirection: 'row',
        backgroundColor: "#303335",
        alignItems: 'center',
        height: 22,
        paddingHorizontal: 8,
        borderRadius: 30
    },
    rankName: {
        color: 'white',
        fontSize: 12
    },
    block: {
        marginTop: 10,
        backgroundColor: '#f3f3f3',
        paddingBottom: 10        
    },
    donMua: {
        marginHorizontal: 20,
        paddingVertical: 4
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
        width: '23%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusPrepare: {
        width: '27%',
    },
    boxStatus: {
        flexDirection: 'row',
        marginTop: 8
    },
    // block customer
    customerInfo: {
        flexDirection: 'row',
        paddingTop: 8
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
    customerInfoText: {
        marginLeft: 8,
    }

});