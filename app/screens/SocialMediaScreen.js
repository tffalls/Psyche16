import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    WebView
} from 'react-native';
import {
    Icon,
    Button,
    Container,
    Header,
    Content,
    Left,
    Body,
    Tab,
    Tabs
} from 'native-base';

import headerStyle from '../styles/SideMenu.style';
import pageStyle from '../styles/SocialMedia.style';

class SocialMediaScreen extends Component {
    render() {
        return (
           <Container>
               <Header style={headerStyle.sectionHeadingStyle} hasTabs>
                    <Left>
                        <Icon
                            style={headerStyle.navIconStyle}
                            name="ios-menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                    <Body></Body>
                </Header>
                <Tabs tabBarUnderlineStyle={pageStyle.underlineStyle} tabContainerStyle={pageStyle.tabContainer}>
                    <Tab
                        heading = "Instagram"
                        tabStyle={pageStyle.inactiveTab}
                        activeTabStyle={pageStyle.activeTab}
                        textStyle={pageStyle.inactiveText}
                        activeTextStyle={pageStyle.activeText}
                    >
                        <WebView
                            source={{uri: 'https://www.instagram.com/nasapsyche/'}}
                        />
                    </Tab>

                    <Tab
                        heading = "Facebook"
                        tabStyle={pageStyle.inactiveTab}
                        activeTabStyle={pageStyle.activeTab}
                        textStyle={pageStyle.inactiveText}
                        activeTextStyle={pageStyle.activeText}
                    >
                        <WebView
                            source={{uri: 'https://www.facebook.com/NASAPsyche/'}}
                        />
                    </Tab>

                    <Tab
                        heading = "Twitter"
                        tabStyle={pageStyle.inactiveTab}
                        activeTabStyle={pageStyle.activeTab}
                        textStyle={pageStyle.inactiveText}
                        activeTextStyle={pageStyle.activeText}
                    >
                        <WebView
                            source={{uri: 'https://twitter.com/NASAPsyche'}}
                        />
                    </Tab>
                </Tabs>
           </Container>

        );
    }
}
export default SocialMediaScreen;