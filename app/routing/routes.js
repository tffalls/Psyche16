import HomeScreen from '../screens/HomeScreen';
import MissionScreen from '../screens/MissionScreen';
import TimelineScreen from '../screens/TimelineScreen';
import SocialMediaScreen from '../screens/SocialMediaScreen';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import sideMenu from './sideMenu'

export default DrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Mission: {
        screen: MissionScreen
    },
    Timeline: {
        screen: TimelineScreen
    },
    'Social Media': {
        screen: SocialMediaScreen
    }
}, {
        initialRouteName: 'Home',
        contentComponent: sideMenu,
        drawerOpenRoute: 'openDrawer',
        drawerCloseRoute: 'closeDrawer',
        drawerToggleRoute: 'toggleDrawer'
    })