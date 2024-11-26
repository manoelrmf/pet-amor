import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#cebfab'
    },

    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 17,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: "bold",
    },

    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 30,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
        color: '#737380'

    },

    petList: {
        marginTop: 32,

    },

    pet: {
        padding: 24,
        borderRadius: 12,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    petProperty: {
        fontSize: 19,
        color: '#41414d',
        fontWeight: 'bold'
    },

    petValue: {
        marginTop: 8,
        fontSize: 17,
        marginBottom: 24,
        color: '#41414d',
        fontWeight: 'bold'

    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: "#e02041",
        fontSize: 15,
        fontWeight: 'bold'
    },

    logo: {
        width: 80,  
        height: 80,
        resizeMode: 'cover'
    },

    petName: {
        flexDirection: 'row',
        paddingLeft: 1
    },

    line: {
        height: 1, 
        backgroundColor: '#8e8170', 
        width: '100%', 
        marginVertical: 10, 
      },

})
