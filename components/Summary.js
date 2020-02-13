/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {StyleSheet, View, Text, Image, Button, ImageBackground, TouchableHighlight} from 'react-native';
import stylesApp, {colors} from '../Style';

class Summary extends React.Component {

    _onPressButton() {
        // TODO
    }

    render() {
        return (
            <ImageBackground style={styles.view} source={require('./images/background.png')} resizeMode='cover'>
                <Text style={[styles.white, styles.name]}>Alberta</Text>
                <View style={styles.flex}>
                    <View style={styles.container_img}>
                        <Image resizeMode='contain' style={styles.tmp_img} source={require('./images/cloud.png')}/>
                    </View>

                    <View style={styles.container_text}>
                        <Text style={[styles.white, styles.text, styles.tmp]}>
                            -7°
                        </Text>
                        <Text style={[styles.white, styles.text]}>Foggy weather</Text>
                        <Text style={[styles.white, styles.text]}>68°/56 <Image source={''}/> 0%</Text>
                    </View>
                </View>

                <View style={styles.container_btn}>
                    <TouchableHighlight style={styles.btn} onPress={this._onPressButton}>
                        <Button
                            color={colors.primaryColorConst}
                            title="+"
                            onPress={() => this._onPressButton}
                        />
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        right: 0,
        marginTop: 40,
        flex: 1,
        backgroundColor: colors.primaryColorConst,
    },
    container_img : {
        flex: 1
    },
    container_text : {
        flex : 2
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    name: {
        fontFamily: 'Roboto-Bold',
    },
    white: {
        color: '#FFF',
    },
    text: {
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
    tmp: {
        fontSize: 150,
        textAlign: 'center',
    },
    container_btn: {
        textAlign: 'right',
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 50,
    },
    tmp_img: {
        width: 100,
        height: 100,
    },
    btn: {
        backgroundColor: colors.primaryGradientColorEndConst,
        width: 50,
        height: 50,
        borderRadius: 100,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 7,
        elevation: 10,
    },
});


export default Summary;
