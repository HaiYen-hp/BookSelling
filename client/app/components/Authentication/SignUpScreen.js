import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import ButtonBot from "../buttons/ButtonBot";
import BackIcon from "../buttons/BackIcon";

const SignUpScreen = () => {
  const [viewPassword, setViewPassword] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
    }
    setViewPassword(!viewPassword);
  };

  return (
    <View style={styles.container}>
      <BackIcon/>
      <View style={styles.header}>
        <Text style={styles.headerText}>Đăng Nhập</Text>
        <View style={styles.boxHelp}>
          <Text style={styles.boxHelpText}>Nếu Bạn Cần Hỗ Trợ </Text>
          <Pressable>
            <Text style={[styles.boxHelpText, styles.helpLink]}>
              Ấn Vào Đây{" "}
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên đăng nhập"
        ></TextInput>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.inputField]}
            secureTextEntry={viewPassword}
            placeholder="Nhập Mật Khẩu"
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              handlePasswordVisibility();
            }}
          >
            <Ionicons name={rightIcon} size={22} color="#383838" />
          </TouchableOpacity>
        </View>

        <View style={styles.forgetPassword}>
          <Pressable>
            <Text style={styles.forgetPasswordText}> Quên mật khẩu ? </Text>
          </Pressable>
        </View>
        <ButtonBot text="ĐĂNG NHẬP"></ButtonBot>
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
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
    marginTop: 50,
    marginRight: 30,
    // backgroundColor: 'red'
    // justifyContent: 'center',
  },
  header: {
    marginTop: 140,
    alignItems: "center",
  },
  headerText: {
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 36,
  },
  boxHelp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  boxHelpText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
  },
  helpLink: {
    color: "#CAC659",
  },
  content: {
    borderColor: "#ccc",
  },
  input: {
    padding: 20,
    margin: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#b2b3ad",
  },
  footer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  botNote: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 70,
  },
  forgetPassword: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
    marginBottom: 16,
  },
  forgetPasswordText: {
    color: "#3678DB",
  },
  botNoteText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
  },
  inputContainer: {
    // backgroundColor: 'red',
    // width: '100%',
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#b2b3ad",
    padding: 5,
    margin: 10,
  },
  inputField: {
    padding: 14,
    fontSize: 14,
    width: "90%",
    // backgroundColor: 'pink'
  },
});
