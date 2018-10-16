import { Platform } from 'react-native';

export default {
    container: {
        paddingTop: 20,
        flex: 1
    },
    navItemStyle: {
        padding: 10
    },
    navSectionStyle: {
        backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    },
    ...Platform.select({
        ios: {
            view: {
                height: 60,
                padding: 20,
                justifyContent: 'center',
                backgroundColor: '#ffffff',
            }
        },
        android: {
            view: {
                height: 50,
                padding: 20,
                justifyContent: 'center',
                backgroundColor: '#ffffff',
            }
        },
    }),  
};