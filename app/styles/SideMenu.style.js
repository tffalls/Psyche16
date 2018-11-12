import { Platform } from 'react-native';
import {Fonts} from '../components/Fonts';

export default {
    container: {
        flex: 1,
        backgroundColor : '#312245ff'
    },
    navItemStyle: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 18,
        padding: 10,
        color: 'black'
    },
    navSectionStyle: {
        backgroundColor: 'transparent'
    },
    view: {
        height: 60,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#312245ff',
        fontFamily: Fonts.RobotoLight,
        fontSize: 20,
        color: 'white'
    },
    navIconStyle: {
        paddingTop: 12,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        color: '#f79f27ff'
    },
    sectionHeadingStyle: {
        backgroundColor: '#312245ff',
        borderBottomWidth: 0
    },
    collapseView: {
        padding: 10,
        paddingLeft: 30,
        flex: 1
    },
    icon: {
        color: '#f79f27ff'
    },
    accordionHeaderText: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 20,
        color: 'white',
    },
    accordionHeaderStyle: {
        padding: 16,
        backgroundColor: '#312245ff'
    },
    // not used currently
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    }, 
    highlightedPage: {
        color: '#f79f27ff',
    },
    navItemStyleAccordian: {
        padding: 10,
        color: 'white',
    },
};