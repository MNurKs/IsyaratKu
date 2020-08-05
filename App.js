import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { default as Home} from './src/Home';
import { default as About} from './src/About';
import { default as Identification} from './src/Identification';
import { default as Camera} from './src/Camera';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Identification" component={Identification} />
                <Stack.Screen name="Camera" component={Camera} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}
