import React, { Component } from 'react';
import { Container, Header, View, Text, Content, Thumbnail, Button, Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
function HomeScreen({ navigation}) {
  navigation.setOptions({
    header: null,
    headerShown: false,
  });
  return (
    <Container style={{ justifyContent: 'center' }}>
      <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={{ flex: 1 }}>
        <Content>
          <View style={{ paddingTop: 150, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground
              source={require('./src/headerContent2.png')}
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
              onPress={() => navigation.navigate('About')}>
              <Text>About App</Text>
            </Button>
          </View>
        </Content>
      </LinearGradient>
    </Container>
  );
}

function IdentificationScreen({ navigation }) {
  navigation.setOptions({
    header: null,
    headerShown: false,
  });
  return (
    <Container>
      <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={{ flex: 1 }}>
      <Content>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Identification Screen</Text>
        </View>
      </Content>
      </LinearGradient>
    </Container>
  );
}

function AboutScreen({ navigation }) {
  navigation.setOptions({
    header: null,
    headerShown: false,
  });
  return (
    <Container>
      <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={{ flex: 1 }}>
      <Content>
        <View style={{ paddingTop:150, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Thumbnail large source={{ uri: uri }} />
          <Text style={{ padding:20, fontSize:30}}>IsyaratKu</Text>
          <Text style={{ padding: 10, fontSize: 22 }}>Creator : Muhammad Nur Kholis</Text>
          <Text style={{ padding: 10, fontSize: 22 }}>Version : 1.0</Text>
        </View>
      </Content>
      </LinearGradient>
    </Container>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Identification" component={IdentificationScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

