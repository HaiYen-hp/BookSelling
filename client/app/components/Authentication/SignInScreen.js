import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import BackIcon from "../buttons/BackIcon";
import axios from "axios";
import {REGISTER} from "../../shared/Api"

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfpassword, setCfpassword] = useState("");
  const userData = { username, email, password, cfpassword };
  const resetState = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setCfpassword("");
  };

  const clickOnRegister = () => {

    if (username == "" || email == "" || password == "" || cfpassword == "") {
      Alert.alert("Thông báo", "Thông tin đăng kí phải nhập đầy đủ!")
    }
    else if (password !== cfpassword) {
      Alert.alert("Thông báo", "Mật khẩu nhập lại không trùng khớp!")
    }
    else {
      axios({
        url: REGISTER,
        method: 'POST',
        data: {
          username: username,
          email: email,
          phone: '0123',
          password: password
        }
      }).then(result => {
        console.log("thành công");
        navigation.navigate('Sign Up Screen');
      }).catch((err) => {
        console.log("Thông báo", err.response.data);
      });
    }
  }

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
  const [loaded] = useFonts({
    SansCasual: require("../../../assets/fonts/RecursiveSansCslSt-Regular.ttf"),
    SansCasualMedium: require("../../../assets/fonts/RecursiveSansCslSt-Med.ttf"),
    SansCasualBold: require("../../../assets/fonts/RecursiveSansCslSt-Bold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 20, marginTop: 30 }}>
        <BackIcon navigation={() => navigation.goBack()} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Đăng Ký</Text>
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
          placeholder="Tên Tài Khoản"
          value={username}
          onChangeText={(value) => {
            setUsername(value);
          }}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Nhập Email"
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
        ></TextInput>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.inputField]}
            secureTextEntry={viewPassword}
            placeholder="Nhập Mật Khẩu"
            value={password}
            onChangeText={(value) => {
              setPassword(value);
            }}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              handlePasswordVisibility();
            }}
          >
            <Ionicons name={rightIcon} size={22} color="#383838" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            secureTextEntry={viewPassword}
            placeholder="Nhập Lại Mật Khẩu"
            value={cfpassword}
            onChangeText={(value) => {
              setCfpassword(value);
            }}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              handlePasswordVisibility();
            }}
          >
            <Ionicons name={rightIcon} size={24} color="#383838" />
          </TouchableOpacity>
        </View>

        <View style={styles.forgetPassword}>
          <Pressable>
            <Text style={styles.forgetPasswordText}> Quên mật khẩu ? </Text>
          </Pressable>
        </View>
      </View>
      {/* <ButtonBot text="ĐĂNG KÝ"></ButtonBot> */}
      <Pressable onPress={clickOnRegister}>
        <View style={styles.btnStart}>
          <Text style={styles.textStart}>ĐĂNG KÝ</Text>
        </View>
      </Pressable>

      <View style={styles.footer}>
        <View style={styles.botNote}>
          <Text style={{ fontFamily: "SansCasual" }}>
            {" "}
            Đã có tài khoản rồi?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Sign Up Screen")}>
            <Text style={styles.forgetPasswordText}>Đăng Nhập</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 50,
    justifyContent: "center",
    // backgroundColor: '#fff'
  },
  header: {
    marginTop: 40,
    alignItems: "center",
  },
  headerText: {
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 36,
    fontFamily: "SansCasualBold",
  },
  boxHelp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 16,
  },
  boxHelpText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    fontFamily: "SansCasual",
  },
  helpLink: {
    color: "#CAC659",
  },
  content: {
    borderColor: "#ccc",
  },
  input: {
    padding: 20,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#b2b3ad",
    fontFamily: "SansCasualMedium",
  },
  footer: {
    // flex: 1,
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
    fontFamily: "SansCasual",
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
    marginHorizontal: 30,
    marginVertical: 10,
  },
  inputField: {
    padding: 14,
    fontSize: 14,
    width: "90%",
    fontFamily: "SansCasualMedium",
  },
  btnStart: {
    margin: 8,
    padding: 22,
    borderRadius: 30,
    backgroundColor: "#C8C23C",
    opacity: 0.81,
    marginBottom: 50,
    marginHorizontal: 30,
  },
  textStart: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "SansCasualBold",
    textAlign: "center",
    lineHeight: 30,
  },
});
