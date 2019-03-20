import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA"
    },

    list: {
        padding: 20
    },

    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5, 
        padding: 20,
        marginBottom: 20
    },

    productTitle:{
        fontSize: 18,
        fontWeight: "bold" ,
        color: "#333"
    },
    productDescription: {
        color: "#999",
        fontSize: 16,
        marginTop: 5,
        lineHeight: 24
    },

    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },

    productButtonText: {
        fontSize: 16,
        color: "#DA552F"
    }
});

export default styles;