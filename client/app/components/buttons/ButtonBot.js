import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native';

function ButtonBot(props) {
    return (
        <Pressable>
            <View style={styles.btnStart}>
                <Text style={styles.textStart}>{props.text}</Text>
            </View>
        </Pressable>
    );
};

export default ButtonBot;

const styles = StyleSheet.create({
    btnStart: {
        margin: 8,
        padding: 22,
        borderRadius: 30,
        backgroundColor: '#C8C23C',
        marginBottom: 50,
        // marginLeft: 30,
        // marginRight: 30,
    },
    textStart: {
        color: 'white',
        fontSize: 20,
        lineHeight: 24,
        fontWeight: "700",
        textAlign: 'center',
    }
});