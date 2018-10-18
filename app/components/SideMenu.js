import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import {Body, Header, Left, Icon, Content} from 'native-base';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import PickerComponent from  '../components/DrawerPicker'

import styles from '../styles/SideMenu.style';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        //console.log(this.state.activeItemKey);
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        const propsRoute = this.props
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

                        <PickerComponent propsRoute={propsRoute} name="Mission"/>
                            
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