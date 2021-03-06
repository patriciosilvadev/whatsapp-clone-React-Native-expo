import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        margin: 10,
    },

    icons: {
        height: 390,
        alignContent: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },

    pencil: {
        backgroundColor: '#313B42',
        width: 55,
        height: 55,
        borderRadius: 30,
        textAlign: 'center',
        padding: 15,
    },

    camera: {
        backgroundColor: '#0CB2A0',
        width: 60,
        height: 60,
        borderRadius: 30,
        textAlign: 'center',
        padding: 15,
        marginTop: 10
    }

});

export default styles;