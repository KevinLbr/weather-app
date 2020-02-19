import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    FlatList,
    Image,
} from 'react-native';

import stylesApp, {colors} from '../../Style';

export default class Today extends Component {
    constructor(props) {
        super(props);

        this.state = {
            globale_data: [
                {key: 'noon', name: 'Noon', img: require('.|./images/cloud.png'), temp: '-8°C'},
                {key: 'morning', name: 'Morning', img: require('../images/cloud-showers-heavy.png'), temp: '-4°C'},
                {key: 'day', name: 'Day', img: require('../images/cloud-sun-rain.png'), temp: '-3°C'},
                {key: 'evening', name: 'Evening', img: require('../images/cloud-sun.png'), temp: '-5°C'},
            ],
        };
    }

    render() {
        return (
            <View style={styles.view}>
                <FlatList data={this.state.globale_data}
                          renderItem={({item}) => (
                              <View style={styles.view_list}>
                                  <Text style={styles.item_list_name}>{item.name}</Text>
                                  <Image resizeMode='contain' style={styles.item_list_img} source={item.img}/>
                                  <Text style={styles.item_list_temp}>{item.temp}</Text>
                              </View>)}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    item_list_img: {
        maxWidth: 40,
        maxHeight: 40,
        flex: 1,
    },
    item_list_name: {
        fontSize: 20,
        fontFamily: 'Roboto',
        flex: 1,
        color: '#FFF',
    },
    item_list_temp: {
        textAlign: 'right',
        fontSize: 20,
        fontFamily: 'Roboto',
        flex: 1,
        color: '#FFF',
    },
    view_list: {
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    view: {
        padding: 20,
    },
    text: {
        color: 'white',
        margin: 50,
    },
});
