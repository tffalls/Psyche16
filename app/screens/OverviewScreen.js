import React, {Component} from 'react';
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
import {Fonts} from '../components/Fonts'

class OverviewScreen extends Component {
    render() {
        return (
           <Container>
               <Header style={headerStyle.sectionHeadingStyle}>
                    <Left style={{flex: 1}}>
                        <Icon
                            style={headerStyle.navIconStyle}
                            name="ios-menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                    <Body style={{flex:1}}>
                        {/* <Text style={styles.pageHeadingText}>Overview</Text> */}
                    </Body>
                    <Right style={{flex:1}} />
                </Header>
                <Content contentContainerStyle={styles.content} style={styles.pageStyle}>
                    <Text style={styles.pageHeadingText}>Mission Overview</Text>
                    <Text style={styles.pageBodyText}>
                        Psyche is both the name of an asteroid orbiting the Sun between Mars and Jupiter 
                        — and the name of a NASA space mission to visit that asteroid, led by Arizona 
                        State University. The mission was chosen by NASA on January 4, 2017 as one of two 
                        missions for the agency’s Discovery Program, a series of relatively low-cost missions 
                        to solar system targets.
                    </Text>
                    <Text style={styles.pageHeadingText}>Trajectory</Text>
                    <Text style={styles.pageBodyText}>
                        The Psyche spacecraft is targeted to launch in summer 2022 and travel to the asteroid 
                        using solar-electric (low-thrust) propulsion, arriving in 2026, following a Mars flyby 
                        and gravity-assist in 2023. After arrival, the mission plan calls for 21 months spent 
                        at the asteroid, mapping it and studying its properties.
                    </Text>
                    <Text style={styles.pageHeadingText}> Orbit</Text>
                    <Text style={styles.pageBodyText}>
                        Once the spacecraft arrives at the asteroid in 2026, plans call for it to spend 21 months 
                        at the asteroid, performing science operations from four staging orbits, which become successively closer.
                    </Text>
                    <Card style={styles.cardStyle}>
                        <CardItem style={styles.cardHeader}>
                            <Body>
                                <Text style={styles.cardText}>Journey to a Metal World</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardbody style={styles.cardBody}>
                            <WebView
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                style={{width: '100%'}}
                                source={{ uri: "https://www.youtube.com/embed/aExTQGcIGKo" }}
                            />
                        </CardItem>
                    </Card>
                </Content>
           </Container>
        );
    }
}

const styles = StyleSheet.create({
    pageHeadingText: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 32,
        paddingTop: '5%',
        paddingBottom: '1%', // prevent cuttoff letters
        color: 'white',
        width: '80%',
    },
    pageBodyText: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 20,
        padding: '10%',
        color: 'white',
    },
    // titleLeftStyle: {
    //     width: '80%',
    // },
    content: {
        backgroundColor: '#140025',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageStyle: {
        backgroundColor: '#140025', // may replace w/ background image from GD students?
    },
    cardStyle: {
        backgroundColor: '#f79f27ff',
        padding: '5%',
        borderRadius: 10,
        borderColor: '#f79f27ff',
        width: '90%',
    },
    cardHeader: {
        backgroundColor: '#f79f27ff',
    },
    cardBody: {
        backgroundColor: '#f79f27ff',
        height: 200,
        width: '100%',
        flex: 1,
    },
    cardText: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 18,
        color: '#140025',
    }

  });
export default OverviewScreen;