import HomeScreen from '../screens/HomeScreen';
import MissionScreen from '../screens/MissionScreen';
import TimelineScreen from '../screens/TimelineScreen';
import SocialMediaScreen from '../screens/SocialMediaScreen';
import OverviewScreen from '../screens/OverviewScreen';
import AsteroidScreen from '../screens/AsteroidScreen';
import SpacecraftScreen from '../screens/SpacecraftScreen';
import ScienceScreen from '../screens/ScienceScreen';
import TeamScreen from '../screens/TeamScreen';
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
    },
    Overview: {
        screen: OverviewScreen
    },
    'The Asteroid': {
        screen: AsteroidScreen
    },
    'The Spacecraft': {
        screen: SpacecraftScreen
    },
    'Instruments and Science': {
        screen: ScienceScreen
    },
    'The Team': {
        screen: TeamScreen
    }
}, {
    initialRouteName: 'Home',
    contentComponent: sideMenu,
    drawerOpenRoute: 'openDrawer',
    drawerCloseRoute: 'closeDrawer',
    drawerToggleRoute: 'toggleDrawer',
})