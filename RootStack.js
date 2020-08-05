import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import About from './About';
import Identification from './Identification';
import Camera from './Camera';

const Stack = createStackNavigator();

function rootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Identification" component={Identification} />
                <Stack.Screen name="Camera" component={Camera} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default rootStack;