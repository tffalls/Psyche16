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

class TeamScreen extends Component {
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
                    <Body></Body>
               </Header>
               <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
               }}>
                   <Text>Team Screen</Text>
               </Content>
           </Container>

        );
    }
}
export default TeamScreen;