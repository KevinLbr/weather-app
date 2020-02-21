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

import Hr from 'react-native-hr-component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

import stylesApp, {colors} from '../../Style';

export default class Today extends Component {
    constructor(props) {
        super(props);

        this.state = {
            globale_data: [
                {key: 'noon', name: 'Noon', img: require('../images/cloud.png'), temp: '-8°C'},
                {key: 'morning', name: 'Morning', img: require('../images/cloud-showers-heavy.png'), temp: '-4°C'},
                {key: 'day', name: 'Day', img: require('../images/cloud-sun-rain.png'), temp: '-3°C'},
                {key: 'evening', name: 'Evening', img: require('../images/cloud-sun.png'), temp: '-5°C'},
            ],
            hourly_data: [
                {key: "5", name: '5 PM', img: require('../images/cloud.png'), temp: '-8°C'},
                {key: "6", name: '6 PM', img: require('../images/cloud-showers-heavy.png'), temp: '-5°C'},
                {key: "7", name: '7 PM', img: require('../images/cloud-sun-rain.png'), temp: '-4°C'},
                {key: "8", name: '8 PM', img: require('../images/cloud-sun.png'), temp: '-4°C'},
            ],
        };
    }

    mainPart = () => {
        return (
            <FlatList data={this.state.globale_data} style={styles.flat_list}
                      renderItem={({item}) => (
                          <View style={styles.view_list}>
                              <Text style={styles.item_list_name}>{item.name}</Text>
                              <Image resizeMode='contain' style={styles.item_list_img} source={item.img}/>
                              <Text style={styles.item_list_temp}>{item.temp}</Text>
                          </View>)}
            />
        );
    };

    expendedPart = () => {
        return (
            <View style={styles.container_expended_all}>
                <Hr lineColor="rgba(255,255,255,0.15)" width={1} textPadding={0} text=" "/>

                <Text style={styles.title_extended}>EXTENDED FORECAST</Text>

                <View style={{height: 70}}>
                    <View style={styles.container_extended}>
                        <FontAwesomeIcon icon={faInfoCircle} color={'#FFF'} style={styles.info}/>
                        <Text style={styles.text_extended}>Expect rainy weather Sunday evening through late
                            monday
                            night</Text>
                    </View>
                </View>
                <Hr lineColor="rgba(255,255,255,0.15)" width={1} textPadding={0} text=" "/>
            </View>
        );
    };

    hourlyPart = () => {
        return (
            <View style={styles.container_hourly}>
                <Text style={styles.title_hourly}>Hourly</Text>

                <FlatList data={this.state.hourly_data} contentContainerStyle={styles.hourly_flat_list}
                          renderItem={({item}) => (
                              <View style={styles.container_hourly_flat_list}>
                                  <Text style={styles.item_hourly_list_temp}>{item.name}</Text>

                                  <View style={styles.container_temp_hourly_list}>
                                      <Image resizeMode='contain' style={styles.item_hourly_list_img}
                                             source={item.img}/>
                                      <Text style={styles.item_list_temp}>{item.temp}</Text>
                                  </View>
                              </View>)}
                />

                <Text style={styles.title_extended}>MORE</Text>
            </View>
        );
    };

    render() {
        if (this.props.bottomComponentIsOpen == false) {
            return (
                <View style={styles.view}>
                    {this.mainPart()}
                </View>
            );
        } else {
            return (
                <View style={styles.view}>
                    {this.mainPart()}

                    {this.expendedPart()}

                    {this.hourlyPart()}
                </View>
            );
        }
    }
}

let styles = StyleSheet.create({
    container_hourly_flat_list: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
    },
    item_hourly_list_img: {
        height: 20,
        width: 20,
    },
    container_temp_hourly_list: {},
    item_hourly_list_temp: {
        color: 'rgba(255,255,255,0.65)',
    },
    title_hourly: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#FFF',
    },
    container_hourly: {
        flex: 10,
    },
    container_expended_all: {
        flex: 7,
    },
    hourly_flat_list: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    container_extended: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    info: {
        marginRight: 10,
        marginTop: 5,
    },
    text_extended: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.65)',
        fontFamily: 'Roboto',
    },
    title_extended: {
        marginVertical: 5,
        fontSize: 20,
        textAlign: 'center',
        color: colors.primaryGradientColorEndConst,
        fontFamily: 'Roboto',
    },
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
        flex: 1,
    },
    text: {
        color: 'white',
        margin: 50,
    },
});
