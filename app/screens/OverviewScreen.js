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
    Right,
} from 'native-base';

import headerStyle from '../styles/SideMenu.style';\

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
                        <Title style={styles.pageHeadingText}>Overview</Title>
                    </Body>
                    <Right style={{flex:1}} />
                </Header>
                <Content>
                </Content>
           </Container>
        );
    }
}

const styles = StyleSheet.create({
    pageHeadingText: {
        paddingLeft: '10%',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 22,
        paddingTop: '10%',
        color: 'white'
    },
    pageHeadingStyle: {
        width: '100%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#312245ff',
    },
  });
export default OverviewScreen;