import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
  
    firstContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: colors.verdePrincipal,
        height: "20%",
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 10
    },
   

    containerItem: {
        justifyContent: "space-between",
        padding: width * 0.02,
        marginHorizontal: width * 0.012
    },

    secondContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 30,
        paddingTop: 40,
        marginBottom: 10,
    },

    title: {
        fontFamily: "Alata-Regular",
        fontWeight: "bold",
        fontSize: 24,
        color: colors.text,
    },
  

    subtitle: {
        fontFamily: "Alata-Regular",
        fontWeight: "400",
        fontSize: 14,
        color: colors.cinza,
    },

    images: {  
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 26,
        paddingBottom: 10,
        width: '100%'
        
    },

    imageContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 20
    },

    image: {
        width: "100%",
    },

    imageTitle: {
        fontFamily: "Alata-Regular",
        fontWeight: "bold",
        fontSize: 24,
        color: colors.background
    },

    imageSubtitle: {
        fontFamily: "Alata-Regular",
        fontWeight: "400",
        fontSize: 12,
        color: colors.background
    },

    overlay: {
        position: 'absolute',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingHorizontal: 40,
        paddingTop: 66
    },

  });