import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import {Accordion, Body, Header, Left, Icon, Content} from 'native-base';
import {DrawerNavigator, DrawerItems} from 'react-navigation';

import styles from '../styles/SideMenu.style';

const dataArray = [
    {title: <Text style={styles.accordionHeaderText}>Mission</Text>}
];

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    renderMissionContent = () => {
        return (
            <View style={styles.collapseView}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Overview')}>
                    Overview
                </Text>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('The Asteroid')}>
                    The Asteroid
                </Text>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('The Spacecraft')}>
                    The Spacecraft
                </Text>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Instruments and Science')}>
                    Instruments and Science
                </Text>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('The Team')}>
                    The Team
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header style={styles.sectionHeadingStyle}>
                        <Left>
                            <Icon
                                style={styles.navIconStyle}
                                name="arrow-back"
                                onPress={() => this.props.navigation.closeDrawer()}
                            />
                        </Left>
                        <Body></Body>
                    </Header>
                    <Content style={styles.navSectionStyle}>
                        <Text
                            style={styles.view}
                            onPress={this.navigateToScreen('Home')}
                        >
                            Home
                        </Text>

                        <Accordion
                            headerStyle = {styles.accordionHeaderStyle}
                            style = {styles.navSectionStyle}
                            dataArray = {dataArray}
                            expanded = {0}
                            icon = 'md-arrow-dropdown'
                            expandedIcon = 'md-arrow-dropup'
                            iconStyle = {styles.icon}
                            expandedIconStyle = {styles.icon}
                            renderContent = {this.renderMissionContent}
                        />

                        <Text 
                            style={styles.view}
                            onPress={this.navigateToScreen('Timeline')}
                        >
                            Timeline
                        </Text>
                        
                        <Text
                            style={styles.view}
                            onPress={this.navigateToScreen('Social Media')}
                        >
                            Social Media
                        </Text>
                    </Content>
                </ScrollView>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;