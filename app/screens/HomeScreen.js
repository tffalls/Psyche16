import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Image
} from 'react-native';
import {
    Icon,
    Button,
    Container,
    Body,
    Header,
    Content,
    Left,
    Right
} from 'native-base';

import headerStyle from '../styles/SideMenu.style';

class HomeScreen extends Component {
    render() {
        return (
           <Container>
                {/* Display the header, including access to the navigation menu */}
                <Header style={headerStyle.homeSectionHeadingStyle}>
                    <Left>
                        <Icon
                            style={headerStyle.navIconStyle}
                            name='ios-menu'
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                    <Body>
                    </Body>
                    <Right>
                        <Image
                            source={require('../assets/images/icons/nasa_insignia.png')}
                            style={headerStyle.nasaInsigniaStyle}
                        />
                    </Right>
                </Header>
                <Content contentContainerStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                }}>
                    <Text>Home Screen</Text>
                </Content>
           </Container>

        );
    }
}
export default HomeScreen;