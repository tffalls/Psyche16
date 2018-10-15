import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './sideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import PickerComponent from  '../components/picker2'

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
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Section 1
                        </Text>
                        <View style={styles.navSectionStyle}>
                            {/* <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page1')}>
                                Page1
                            </Text> */}
                            <PickerComponent propsRoute={propsRoute}/>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Section 2
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Mission')}>
                                Page2
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                                Page3
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text>This is my fixed footer</Text>
                </View>
            </View>
        );
    }
}

sideMenu.propTypes = {
    navigation: PropTypes.object
};

export default sideMenu;