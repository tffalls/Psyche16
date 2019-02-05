import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
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
    Card,
    CardItem,
    DeckSwiper,
    Tab,
    Tabs,
    Title,
    Right,
} from 'native-base';

import headerStyle from '../styles/SideMenu.style';
import teamPageStyle from '../styles/TeamPageStyle.style';
import { Fonts } from '../components/Fonts';


class TeamScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={headerStyle.sectionHeadingStyle}>
                    <Left style={{ flex: 1 }}>
                        <Icon
                            style={headerStyle.navIconStyle}
                            name="ios-menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                    <Body style={{ flex: 1 }}>
                        {/* <Text style={styles.pageHeadingText}>Overview</Text> */}
                    </Body>
                    <Right style={{ flex: 1 }} />
                </Header>

                <Content contentContainerStyle={teamPageStyle.content} style={teamPageStyle.pageStyle}>
                    <ImageBackground
                        source={require('../assets/images/Background.jpg')}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <Text style={teamPageStyle.pageHeadingText}>The Team</Text>
                        <Text />
                        <Text />
                        <Text style={teamPageStyle.pageHeadingTextSmall}>Principle Investigator</Text>
                        <Image
                            source={require('../assets/images/team/Lindy34Half.jpg')}
                            style={teamPageStyle.teamPhoto}
                        />
                        <Text style={teamPageStyle.teamCaptionText}>Lindy Elkins-Tanton</Text>

                        <Text />
                        <Text style={teamPageStyle.pageHeadingTextSmall}>Deputy Principle</Text>
                        <Text style={teamPageStyle.overflowPageHeadingTextSmall}>Investigator</Text>
                        <Image
                            source={require('../assets/images/team/JimBell.jpg')}
                            style={teamPageStyle.teamPhoto}
                        />
                        <Text style={teamPageStyle.teamCaptionText}>Jim Bell</Text>

                        <Text />
                        <Image
                            source={require('../assets/images/team/GroupShot.jpg')}
                            style={teamPageStyle.teamPhoto}
                        />
                        <Text style={teamPageStyle.pageBodyTextAlt}>To see more of the team, visit the </Text>
                        <Text style={teamPageStyle.webLinkStyle}>Psyche Website.</Text>
                    </ImageBackground>
                </Content>
            </Container>
        );
    }
}

export default TeamScreen;