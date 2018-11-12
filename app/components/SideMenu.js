import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, ImageBackground } from 'react-native';
import {Accordion, Body, Header, Left, Icon, Content} from 'native-base';
import {DrawerNavigator, DrawerItems, withNavigationFocus} from 'react-navigation';

import styles from '../styles/SideMenu.style';

const dataArray = [
    {title: <Text style={styles.accordionHeaderText}>Mission</Text>}
];

class SideMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggleColor: 0,
            whiteAccordianText: styles.navItemStyleAccordian,
            normalAccordianText: styles.navItemStyle,
            oldRoute: '',
            overView: 1,
            theAsteroid: 0,
            theSpacecraft: 0,
            instrumentsAndSpace: 0,
            theTeam: 0,
        }
    }
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    toggleColor = () => () => {
        console.log('Here', routeName)
        switch(routeName){
            case 'Overview':
                this.setState({
                    overView: 0
                })
                break;
            default:
                break;
        }
    }
    myNavigateToScreen = (route) => () => {
        //Knows overview
        //calls some function to change the toggle color
        this.toggleColor()
        //Set to state
        this.setState({
            oldRoute: route
        }, () => {
            console.log('ASDADADADAD', this.state.oldRoute)
        })
        
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    renderMissionContent = () => {
        return (
            <ImageBackground
                source = {require('../assets/images/PsycheGradient.png')}
                style = {{
                    width: '100%'
                }}
            >
                <View style={styles.collapseView}>
                    <Text style={this.state.overView ? styles.navItemStyle : styles.navItemStyleAccordian} onPress={this.myNavigateToScreen('Overview')}>
                        {/* {this.checkFocusAcordian('Overview', 4)} */}
                        {console.log('Color', this.state.toggleColor)}
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
            </ImageBackground>
        )
    }
    checkFocus(routeName, routeIndex){
        console.log('Check FocusAccordian()')
        if(this.props.navigation.state.index === routeIndex){
            return (
                <Text style={styles.highlightedPage}>
                            {/* {console.log('Is this focused true?', this.props.navigation.isFocused())} */}
                            {routeName}
                </Text>
            )
        }
        else{
            return (
                <Text>
                        {/* {console.log('Is this focused true?', this.props.navigation.isFocused())} */}
                        {routeName}
                </Text>
            )
        }
    }
    checkFocusAcordian(routeName, routeIndex){
        // console.log('Check Focus()')
        if(this.props.navigation.state.index === routeIndex){
            return (
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Overview')}>
                            {/* {console.log('Is this focused true?', this.props.navigation.isFocused())} */}
                            {/* {routeName} */}
                            Overview
                </Text>
            )
        }
        else{
            return (
                <Text>
                        {/* {console.log('Is this focused true?', this.props.navigation.isFocused())} */}
                        {routeName}
                </Text>
            )
        }
    }

    render() {
        console.log('Route state:', this.props.navigation.state.index)
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header style={styles.sectionHeadingStyle}>
                        <Left>
                            <Icon
                                style={styles.navIconStyle}
                                name='arrow-back'
                                onPress={() => this.props.navigation.closeDrawer()}
                            />
                        </Left>
                        <Body></Body>
                    </Header>
                    <Content>
                        <Text
                            style={styles.view}
                            onPress={this.navigateToScreen('Home')}
                        >
                            {this.checkFocus('Home', 0)}
                        </Text>
                    
                        <Accordion
                            headerStyle = {styles.accordionHeaderStyle}
                            style = {styles.navSectionStyle}
                            dataArray = {dataArray}
                            expanded = {1}
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
                            {this.checkFocus('Timeline', 2)}
                        </Text>
                        
                        <Text
                            style={styles.view}
                            onPress={this.navigateToScreen('Social Media')}
                        >
                            {this.checkFocus('Social Media', 3)}
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

export default withNavigationFocus(SideMenu);