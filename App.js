/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Body
} from 'native-base';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <MyApp/>
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header>
      <Left>
        <Icon
          name="arrow-back"
          onPress={() => props.navigation.closeDrawer()}
        />
      </Left>
      <Body></Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
}, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'openDrawer',
    drawerCloseRoute: 'closeDrawer',
    drawerToggleRoute: 'toggleDrawer'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
