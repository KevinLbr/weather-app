import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text,
} from 'react-native';

import stylesApp, {colors} from '../../Style';

export default class Today extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>Today</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    view : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    } ,
    text : {
        color : 'white',
        margin : 50,
    }
});
