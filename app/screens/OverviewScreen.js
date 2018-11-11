import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
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
    Right
} from 'native-base';

import headerStyle from '../styles/SideMenu.style';

// const trajectoryCards = [
//     {
//         title: 'Trajectory',
//         body: "The Psyche spacecraft is targeted to launch in summer 2022 and travel to the asteroid using solar-electric (low-thrust) propulsion, arriving in 2026, following a Mars flyby and gravity-assist in 2023. After arrival, the mission plan calls for 21 months spent at the asteroid, mapping it and studying its properties.",
//     },
//     {
//         title: 'Trajectory',
//         image: require('../assets/astrofallsOne.png')
//     }
// ];

// const orbitCards = [
//     {
//         title: 'Orbit',
//         body: "Once the spacecraft arrives at the asteroid in 2026, plans call for it to spend 21 months at the asteroid, performing science operations from four staging orbits, which become successively closer.",
//     },
//     {
//         title: 'Orbit',
//         image: require('../assets/astrofallsOne.png')
//     }
// ]; 


class OverviewScreen extends Component {
    render() {
        return (
           <Container>
               <Header style={headerStyle.sectionHeadingStyle}>
                    <Left>
                        <Icon
                            style={headerStyle.navIconStyle}
                            name="ios-menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                    <Body>
                        <Title>Overview</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <View style={styles.pageHeadingStyle}>
                        <Text style={styles.pageHeadingText}>Overview</Text>
                    </View>
                    {/* <View style={styles.roundedBoarder}> 
                        <Card style={styles.card}>
                            <Tabs tabBarUnderlineStyle={styles.tabUnderlineStyle} style={styles.overallTabStyle}>
                                <Tab heading="Mission" activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.activeTabTextStyle}>
                                    <CardItem style={styles.cardItemDark}>
                                        <Body>
                                            <Image source={require('../assets/astrofallsOne.png')} style={styles.cardImage}/>
                                            <Text style={styles.cardBodyTextLight}>
                                                Psyche is both the name of an asteroid orbiting the Sun between Mars and Jupiter — and the 
                                                name of a NASA space mission to visit that asteroid, led by Arizona State University. The 
                                                mission was chosen by NASA on January 4, 2017 as one of two missions for the agency’s Discovery 
                                                Program, a series of relatively low-cost missions to solar system targets.
                                            </Text>
                                        </Body>
                                    </CardItem>
                                </Tab>
                            </Tabs>
                        </Card>

                        <Card style={styles.card}>
                            <Tabs tabBarUnderlineStyle={styles.tabUnderlineStyle} style={styles.overallTabStyle}>
                                <Tab heading="Trajectory" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.tabTextStyle} activeTextStyle={styles.activeTabTextStyle}>
                                    <CardItem style={styles.cardItemDark}>
                                        <Body>
                                            <Image source={require('../assets/astrofallsOne.png')} style={styles.cardImage}/>
                                            <Text style={styles.cardBodyTextLight}>
                                                Psyche is both the name of an asteroid orbiting the Sun between Mars and Jupiter — and the 
                                                name of a NASA space mission to visit that asteroid, led by Arizona State University. The 
                                                mission was chosen by NASA on January 4, 2017 as one of two missions for the agency’s Discovery 
                                                Program, a series of relatively low-cost missions to solar system targets.
                                            </Text>
                                        </Body>
                                    </CardItem>
                                </Tab>
                                <Tab heading="Visualization" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.tabTextStyle} activeTextStyle={styles.activeTabTextStyle}>
                                    <CardItem style={styles.cardItemDark}>
                                        <Body>
                                            <Image source={require('../assets/astrofallsOne.png')} style={styles.cardImage}/>
                                        </Body>
                                    </CardItem>
                                </Tab>
                            </Tabs>
                        </Card>

                        <Card style={styles.card}>
                            <CardItem style={styles.cardTitle}>
                                <Text style={styles.cardTitleText}>Orbit</Text>
                            </CardItem>
                            <CardItem style={styles.cardItemDark}>
                                <Body>
                                    <Image source={require('../assets/astrofallsOne.png')} style={styles.cardImage}/>
                                    <Text style={styles.cardBodyTextLight}>
                                        Once the spacecraft arrives at the asteroid in 2026, plans call for it to spend 21 months
                                        at the asteroid, performing science operations from four staging orbits, which become successively closer.
                                    </Text>
                                    </Body>
                            </CardItem>
                        </Card>
                    </View> */}
                </Content>
           </Container>

        );
    }
}

const styles = StyleSheet.create({
    // roundedBoarder: {
    //     borderRadius: 20,
    // },
    pageHeadingText: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    // card: {
    //     flex: 0,
    //     borderRadius: 20,
    // },
    // cardTitle: {
    //     backgroundColor: '#a3415dff',
    //     borderTopLeftRadius: 20,
    //     borderTopRightRadius: 20,
        
    // },
    // cardTitleText: {
    //     color: 'black',
    //     fontFamily: 'Helvetica',
    //     fontWeight: 'bold',
    //     fontSize: 18
    // },
    // cardBodyTextLight: {
    //     paddingTop: 10,
    //     paddingBottom: 10,
    //     fontFamily: 'Helvetica',
    //     fontSize: 16,
    //     color: 'white'
    // },
    // cardBodyTextDark: {
    //     paddingTop: 10,
    //     fontFamily: 'Helvetica',
    //     fontSize: 16,
    //     color: 'black'
    // },
    // cardImage: {
    //     height: 175,
    //     width: '100%',
    //     borderRadius: 20,
    //     flex: 1
    // },
    // cardItemDark: {
    //     backgroundColor: 'black',
    //     borderBottomLeftRadius: 20,
    //     borderBottomRightRadius: 20,
    //     borderTopColor: 'black'
    // },
    // cardItemLight: {
    //     backgroundColor: 'white',
    //     borderRadius: 20,
    // },
    pageHeadingStyle: {
        width: '100%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#312245ff',
    },
    // tabStyle: {
    //     borderTopLeftRadius: 20,
    //     borderTopRightRadius: 20,
    //     backgroundColor: 'white',
    // },
    // activeTabStyle: {
    //     borderTopLeftRadius: 20,
    //     borderTopRightRadius: 20,
    //     backgroundColor: 'white',
    // },
    // tabTextStyle: {
    //     fontFamily: 'Helvetica',
    //     color: 'black'
    // },
    // activeTabTextStyle: {
    //     fontFamily: 'Helvetica',
    //     color: '#ed5b68ff'
    // },
    // tabUnderlineStyle: {
    //     backgroundColor: '#ed5b68ff'
    // },
    // overallTabStyle: {
    //     borderRadius: 20,
    //     backgroundColor: 'white'
    // }
  });
export default OverviewScreen;