import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import Summary from './Summary';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}


function NavigationSummary() {
    return (
        <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
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
