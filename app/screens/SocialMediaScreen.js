import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    WebView,
    Image
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
    Tabs,
    TabHeading,
    //Image
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
                        heading={ 
                            <TabHeading style={pageStyle.activeTab}>
                                <Image 
                                    source={require('../assets/images/icons/InstagramGradient_YellowtoOrange-03.png')}
                                    style={{width: 32, height: 32}}
                                />
                            </TabHeading>}
                        tabStyle={pageStyle.inactiveTab}
                        activeTabStyle={pageStyle.activeTab}
                    >
                        <WebView
                            source={{uri: 'https://www.instagram.com/nasapsyche/'}}
                        />
                    </Tab>

                    <Tab
                        heading={ 
                            <TabHeading style={pageStyle.activeTab}>
                                <Image 
                                    source={require('../assets/images/icons/FacebookGradient_YellowtoOrange.png')}
                                    style={{width: 32, height: 32}}
                                />
                            </TabHeading>}
                        tabStyle={pageStyle.inactiveTab}
                        activeTabStyle={pageStyle.activeTab}
                    >
                        <WebView
                            source={{uri: 'https://www.facebook.com/NASAPsyche/'}}
                        />
                    </Tab>

                    <Tab
                        heading={ 
                            <TabHeading style={pageStyle.activeTab}>
                                <Image 
                                    source={require('../assets/images/icons/TwitterGradient_YellowtoOrange-08.png')}
                                    style={{width: 32, height: 32}}
                                />
                            </TabHeading>}
                        tabStyle={pageStyle.inactiveTab}
                        activeTabStyle={pageStyle.activeTab}
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