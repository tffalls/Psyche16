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
import infoPageStyle from '../styles/InfoPage.style';
import {Fonts} from '../components/Fonts';

class ScienceScreen extends Component {
    render() {
        return (
           <Container>
                <Header style={headerStyle.sectionHeadingStyle}>
                    <Left style={{flex: 1}}>
                        <Icon
                            style={headerStyle.navIconStyle}
                            name='ios-menu'
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                    <Body style={{flex: 1}}></Body>
                    <Right style={{flex: 1}}></Right>
                </Header>   
                <Content contentContainerStyle={infoPageStyle.content} style={infoPageStyle.pageStyle}>
                <ImageBackground 
                        source={require('../assets/images/Background.jpg')}
                        style={{
                            width: '100%',
                            height: null,
                            flex: 1
                        }}
                    >
                        <Text style={infoPageStyle.pageHeadingText}>Instruments &</Text>
                        <Text style={infoPageStyle.overflowPageHeadingText}>Science</Text>
                        <Text style={infoPageStyle.overflowPageHeadingText}>Investigations</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche spacecraft will carry a multispectral imager, a gamma ray and neutron 
                            spectrometer, and a magnetometer, and will conduct radio science.
                        </Text>

                        <Text style={infoPageStyle.pageHeadingTextSmall}>The Psyche Multispectral Imager</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The Multispectral Imager provides high-resolution images using filters to discriminate 
                            between Psyche’s metallic and silicate constituents. The instrument consists of a pair 
                            of identical cameras designed to acquire geologic, compositional, and topographic data. 
                            The purpose of the second camera is to provide redundancy for mission-critical optical navigation. 
                            The team is based at Arizona State University.
                        </Text>

                        <Text style={infoPageStyle.pageHeadingTextSmall}>The Gamma Ray and Neutron</Text>
                        <Text style={infoPageStyle.overflowPageHeadingTextSmall}>Spectrometer</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The Gamma Ray and Neutron Spectrometer will detect, measure, and map Psyche’s elemental composition. 
                            The instrument is mounted on a 6-foot (2-meter) boom to distance the sensors from background radiation 
                            created by energetic particles interacting with the spacecraft and to provide an unobstructed field of 
                            view. The team is based at the Applied Physics Laboratory at Johns Hopkins University.
                        </Text>

                        <Text style={infoPageStyle.pageHeadingTextSmall}>Psyche Magnetometer</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche Magnetometer is designed to detect and measure the remanent magnetic field of the asteroid. It is 
                            composed of two identical high-sensitivity magnetic field sensors located at the middle and outer end of a 
                            6-foot (2-meter) boom. The team is based at Massachusetts Institute of Technology and the University of California 
                            Los Angeles.
                        </Text>

                        <Text style={infoPageStyle.pageHeadingTextSmall}>Radio Science</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche mission will use the X-band radio telecommunications system to measure Psyche’s gravity field to 
                            high precision. When combined with topography derived from onboard imagery, this will provide information on 
                            the interior structure of Psyche. The team is based at MIT and JPL.
                        </Text>

                        <Text style={infoPageStyle.pageHeadingTextSmall}>Deep Space Optical</Text>
                        <Text style={infoPageStyle.overflowPageHeadingTextSmall}>Communication (DSOC)</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche mission will test a sophisticated new laser communication technology that encodes data in photons 
                            (rather than radio waves) to communicate between a probe in deep space and Earth. Using light instead of radio 
                            allows the spacecraft to communicate more data in a given amount of time. The DSOC team is based at the Jet 
                            Propulsion Laboratory.
                        </Text>
                    </ImageBackground>
               </Content>
           </Container>

        );
    }
}
export default ScienceScreen;