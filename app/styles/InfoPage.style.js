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
        paddingBottom: '1%', // prevent cuttoff letters
        paddingLeft: '10%',
        paddingRight: '10%',
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
        paddingTop: '2%',
        paddingBottom: '5%',
        color: 'white',
    },
    pagePop: {
        width: '100%',
        backgroundColor: '#a3415dff'
    },
    content: {
        backgroundColor: '#140025',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageStyle: {
        backgroundColor: '#140025', // may replace w/ background image from GD students?
    },
    cardStyle: {
        backgroundColor: '#f79f27ff',
        paddingTop: '5%',
        paddingBottom: '5%',
        marginLeft: '5%',
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
    imageStyle: {
        marginTop: '2%',
        marginBottom: '2%',
        width: '100%',
        height: '20%'
    }


};