import { View , StyleSheet} from "react-native";
import { Entypo  } from "@expo/vector-icons";


function BackIcon() {
    return (
        <View style={styles.backIcon}>
            <Entypo style={styles.icon} name="chevron-left" size={30} color="black" />
        </View>
    );
}
export default BackIcon;

const styles = StyleSheet.create({
    backIcon: {
        flexDirection: 'row',
        width: 40,
        justifyContent: 'center',
      },
      icon: {
        backgroundColor: '#e6e3da',
        borderRadius: 60,
      },
});