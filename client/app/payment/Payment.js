import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    TextInput
} from "react-native";
import { 
    Feather, 
    FontAwesome5, 
    Entypo,
    MaterialCommunityIcons
} from '@expo/vector-icons';

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


const Payment = ({ navigation }) => {

    const listDeliver = [
        {
            name: 'Tiết Kiệm (Giao trong tuần)',
            code: 1
        },
        {
            name: 'Nhanh (Giao trong ngày)',
            code: 2
        },        {
            name: 'Hỏa Tốc (Giao trong 2h)',
            code: 3
        }
    ]

    const listPayment = [
        {
            name: 'Thẻ ngân hàng',
            code: 1
        },
        {
            name: 'COD',
            code: 2
        }
    ]

    const cartData = [
        {
            img: require("../../assets/images/aidagiethoangtube.png"),
            name: 'Ai đã đặt tên cho em',
            price: '172.000',
            quantity: '1'
        },
        {
            img: require("../../assets/images/tamlyhoc.png"),
            name: 'TÂM LÝ HỌC: Nghệ thuật giải mã hành vi',
            price: '252.000',
            quantity: '2'
        },

    ]
    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={30} color="#FFF" />
                    </Pressable>
                    <Text style={styles.headerText}>Xác Nhận Đơn Hàng</Text>
                    <View></View>
                </View>
            </View>
            <ScrollView>
            <View style={styles.address}>
                <View style={styles.firstInfo}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="#CAC659" />
                    <Text style={styles.name}>Admin</Text>
                    <Text style={styles.phone}>0941938929</Text>
                </View>
                <View style={styles.addressDetail}>
                    <View style={styles.addressText}>
                        <Text style={styles.greyColor}>Số 5, ngõ 753 đường Nguyễn Khoái, phường Thanh Trì, quận Hoàng Mai, Hà Nội</Text>
                    </View>
                    <View style={styles.addressIcon}>
                        <Entypo style={styles.greyColor} name="chevron-small-right" size={30} color="black" />
                    </View>
                </View>
            </View>

            <View style={styles.deliver}>
                <View style={styles.deliverContainer}>
                    <Text style={styles.deliverTitle}>Chọn hình thức giao hàng</Text>
                    <View style={styles.selectDelivers}>
                        {
                            listDeliver.map((deliver) => {
                                return(
                                    <View style={styles.deliverOption}>
                                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
                                        <Text>{deliver.name}</Text>
                                    </View>
                                )
                            })
                        }

                    </View>
                </View>
            </View>

            <View style={styles.deliver}>
                <View style={styles.deliverContainer}>
                    <Text style={styles.deliverTitle}>Chọn phương thức thanh toán</Text>
                    <View style={styles.selectDelivers}>
                        {
                            listPayment.map((deliver) => {
                                return(
                                    <View style={styles.deliverOption}>
                                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
                                        <Text>{deliver.name}</Text>
                                    </View>
                                )
                            })
                        }

                    </View>
                </View>
            </View>

         
                <View style={styles.listItemContainer}>
                    {
                        cartData.map((book) => {
                            return(
                                <View style={styles.itemContainer}>
                                    <View style={styles.overviewItem}>
                                        <Image
                                            style={styles.itemImage}
                                            source={book.img }
                                        />
                                        <View style={styles.description}>
                                            <Text style={styles.title}>{book.name}</Text>
                                            <View>
                                                <Text>Số lượng: {book.quantity}</Text>
                                                <Text style={styles.price}>{book.price} đ</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>

                <View style={styles.priceContainer}>
                    <View style={styles.priceOverview}> 
                        <View style={styles.priceCalculate}>
                            <View style={styles.priceItem}>
                                <Text>Tạm tính</Text>
                                <Text>156.500đ</Text>
                            </View>
                            <View style={styles.priceItem}>
                                <Text>Phí vận chuyển</Text>
                                <Text>25.000đ</Text>
                            </View>
                            <View style={styles.priceItem}>
                                <Text>Giảm giá</Text>
                                <Text style={styles.discount}>- 10.000đ</Text>
                            </View>
                        </View>
                        <View style={[ styles.priceItem, styles.totalPrice ]}>
                            <Text style={styles.totalPriceText}>Tổng tiền</Text>
                            <Text style={styles.totalPriceText}>171.500 đ</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottom}>
                <View style={styles.salesContainer}>
                    <View style={styles.salesDescription}>
                        <MaterialCommunityIcons name="ticket-percent-outline" size={24} color="#CAC659" />
                        <Text style={{ marginLeft:10}}>Shop khuyến mãi</Text>
                    </View>
                    <View style={styles.inputCode}>
                        <TextInput 
                            placeholder="Nhập mã giảm giá">
                        </TextInput>
                        <Entypo style={styles.rankName} name="chevron-small-right" size={24} color="#ccc" />

                        
                    </View>
                </View>

                <View style={styles.paymentContainer}>
                    <View style={styles.paymentContent}>
                        <Text>Tổng tiền</Text>
                        <Text style={styles.paymentPrice}>250.000 đ</Text>
                    </View>
                    <View>
                        <Pressable style={styles.paymentBnt} onPress={() => navigation.navigate("Payment")}>
                            <Text style={styles.paymentBntText}>Đặt hàng</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
 }

export default Payment;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ccc'
    },
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#CAC659',
    },
    headerContent: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    headerText: {
        flexDirection: 'column',
        color: '#fff',
        fontWeight: '600',
        fontSize: 24,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    address: {
        height: 100,
        backgroundColor: '#fff',
    },
    firstInfo: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 12,
        alignItems: 'center'
    },
    name: {
        marginLeft: 4,
        paddingHorizontal: 8,
        borderRightWidth: 1,
        borderRightColor: '#CCC'
    },
    phone: {
        paddingHorizontal: 8
    },
    addressDetail: {
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    addressText: {
        flex: 11,
    },
    addressIcon: {
        flex: 1,
    },
    greyColor: {
        color: '#595858'
    },
    deliver: {
        marginTop: 8,
        backgroundColor: '#fff',
    },
    deliverContainer: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    deliverTitle: {
        paddingVertical: 12
    },
    selectDelivers: {
        paddingHorizontal: 20,
        paddingTop: 12,
        backgroundColor: '#eae8bf',
        borderColor: '#CAC659',
        borderWidth: 2,
        borderRadius: 28,
        paddingBottom: 20
    },
    checkBox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#ccc',
        marginRight: 10
    },
    deliverOption: {
        flexDirection: 'row',
        paddingVertical: 8
    },
    listItemContainer: {
        // backgroundColor: '#fff',
        marginTop: 8,
        justifyContent: 'center',

    },
    itemContainer: {
        marginTop: 1,
        height: 160,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        // justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    overviewItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImage: {
        height: 120,
        width: 100,
        flex: 2
    },
    description: {
        flex: 5,
        height: 120,
        // width: '55%',
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: '400'
    },
    price: {
        fontSize: 16,
        color: 'red'
    },
    quantityItem: {
        flexDirection: 'row',
        marginTop: 8
    },
    changeQuantityLeft: {
        borderWidth: 1,
        paddingVertical: 4,
        width: 24,
        borderColor: '#ccc',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    changeQuantityRight: {
        borderWidth: 1,
        paddingVertical: 4,
        width: 24,
        borderColor: '#ccc',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    showQuantity: {
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center'
    },
    bottom: {
        backgroundColor: '#fff'
    },
    salesContainer:{
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 12,
        paddingVertical: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    salesDescription: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    inputCode: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    paymentContainer: {
        height: 76,
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    paymentContent: {
        justifyContent: 'space-between'
    },
    paymentPrice: {
        color: 'red',
        fontSize: 18,
        fontWeight: '500'
    },
    paymentBnt: {
        height: 44,
        width: 130,
        backgroundColor: 'red',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    paymentBntText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16
    },
    priceContainer: {
        marginTop: 8,
        marginBottom: 2,
        backgroundColor: '#fff',
    },
    priceOverview: {
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    priceCalculate: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    priceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6
    },
    discount: {
        color: 'green'
    },
    totalPriceText: {
        fontSize: 16,
        fontWeight: '500'
    }
})