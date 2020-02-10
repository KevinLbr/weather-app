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

class Summary extends React.Component {

    render() {
        return (
            <View style={styles.view}>
                <Text>Summary</Text>
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
});


export default Summary;
