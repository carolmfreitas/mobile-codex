import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    scroll_view: {
        backgroundColor: '#272b30',
    },
    card: {
        marginTop: 20,
    },
    card_header: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    card_header_text: {
        color: '#e9ecef',
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    card_body: {
        paddingHorizontal: 10,
        paddingTop: 50,
        paddingBottom: 30,
    },
    view_email: {
        width: '100%',
    },
    email_label_danger: {
        color: '#ee5f5b',
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'left',
        marginLeft: 16,
        marginRight: 16,
    },
    email_label: {
        color: '#52575c',
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'left',
        marginLeft: 16,
        marginRight: 16,
    },
    email_text_input: {
        borderBottomWidth: 3,
        borderBottomColor: '#52575c',
        fontSize: 28,
        color: '#c2cad1',
        marginLeft: 15,
        marginRight: 15,
    },
    view_password: {
        width: '100%',
    },
    password_label_danger: {
        color: '#ee5f5b',
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'left',
        marginLeft: 16,
        marginRight: 16,
    },
    password_label: {
        color: '#52575c',
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'left',
        marginLeft: 16,
        marginRight: 16,
    },
    view_password_text_input: {
      flexDirection: 'row'
    },
    password_text_input: {
        borderBottomWidth: 3,
        borderBottomColor: '#52575c',
        fontSize: 28,
        color: '#c2cad1',
        marginLeft: 15,
        flex: 0.9,
    },
    password_icon_eye: {
        borderBottomWidth: 3,
        borderBottomColor: '#52575c',
        fontSize: 28,
        color: '#c2cad1',
        marginLeft: 15,
        marginRight: 15,
    }
})