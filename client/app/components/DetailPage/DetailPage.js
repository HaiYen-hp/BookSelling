import { View, StyleSheet, Text, Image, ImageBackground, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import TopIconAllPage from "../cards/TopIconAllPage";
import AppLoading from "expo-app-loading";
import { AntDesign } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


function DetailPage() {
    const [loaded] = useFonts({
        SansCasual: require("../../../assets/fonts/RecursiveSansCslSt-Regular.ttf"),
        SansCasualMedium: require("../../../assets/fonts/RecursiveSansCslSt-Med.ttf"),
        SansCasualBold: require("../../../assets/fonts/RecursiveSansCslSt-Bold.ttf"),
    });
    if (!loaded) {
    return <AppLoading />;
    }
    const image = { uri: "" };

    return(
        <View style={styles.container}>
            <ScrollView>
                <TopIconAllPage/>

                <View style = {styles.image}>
                    <Image style = {{width: '80%', height:'100%'}} source={require("../../../assets/images/NguonCoi.png")}></Image>
                </View>

                <View style = {{borderTopStartRadius: 20,borderTopEndRadius: 20}}>
                    <View style = {{marginLeft:'5%', marginRight:'5%'}}>
                        <View style = {{}}>
                            <Text style = {styles.TextImg}>Sapiens Lược Sử Loài Người (Tái Bản)</Text>
                        </View>

                        <View style = {styles.Imagetest}>
                            <AntDesign name="staro" size={24}/>
                            <AntDesign name="staro" size={24}/>
                            <AntDesign name="staro" size={24}/>
                            <AntDesign name="staro" size={24}/>
                            <AntDesign name="staro" size={24}/>
                            <Text style ={{fontSize:15, marginLeft:20}}>(100 lượt đánh giá) |</Text>
                            <Text style ={{fontSize:15, }}> Đã bán 2000+</Text>
                        </View>

                        <View style = {{flexDirection: 'row'}}>
                            <Text style = {{fontSize: 20}}>1.000.0000.000đ</Text>
                            <Text style = {{fontSize: 20}}>   -36%</Text>
                        </View>

                        <View  style = {{flexDirection: 'row', marginTop: 10}}>
                            <AntDesign name="hearto" size={24} color="black" />
                            <Text style = {{paddingRight: 50, paddingLeft: 10}}>Like</Text>
                            <SimpleLineIcons name="share-alt" size={24}/>
                            <Text style = {{paddingLeft: 10}}>Share</Text>
                        </View>

                        <View style = {{flexDirection: 'row', marginTop: 10}}>
                            <Text style = {{fontSize: 25}}>Chi tiết       </Text>
                            <Text style = {{fontSize: 25}}>Mô tả          </Text>
                            <Text style = {{fontSize: 25}}>Đánh giá</Text>
                        </View>

                        <View style= {{marginTop: 20}}>
                            <Text style = {{fontSize: 20}}>Danh mục: ...>Sách lịch sử>Thế giới</Text>
                            <Text style = {{fontSize: 20}}>Công ty sản xuất: Alpha Books</Text>
                            <Text style = {{fontSize: 20}}>Ngày xuất bản: 2021-07-14</Text>
                            <Text style = {{fontSize: 20}}>Dịch giả: Dương Minh Tú</Text>
                            <Text style = {{fontSize: 20}}>Loại bìa: Bìa cứng</Text>
                            <Text style = {{fontSize: 20}}>Số trang : 1500</Text>
                            <Text style = {{fontSize: 20}}>Số trang: Nhà xuất bản toàn cầu</Text>
                        </View>
                    </View>
                </View>

                <View style = {{marginTop: 20,marginLeft:'5%', marginRight:'5%'}}>
                    <View style = {{justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text style = {{fontSize: 20}}>Giao hàng đến </Text>
                        <MaterialIcons name="navigate-next" size={24} color="black" />
                    </View>
                    <View style = {{flexDirection: 'row', fontSize: 20}}>
                        <Text style = {{color: 'red',fontWeight: "bold", fontSize: 20}}>Nhanh</Text>
                        <Text style = {{paddingLeft: 20, fontSize: 20}}>Thứ năm, ngày 8/11</Text>   
                    </View>
                    <Text style = {{fontSize: 20}}>Vận chuyển: 15.000đ</Text>
                </View>

                <View style = {{flexDirection: 'row',justifyContent: 'space-between',marginTop:20,marginLeft:'5%', marginRight:'5%'}}>
                    <Text style={{fontSize:25}}>Sản phẩm tương tự</Text>
                    <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
            </ScrollView>
        </View>
    );
}


export default DetailPage;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },
    image: {
        marginTop: 30,
        height:300,
        width:'100%',
        backgroundColor:'#818181',
        alignItems: 'center',
    },
    Imagetest:
    {
        backgroundColor: 'white',
        width:'100%',
        flexDirection: 'row',
        marginTop: 10
    },
    TextImg:
    {
        width:'90%',
        fontSize: 34,
    }
});