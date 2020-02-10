/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import stylesApp, {colors} from '../Style';
import Summary from './Summary';
import NavigationSummary from './NavigationSummary';

class Home extends React.Component {

    constructor(props) {
        super(props);

        setTimeout(() => {this.props.navigation.navigate('NavigationSummary')}, 1000);
    }

    render() {
        return (
            <View style={styles.view}>
              <View style={styles.container_intro}>
                <Text style={styles.text}>Welcome to</Text>
              </View>
                <View style={styles.container_img}>

                    <Image source={require('./images/logo.png')} style={styles.logo}/>
                    <Text style={styles.title}>Weather Guide</Text>
                    <Text style={styles.text}>Forecast & Widgets</Text>
                </View>
              <View style={styles.container_intro}>
              </View>
            </View>
        );
    }
}

const navigationOptions =  {
    headerShown: false, // hide header
}

const Stack = createStackNavigator(
    {
        NavigationSummary: {screen: NavigationSummary, navigationOptions},
        Home: {screen: Home, navigationOptions},
    },
    {
        initialRouteName: 'Home',
    }
);


export default createAppContainer(Stack);

const styles = StyleSheet.create({
    view: {
        marginTop: 40,
        flex: 1,
        backgroundColor: colors.primaryColorConst,
    },
    container_img: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_intro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    title: {
        marginTop: 20,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
        fontFamily: 'Roboto-Bold',
    },
    text: {
        // marginTop: 0,
        fontSize: 23,
        fontWeight: 'normal',
        color: '#FFF',
        fontFamily: 'Roboto-Bold',
    },
});
