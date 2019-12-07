import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'purple',
    },

    imgIcon: {
        width: 100, 
        height: 100,
        shadowOffset:{  width: 5,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.3,
    },
    title: {
        fontSize: 28,
    },
    titleColor: {
        color: 'white',
    },
})