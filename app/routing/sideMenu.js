import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './sideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import {Header, Left, Icon} from 'native-base';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import PickerComponent from  '../components/DrawerPicker'

class sideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    componentDidMount() {
        console.log("Props for nav111111111111", this.props)
    }

    render() {
        const propsRoute = this.props
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header>
                        <Left>
                            <Icon
                                name="arrow-back"
                                onPress={() => this.props.navigation.closeDrawer()}
                            />
                        </Left>
                    </Header>
                    <View style={styles.navSectionStyle}>
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
                    </View>
                </ScrollView>
            </View>
        );
    }
}

sideMenu.propTypes = {
    navigation: PropTypes.object
};

export default sideMenu;