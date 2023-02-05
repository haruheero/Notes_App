import { AspectRatio } from "native-base";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    HeadBoxStyle:{
        alignItems: 'center',
        borderColor: "gray",
        borderWidth: 0.5,
        margin: 5,
        padding: 10,
        maxWidth: 400,
        AspectRatio:1,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        height: 180,
        justifyContent: 'center'
    },
    ImageBox: {
        width: "50%",
        borderRadius: 10,
    },
    TextBox: {
        width: "40%",
        alignItems: 'left',
    },
    TextStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})