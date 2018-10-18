import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {
    Icon,
    Button,
    Container,
    Header,
    Content,
    Left,
    Body
} from 'native-base';

import headerStyle from '../styles/SideMenu.style';

class ScienceScreen extends Component {
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
                    <Body></Body>
                </Header>
                <Content contentContainerStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                }}>
                   <Text>Science Screen</Text>
               </Content>
           </Container>

        );
    }
}
export default ScienceScreen;