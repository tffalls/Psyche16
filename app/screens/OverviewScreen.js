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
} from 'native-base';

import headerStyle from '../styles/SideMenu.style';

const trajectoryCards = [
    {
        title: 'Trajectory',
        body: "The Psyche spacecraft is targeted to launch in summer 2022 and travel to the asteroid using solar-electric (low-thrust) propulsion, arriving in 2026, following a Mars flyby and gravity-assist in 2023. After arrival, the mission plan calls for 21 months spent at the asteroid, mapping it and studying its properties.",
    },
    {
        title: 'Trajectory',
        image: require('../assets/astrofallsOne.png')
    }
];

const orbitCards = [
    {
        title: 'Orbit',
        body: "Once the spacecraft arrives at the asteroid in 2026, plans call for it to spend 21 months at the asteroid, performing science operations from four staging orbits, which become successively closer.",
    },
    {
        title: 'Orbit',
        image: require('../assets/astrofallsOne.png')
    }
]; 


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
                    <Body/>
                </Header>
                <Content>
                    <View style={styles.pageHeadingStyle}>
                        <Text style={styles.pageHeadingText}>Overview</Text>
                    </View>
                    <View style={styles.roundedBoarder}> 
                        <Card style={styles.card}>
                            <CardItem style={styles.cardTitle}>
                                <Text style={styles.cardTitleText}>Mission</Text>
                            </CardItem>
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
                        </Card>

                        <DeckSwiper
                            dataSource={trajectoryCards}
                            renderItem={item =>
                            <Card style={styles.deckCard}>
                                <CardItem style={styles.cardTitle}>
                                    <Text style={styles.cardTitleText}>{item.title}</Text>
                                </CardItem>
                                <CardItem style={styles.cardItemDark}>
                                    <Body>
                                        {item.image &&
                                            <Image source={require('../assets/astrofallsOne.png')} style={styles.cardImage}/>
                                        }
                                        {item.body &&
                                            <Text style={styles.cardBodyTextLight}>
                                              {item.body}
                                            </Text>
                                        }
                                    </Body>
                                </CardItem>
                            </Card>
                            }
                        />


                      
                        <DeckSwiper
                            dataSource={orbitCards}
                            renderItem={item =>
                            <Card style={styles.deckCard}>
                                <CardItem style={styles.cardTitle}>
                                    <Text style={styles.cardTitleText}>{item.title}</Text>
                                </CardItem>
                                <CardItem style={styles.cardItemDark}>
                                    <Body>
                                        {item.image &&
                                            <Image source={require('../assets/astrofallsOne.png')} style={styles.cardImage}/>
                                        }
                                        {item.body &&
                                            <Text style={styles.cardBodyTextLight}>
                                              {item.body}
                                            </Text>
                                        }
                                    </Body>
                                </CardItem>
                            </Card>
                            }
                        />
                        
                    </View>
                </Content>
           </Container>

        );
    }
}

const styles = StyleSheet.create({
    roundedBoarder: {
        borderRadius: 20,
    },
    pageHeadingText: {
        fontWeight: "bold",
        fontSize: 24,
        color: "black"
    },
    card: {
        flex: 0,
        backgroundColor: "black",
        borderRadius: 20,
    },
    deckCard: {
        flex: 0,
        backgroundColor: "black",
        borderRadius: 20,
        elevation: 3
    },
    cardTitle: {
        backgroundColor: "#a3415dff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        
    },
    cardTitleText: {
        color: "black",
        fontFamily: "Helvetica",
        fontWeight: "bold",
        fontSize: 18
    },
    cardBodyTextLight: {
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: "Helvetica",
        fontSize: 16,
        color: "white"
    },
    cardBodyTextDark: {
        paddingTop: 10,
        fontFamily: "Helvetica",
        fontSize: 16,
        color: "black"
    },
    cardImage: {
        height: 175,
        width: "100%",
        borderRadius: 20,
        flex: 1
    },
    cardItemDark: {
        backgroundColor: "black",
        borderRadius: 20,
    },
    cardItemLight: {
        backgroundColor: "white",
        borderRadius: 20,
    },
    // imageBackgroundStyle: {
    //     width: "100%",
    //     height: 60,
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center"
    // }
    pageHeadingStyle: {
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#312245ff",
    }
  });
export default OverviewScreen;