import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Summary from './Summary';

const Drawer = createDrawerNavigator();

function NavigationSummary() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Summary" component={Summary} />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <NavigationSummary />
        </NavigationContainer>
    );
}
