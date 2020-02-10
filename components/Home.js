/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';
import stylesApp, {colors} from '../Style';

class Home extends React.Component {

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


export default Home;
