import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native';

import ButtonBot from './app/components/buttons/ButtonBot';
import SignUpScreen from './app/components/Authentication/SignUpScreen';
import SignInScreen from './app/components/Authentication/SignInScreen';

export default function App() {
    return (
        <View style={styles.container}>
            <SignUpScreen/>
            {/* <SignInScreen/> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


// export default function App() {
//     return (
//         <View style={styles.container}>
//             <ImageBackground style={styles.image} resizeMode="cover" source={require('./assets/images/get-start.png')}>
//                 <Text style={styles.text}>CHÀO MỪNG ĐẾN VỚI BOOK STORE APP</Text>
//                 <ButtonBot
//                     text="BẮT ĐẦU"
//                 >
//                 </ButtonBot>
//             </ImageBackground>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//     },
//     image: {
//         flex: 1,
//         resizeMode: 'cover',
//         justifyContent: "space-between",
//     },
//     text: {
//         color: "#1A9814",
//         fontSize: 40,
//         fontWeight: "400",
//         lineHeight: 55,
//         fontWeight: "bold",
//         marginTop: 200,
//         textAlign: 'center',
//         marginLeft: 30,
//         marginRight: 30,
//     },
// });

//
//
//

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <View style={styles.iconTop}>
//                 <Image resizeMode="contain" source={require('./assets/icons/line-top.png')}></Image>
//             </View>
//             <View style={styles.content}>
//                 <Text style={styles.title}>Tận hưởng mua sắm</Text>
//                     <Text style={styles.detail}>
//                         Book store giúp bạn thỏa thích lựa chọn đầu sách. Tích kiệm chi phí đi lại, đa dạng đầu sách giúp mọi người tìm mua dễ dàng ngay tại nhà
//                     </Text>
//                     <View style={styles.boxBnt}>
//                         <Pressable>
//                             <View style={[styles.btn, styles.btnResister]}>
//                                 <Text style={[styles.btnText, styles.btnTextResister]}>ĐĂNG KÝ</Text>
//                             </View>
//                         </Pressable>
//                         <Pressable>
//                             <View style={[styles.btn, styles.btnLogin]}>
//                                 <Text style={[styles.btnText]}>ĐĂNG NHẬP</Text>
//                             </View>
//                         </Pressable>
//                     </View>
//             </View>

//             <View style={styles.iconBot}>
//                 <View style={styles.iconBotLeft}>
//                     <Image style={styles.imageBook} resizeMode="contain" source={require('./assets/icons/book.png')}></Image>
//                     <Image style={styles.imageSpring} resizeMode="contain" source={require('./assets/icons/spring.png')}></Image>
//                 </View>
//                 <View style={styles.iconBotLeft}>
//                     <Image style={styles.lineBot} resizeMode="contain" source={require('./assets/icons/line-bot.png')}></Image>
//                 </View>

//             </View>

//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         marginLeft: 30,
//         marginRight: 30,
//     },

//     iconTop: {
//         flex: 3,
//         alignItems: 'flex-end',
//         marginRight: -30,
//     },
//     content: {
//         flex: 4,
//     },

//     title: {
//         fontSize: 32,
//         fontWeight: '700',
//         lineHeight: 40,
//         fontStyle: "italic",
//         textAlign: 'center',
//         color: '#000',

//     },

//     detail: {
//         fontSize: 18,
//         fontWeight: '400',
//         lineHeight: 22,
//         marginTop: 40,
//         textAlign: 'center',
//         fontFamily: 'Recursive'
//     },

//     boxBnt: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 50
//     },

//     btn: {
//         paddingTop: 25,
//         paddingBottom: 25,
//         paddingLeft: 30,
//         paddingRight: 30,
//         borderRadius: 30,
//         // width: 190,
//         // height: 70
//     },
//     btnResister: {
//         backgroundColor: '#CAC659',
//     },
//     btnText: {
//         fontSize: 19,
//         fontWeight: '700',
//         lineHeight: 22,
//     },
//     btnTextResister: {
//         color: 'white'
//     },
//     iconBot: {
//         flex: 3,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     imageBook: {
//         marginLeft: 50,
//         marginBottom: -20,
//         width: 120,
//         height: 120,
//     },
//     imageSpring: {
//         width: 100,
//         height: 100,
//     },
//     lineBot: {
//         marginRight: -30,
//         alignItems: 'flex-end'
//     },
//     iconBotLeft: {
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//     }
// });

//
//
// 

