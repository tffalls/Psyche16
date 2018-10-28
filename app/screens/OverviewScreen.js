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
} from 'native-base';

import headerStyle from '../styles/SideMenu.style';

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
                    <ImageBackground source={require('../assets/PsycheGradientSmall.png')} style={styles.imageBackgroundStyle}>
                        <Text style={styles.pageHeaderText}>Overview</Text>
                    </ImageBackground>
                    <Card style={styles.card}>
                        <CardItem style={styles.cardTitle}>
                            <Text style={styles.cardTitleText}>Mission</Text>
                        </CardItem>
                        <CardItem style={styles.cardItemDark}>
                            <Body>
                                <Image source={require('../assets/astrofallsOne.png')} style={styles.cardImage}/>
                                <Text style={styles.cardBodyText}>
                                    Psyche is both the name of an asteroid orbiting the Sun between Mars and Jupiter — and the 
                                    name of a NASA space mission to visit that asteroid, led by Arizona State University. The 
                                    mission was chosen by NASA on January 4, 2017 as one of two missions for the agency’s Discovery 
                                    Program, a series of relatively low-cost missions to solar system targets.
                                </Text>
                                </Body>
                        </CardItem>
                    </Card>
                </Content>
           </Container>

        );
    }
}

const styles = StyleSheet.create({
    pageHeaderText: {
        fontWeight: "bold",
        fontSize: 24,
        color: "black"
    },
    card: {
        flex: 0,
        backgroundColor: "black"
    },
    cardTitle: {
        backgroundColor: "#a3415dff",
    },
    cardTitleText: {
        color: "black",
        fontFamily: "Helvetica",
        fontWeight: "bold",
        fontSize: 18
    },
    cardBodyText: {
        paddingTop: 10,
        fontFamily: "Helvetica",
        fontSize: 16,
        color: "white"
    },
    cardImage: {
        height: 175,
        width: "100%",
        flex: 1
    },
    cardItemDark: {
        backgroundColor: "black"
    },
    imageBackgroundStyle: {
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
  });
export default OverviewScreen;