import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert
} from 'react-native';
import {
    Icon,
    Button,
    Container,
    Header,
    Content,
    Left
} from 'native-base';

class HomeScreen extends Component {
    render() {
        return (
           <Container>
               <Header>
                    <Left>
                        <Icon
                            name="ios-menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
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