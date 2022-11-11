import { View, Text, StyleSheet, Pressable, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

import ButtonBot from '../buttons/ButtonBot'

const SignUpScreen = () => {

    const [viewPassword, setViewPassword] = useState(true);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Đăng Nhập
                </Text>
                <View style={styles.boxHelp}>
                    <Text style={styles.boxHelpText}>Nếu Bạn Cần Hỗ Trợ </Text>
                    <Pressable >
                        <Text style={[styles.boxHelpText, styles.helpLink]}>Ấn Vào Đây </Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.content}>
                <TextInput style={styles.input} placeholder='Nhập tên đăng nhập'></TextInput>

                <View>
                    <TextInput style={styles.input} secureTextEntry={viewPassword} placeholder='Password'></TextInput>
                    <TouchableOpacity onPress={() => {
                        setViewPassword((prev) => !prev)
                    }}>
                        <Text>Show</Text>

                    </TouchableOpacity>
                    {/* <Image resizeMode="contain" source={require('../../assets/icons/line-top.png')}></Image> */}

                </View>




                <View style={styles.forgetPassword}>
                    <Pressable> 
                        <Text style={styles.forgetPasswordText}> Quên mật khẩu ? </Text>
                    </Pressable>
                </View>
                <ButtonBot
                    text="ĐĂNG NHẬP"
                ></ButtonBot>
            </View>
            <View style={styles.footer}>
                <View style={styles.botNote}>
                    <Text> Chưa tạo tài khoản? </Text>
                    <Pressable>
                        <Text style={styles.forgetPasswordText}>Đăng Ký Ngay</Text>
                    </Pressable>
                </View>
            </View>
        </View>

    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 30,
        marginTop: 50,
        marginRight: 30,
        // backgroundColor: 'red'
        // justifyContent: 'center',
    },
    header: {
        marginTop: 140,
        alignItems: 'center'
    },
    headerText: {
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 36
    },
    boxHelp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    boxHelpText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18
    },
    helpLink: {
        color: "#CAC659"
    },
    content:{
        borderColor: "#ccc",
    },
    input: {
        padding: 20,
        margin: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#F0F0F0'
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    botNote: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 70
    },
    forgetPassword: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 16,
        marginBottom: 16
    },
    forgetPasswordText: {
        color: '#3678DB'
    },
    botNoteText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,

    }
});