import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Button, Platform } from 'react-native';
import {Icon} from 'native-base';
import CollapseView from 'react-native-collapse-view';
import { NavigationActions } from 'react-navigation';
import stylesNav from '../routing/sideMenu.style';

export default class DrawerPicker extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        // THIS LINE IS VERY IMPORTANT
        this.props.propsRoute.navigation.dispatch(navigateAction);
    }
    componentDidMount(){
        console.log("Props for nav", this.props)
    }

    constructor(props) {
        super(props);
    }

    _renderCollapseView = (collapse) => {
        return (
            <View style={styles.collapseView}>
                <Text style={stylesNav.navItemStyle} onPress={this.navigateToScreen('Overview')}>
                    Overview
                </Text>
                <Text style={stylesNav.navItemStyle} onPress={this.navigateToScreen('The Asteroid')}>
                    The Asteroid
                </Text>
                <Text style={stylesNav.navItemStyle} onPress={this.navigateToScreen('The Spacecraft')}>
                    The Spacecraft
                </Text>
                <Text style={stylesNav.navItemStyle} onPress={this.navigateToScreen('Instruments and Science')}>
                    Instruments and Science
                </Text>
                <Text style={stylesNav.navItemStyle} onPress={this.navigateToScreen('The Team')}>
                    The Team
                </Text>
            </View>
        )
    }
    _renderView = (collapse) => {
        return (
            <View style={styles.view}>
                <View style={styles.iconView}>
                    <Text
                        style={styles.font}
                    >
                        {this.props.name}
                    </Text>
                    <Icon
                        name = {collapse ? 'md-arrow-dropup' : 'md-arrow-dropdown'}
                    />
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CollapseView
                    renderView={this._renderView}
                    renderCollapseView={this._renderCollapseView}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009688',
    },
    collapseView: {
        padding: 10,
        paddingLeft: 30,
        flex: 1
    },
    iconView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica',
        fontWeight: 'bold'
    },
    font: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 16
    },
    ...Platform.select({
        ios: {
            view: {
                height: 60,
                padding: 20,
                justifyContent: 'center',
                backgroundColor: '#ffffff'
            }
        },
        android: {
            view: {
                height: 50,
                padding: 20,
                justifyContent: 'center',
                backgroundColor: '#ffffff'
            }
        },
    }),  
});