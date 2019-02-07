import {Fonts} from '../components/Fonts';

export default {
    pageHeadingText: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 32,
        paddingTop: '5%',
        paddingBottom: '1%', // prevent cuttoff letters
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
        width: '80%',
    },
    overflowPageHeadingText: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 32,
        paddingBottom: '1%',
        paddingLeft: '10%',
        paddingRight: '10%', // prevent cuttoff letters
        color: 'white',
        width: '80%',
    },
    pageHeadingTextSmall: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 22,
        marginTop: '5%',
        paddingBottom: '1%', // prevent cuttoff letters
        paddingLeft: '10%',
        paddingRight: '10%', 
        color: 'white',
        width: '80%',
    },
    overflowPageHeadingTextSmall: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 22,
        paddingBottom: '1%', // prevent cuttoff letters
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
        width: '80%',
    },
    pageBodyText: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 20,
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '5%',
        paddingBottom: '5%',
        color: 'white',
    },
    pageBodyTextAlt: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 20,
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '5%',
        color: 'white',
    },
    webLinkStyle: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 20,
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '5%',
        color: '#ed5b68ff',
    },
    pagePop: {
        width: '100%',
        backgroundColor: '#a3415dff'
    },
    content: {
        backgroundColor: '#140025',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    pageStyle: {
        backgroundColor: '#140025', // may replace w/ background image from GD students?
    },
    cardStyle: {
        backgroundColor: '#f79f27ff',
        padding: '5%',
        borderRadius: 10,
        borderColor: '#f79f27ff',
        width: '90%',
    },
    cardHeader: {
        backgroundColor: '#f79f27ff',
    },
    cardBody: {
        backgroundColor: '#f79f27ff',
        height: 240,
        width: '100%',
        flex: 1,
    },
    cardText: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 18,
        color: '#140025',
    },
    cardCaptionText: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 18,
        color: '#140025',
        
    }, 
    cardCaptionSection: {
        backgroundColor: '#140025',
        borderRadius: 10,
    },
    teamPhoto: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%',
        width: '80%',
        height: '20%'
        
    },
    teamCaptionText: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 20,
        marginTop: '4%',
        marginBottom: '5%', // prevent cuttoff letters
        paddingLeft: '10%',
        paddingRight: '10%', 
        color: '#ed5b68ff',
        width: '80%',
    }


};