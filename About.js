import React from 'react';
import { Container, Header, View, Text, Content, Thumbnail, Button, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

export default function About({ navigation }) {

    return (
        <Container style={{ justifyContent: 'center' }}>
            <Content>
                <View style={{ paddingTop: 150, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ImageBackground
                        source={require('./headerContent2.png')}
                        style={{}}
                    >
                    </ImageBackground>
                    <Thumbnail large source={{ uri: uri }} />
                    <Text style={{ paddingTop: 20, fontSize: 20 }}>IsyaratKu</Text>
                </View>
                <View style={{ padding: 20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button rounded block
                        onPress={() => navigation.navigate('Identification')}>
                        <Text>Identification Sign Language</Text>
                    </Button>
                </View>
                <View style={{ padding: 20, paddingTop: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button rounded block
                        onPress={() => navigation.navigate('Tentang')}>
                        <Text>About App</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    );
}