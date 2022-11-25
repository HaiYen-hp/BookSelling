import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    Image
} from "react-native";
import { 
    Feather, 
    FontAwesome5,
    Entypo,
    FontAwesome,
    AntDesign,
    MaterialCommunityIcons
} from '@expo/vector-icons';
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
const cartData = [
    {
        img: require("../../../assets/images/aidagiethoangtube.png"),
        name: 'Ai đã đặt tên cho em',
        price: '172.000',
        quantity: '2'
    },
    {
        img: require("../../../assets/images/aidagiethoangtube.png"),
        name: 'Ai đã đặt tên cho em',
        price: '172.000',
        quantity: '2'
    },
    {
        img: require("../../../assets/images/aidagiethoangtube.png"),
        name: 'Ai đã đặt tên cho em',
        price: '172.000',
        quantity: '2'
    },
    {
        img: require("../../../assets/images/aidagiethoangtube.png"),
        name: 'Ai đã đặt tên cho em',
        price: '172.000',
        quantity: '2'
    },
    {
        img: require("../../../assets/images/aidagiethoangtube.png"),
        name: 'Ai đã đặt tên cho em',
        price: '172.000',
        quantity: '2'
    },
    {
        img: require("../../../assets/images/aidagiethoangtube.png"),
        name: 'Ai đã đặt tên cho em',
        price: '172.000',
        quantity: '2'
    },
    {
        img: require("../../../assets/images/aidagiethoangtube.png"),
        name: 'Ai đã đặt tên cho em',
        price: '172.000',
        quantity: '2'
    },
    {
        img: require("../../../assets/images/aidagiethoangtube.png"),
        name: 'Ai đã đặt tên cho em',
        price: '172.000',
        quantity: '2'
    },
]
const Cart = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={30} color="#FFF" />
                    </Pressable>
                    <Text style={styles.headerText}>Giỏ Hàng</Text>
                    <View></View>
                </View>
            </View>
            <View style={styles.address}>
                <View style={styles.addressDetail}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="#CAC659" />
                    <Text style={styles.addressDetailText}>Phường Đồng Tâm, Quận Hai Bà Trưng, Hà Nội</Text>
                </View>
                <View style={styles.addressIcon}>
                    <Entypo style={styles.rankName} name="chevron-small-right" size={30} color="black" />
                </View>
            </View>

            <View style={styles.total}>
                <View style={styles.totalDetail}>
                    <View style={styles.listCheckBox}>
                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
                        <Text>Tất cả (3 sản phẩm)</Text>
                    </View>
                    <View style={styles.deleteItem}>
                        <FontAwesome name="trash-o" size={24} color="black" />
                    </View>
                </View>
            </View>

          <ScrollView>
            <View style={styles.listItemContainer}>
                    {
                        cartData.map((book) => {
                            return(
                                <View style={styles.itemContainer}>
                                    <View style={styles.overviewItem}>
                                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
                                        <Image
                                            style={styles.itemImage}
                                            source={book.img }
                                        />
                                        <View style={styles.description}>
                                            <Text style={styles.title}>{book.name}</Text>
                                            <View>
                                                <Text style={styles.price}>{book.price} đ</Text>
                                                <View style={styles.quantityItem}>
                                                    <Pressable style={styles.changeQuantityLeft}>
                                                        <AntDesign name="minus" size={16} color="black" />
                                                    </Pressable>
                                                    <Pressable style={styles.showQuantity}>
                                                        <Text>{book.quantity}</Text>
                                                    </Pressable>
                                                    <Pressable style={styles.changeQuantityRight}>
                                                        <AntDesign name="plus" size={16} color="black" />
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.deleteItem}>
                                            <FontAwesome name="trash-o" size={24} color="black" />
                                        </View>
                                    </View>
                                    
            
                                </View>
                            );
                        })
                    }
                
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
                        <Text>Tổng cộng</Text>
                        <Text style={styles.paymentPrice}>Vui lòng chọn sản phẩm</Text>
                    </View>
                    <View>
                        <Pressable style={styles.paymentBnt} onPress={() => navigation.navigate("Payment")}>
                            <Text style={styles.paymentBntText}>Mua Hàng (0)</Text>
                        </Pressable>
                    </View>
                </View>
          </View>
        </View>
    )
};


export default Cart;

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
        flexDirection: 'row',
        height: 48,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addressDetail: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center'
    },
    addressIcon: {
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    addressDetailText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#444950'
    },
    total: {
        marginTop: 8,
        flexDirection: 'row',
        height: 48,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'space-between',
    },
    totalDetail: {
        width: '90%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    listCheckBox: {
        flexDirection: 'row',
    },
    checkBox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#ccc',
        marginRight: 10
    },
    listItemContainer: {
        // backgroundColor: '#fff',
        justifyContent: 'center',

    },
    itemContainer: {
        marginTop: 4,
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
        marginTop: 8,
        height: 120,
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
        color: 'red'
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
    }
})