import DropdownMenu from 'react-native-dropdown-menu';  
import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native';
import CollapseView from 'react-native-collapse-view';
import { NavigationActions } from 'react-navigation';
import stylesNav from '../routing/sideMenu.style';

export default class Demo extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        //THIS LINE IS VEYR IMPORTANT YOU RETARDS fuck spelling btw 
        this.props.propsRoute.navigation.dispatch(navigateAction);
    }
    componentDidMount(){
        console.log("Props for nav", this.props)
    }

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    _renderCollapseView = (collapse) => {
        return (
            <View style={styles.collapseView}>
                <Text style={stylesNav.navItemStyle} onPress={this.navigateToScreen('Home')}>
                    Home
                </Text>
            </View>
        )
    }
    _renderView = (collapse) => {
        return (
            <View style={styles.view}>
                <Text>Toggle {collapse ? 'on' : 'off'}</Text>
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
    view: {
        height: 50,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    collapseView: {
        padding: 20
    },
    iconView: {
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
    }
});