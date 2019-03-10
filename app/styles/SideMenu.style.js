import { Platform } from 'react-native';
import {Fonts} from '../components/Fonts';

export default {
    container: {
        flex: 1,
        backgroundColor : '#140025'
    },
    navItemStyle: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 18,
        padding: 10,
        color: 'white',
        letterSpacing: 2
    },
    navItemStyleColored: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 18,
        padding: 10,
        color: '#f79f27ff',
        letterSpacing: 2
    },
    navSectionStyle: {
        backgroundColor: 'transparent'
    },
    view: {
        height: 65,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#140025',
        fontFamily: Fonts.RobotoLight,
        fontSize: 20,
        color: 'white',
        letterSpacing: 2,
        
    },
    navIconStyle: {
        paddingTop: 12,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        color: '#f79f27ff'
    },
    sectionHeadingStyle: {
        backgroundColor: '#140025',
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
        letterSpacing: 2,        
    },
    accordionHeaderStyle: {
        padding: 16,
        backgroundColor: '#140025'
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