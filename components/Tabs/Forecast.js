import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text, FlatList, Image,
} from 'react-native';

import {
    LineChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

const screenWidth = Dimensions.get('window').width;

import LinearGradient from 'react-native-linear-gradient';

import stylesApp, {colors} from '../../Style';
import Hr from 'react-native-hr-component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

export default class Forecast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days_data: [
                {
                    width: 100,
                    actif: true,
                    key: 'sunday',
                    name: 'SUN',
                    temp_min: '-1°',
                    temp_max: '-4°',
                    img: require('../images/cloud-sun.png'),
                },
                {
                    width: 70,
                    actif: false,
                    key: 'monday',
                    name: 'MON',
                    temp_min: '-2°',
                    temp_max: '-3°',
                    img: require('../images/cloud.png'),
                },
                {
                    width: 60,
                    actif: false,
                    key: 'tuesday',
                    name: 'TUE',
                    temp_min: '-3°',
                    temp_max: '-3°',
                    img: require('../images/cloud-showers-heavy.png'),
                },
                {
                    width: 50,
                    actif: false,
                    key: 'wednesday',
                    name: 'WED',
                    temp_min: '-3°',
                    temp_max: '-4°',
                    img: require('../images/cloud-sun.png'),
                },
                {
                    width: 60,
                    actif: false,
                    key: 'thursday',
                    name: 'THU',
                    temp_min: '-2°',
                    temp_max: '-3°',
                    img: require('../images/cloud-sun-2.png'),
                },
                {
                    width: 30,
                    actif: false,
                    key: 'friday',
                    name: 'FRI',
                    temp_min: '-2°',
                    temp_max: '-3°',
                    img: require('../images/cloud.png'),
                },
                {
                    width: 60,
                    actif: false,
                    key: 'saturday',
                    name: 'SAT',
                    temp_min: '-1°',
                    temp_max: '-0°',
                    img: require('../images/cloud-sun.png'),
                },
            ],
            week_data: [
                {
                    open: false,
                    key: '1',
                    date: '01/07',
                    short_description: 'Chilly weather',
                    description: 'This weekend will feature plenty of wintry trouble as a storm begins to brew in the nation\'s midsection.  \n' +
                        'A large low pressure system rolling of the Rockies is the culprit initiating this winter storm. This will help power the development of a system over the Texas and Oklahoma Panhandles this morning, beginning the creation of a big snow maker.\n' +
                        'A southerly flow ahead of this system will tap into Gulf of Mexico moisture, bringing downpours \n' +
                        'to central and northern Texas and central and eastern Oklahoma this morning and afternoon.',
                    min_temp: 0,
                    max_temp: -2,
                    icon: require('../images/cloud-sun.png'),
                },
                {
                    open: false,
                    key: '2',
                    date: '07/14',
                    short_description: 'Cool weather',
                    description: 'This weekend will feature plenty of wintry trouble as a storm begins to brew in the nation\'s midsection.  \n' +
                        'A large low pressure system rolling of the Rockies is the culprit initiating this winter storm. This will help power the development of a system over the Texas and Oklahoma Panhandles this morning, beginning the creation of a big snow maker.\n' +
                        'A southerly flow ahead of this system will tap into Gulf of Mexico moisture, bringing downpours \n' +
                        'to central and northern Texas and central and eastern Oklahoma this morning and afternoon.',
                    min_temp: 0,
                    max_temp: 1,
                    icon: require('../images/cloud-sun.png'),
                },
                {
                    open: false,
                    key: '3',
                    date: '14/21',
                    short_description: 'Rainy days',
                    description: 'This weekend will feature plenty of wintry trouble as a storm begins to brew in the nation\'s midsection.  \n' +
                        'A large low pressure system rolling of the Rockies is the culprit initiating this winter storm. This will help power the development of a system over the Texas and Oklahoma Panhandles this morning, beginning the creation of a big snow maker.\n' +
                        'A southerly flow ahead of this system will tap into Gulf of Mexico moisture, bringing downpours \n' +
                        'to central and northern Texas and central and eastern Oklahoma this morning and afternoon.',
                    min_temp: -1,
                    max_temp: -5,
                    icon: require('../images/cloud-sun-2.png'),
                },
                {
                    open: false,
                    key: '4',
                    date: '21/28',
                    short_description: 'Freezing',
                    description: 'This weekend will feature plenty of wintry trouble as a storm begins to brew in the nation\'s midsection.  \n' +
                        'A large low pressure system rolling of the Rockies is the culprit initiating this winter storm. This will help power the development of a system over the Texas and Oklahoma Panhandles this morning, beginning the creation of a big snow maker.\n' +
                        'A southerly flow ahead of this system will tap into Gulf of Mexico moisture, bringing downpours \n' +
                        'to central and northern Texas and central and eastern Oklahoma this morning and afternoon.',
                    min_temp: -8,
                    max_temp: -10,
                    icon: require('../images/freez.png'),
                },
            ],
            openWeek: 0,
        };
    }

    helpPart = () => {
        return (
            <View style={styles.container_help_all}>
                <Hr lineColor="rgba(255,255,255,0.15)" width={1} textPadding={0} text=""/>

                <View style={{paddingTop: 20, paddingBottom: 25}}>
                    <View style={styles.container_help}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <FontAwesomeIcon icon={faInfoCircle} color={'#FFF'} style={styles.info}/>
                            <Text style={styles.text_help}>Tap on any day to view details</Text>
                        </View>

                        <Text style={styles.title_help}>GOT IT</Text>

                    </View>
                </View>
                <Hr lineColor="rgba(255,255,255,0.15)" width={1} textPadding={0} text=""/>
            </View>
        );
    };

    flatListPart = () => {
        return (
            <View>
                <FlatList data={this.state.days_data} contentContainerStyle={styles.days_flat_list}
                          renderItem={({item}) => (
                              <View style={styles.days_flat_list_container}>
                                  <View style={styles.days_flat_list_name_container}>
                                      <Image resizeMode='contain'
                                             style={[styles.days_flat_list_img, item.actif == true ? null : styles.inactif]}
                                             source={item.img}/>
                                      <Text
                                          style={[styles.days_flat_list_name, item.actif == true ? null : styles.inactif]}>{item.name}</Text>
                                  </View>

                                  <View style={styles.days_flat_list_name_temp_container}>
                                      <Text style={styles.days_flat_list_temp_min}>{item.temp_min}</Text>
                                      {/*  TODO */}
                                      <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 0}}
                                                      colors={[colors.primaryGradientColorStartConst, colors.primaryGradientColorEndConst, colors.primaryGradientColorEndConst2, colors.primaryGradientColorEndConst2]}
                                                      style={[styles.days_flat_list_bar, {width: item.width}]}></LinearGradient>
                                      <Text style={styles.days_flat_list_temp_max}>{item.temp_max}</Text>
                                  </View>
                              </View>
                          )}
                />
            </View>
        );
    };

    graphPart = () => {
        return (
            <View style={styles.container_linechart}>
                <LineChart
                    data={{
                        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        datasets: [
                            {
                                data: [
                                    -4,
                                    -3,
                                    -5,
                                    -4,
                                    -3,
                                    -3,
                                    -4,
                                ],
                            },

                        ],
                    }}
                    width={Dimensions.get('window').width} // from react-native
                    height={220}
                    withVerticalLabels={true}
                    withHorizontalLabels={false}
                    withInnerLines={false}
                    withOuterLines={false}
                    yAxisInterval={5} // optional, defaults to 1
                    xAxisInterval={5} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: colors.primaryColorConst,
                        backgroundGradientFrom: colors.primaryColorConst,
                        backgroundGradientTo: colors.primaryColorConst,
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 100,
                        },
                        propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: colors.primaryColorConst,
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 0,
                    }}
                />
            </View>
        );
    };

    openWeekContent = (number) => {
        // if same => reset
        if (number == this.state.openWeek) {
            number = 0;
        }

        this.setState({
            openWeek: number,
        });
    };

    weekDescriptionPart = (item) => {
        if(item.key == this.state.openWeek){
            return (
                <View style={styles.week_container_description}>
                    <Text style={styles.week_description}>{item.description}</Text>
                </View>
            )
        }
    }

    weekPart = () => {
        return (
            <View style={styles.container_week}>
                <FlatList data={this.state.week_data} contentContainerStyle={styles.week_flat_list}
                          renderItem={({item}) => (
                              <View >

                                  <TouchableOpacity onPress={() => this.openWeekContent(item.key)} style={styles.week_flat_list_container}>
                                      <View style={styles.week_flat_list_container_left}>
                                          <Image resizeMode='contain'
                                                 style={styles.week_flat_list_img}
                                                 source={item.icon}/>

                                          <View style={styles.week_container_text}>
                                              <Text style={styles.week_date}>Week of {item.date}</Text>
                                              <Text style={styles.week_short_description}>{item.short_description}</Text>
                                          </View>
                                      </View>

                                      <View style={styles.week_container_temp}>
                                          <Text style={styles.week_temp}>{item.min_temp}°/{item.max_temp}°</Text>
                                          <FontAwesomeIcon style={styles.week_fa}
                                                           icon={this.state.openWeek == item.key ? faChevronUp : faChevronDown}
                                                           color={colors.primaryGradientColorEndConst2}/>
                                      </View>
                                  </TouchableOpacity>

                                  {this.weekDescriptionPart(item)}
                              </View>
                          )}
                />
            </View>
        );
    };

    render() {
        return (
            <View style={styles.view}>
                {this.flatListPart()}
                {this.props.bottomComponentIsOpen == true ? this.helpPart() : null}
                {this.props.bottomComponentIsOpen == true ? this.weekPart() : null}
            </View>
        );
    }
}

let styles = StyleSheet.create({
    week_description : {
        lineHeight: 21,
        color: '#FFF',
        fontFamily: 'Roboto',
    },
    week_container_description : {
      paddingVertical : 10,
      paddingHorizontal : 30,
    },
    week_fa: {
        marginLeft: 10,
    },
    week_container_temp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    week_temp: {
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 20,
    },
    week_short_description: {
        color: '#6ED4FF',
        opacity: 0.6,
        fontFamily: 'Roboto',
    },
    week_date: {
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: '500',
    },
    week_container_text: {},
    week_flat_list_img: {
        marginRight: 20,
    },
    week_flat_list_container_left: {
        flex: 1,
        flexDirection: 'row',
    },
    week_flat_list_container: {
        justifyContent: 'space-around',
        marginHorizontal: 20,
        marginVertical: 10,
        flex: 1,
        flexDirection: 'row',
    },
    week_flat_list: {},
    container_linechart: {
        //flex: 1,

    },
    container_week: {
        flex: 1,
    },
    view: {
        flex: 1,
        paddingTop: 20,
    },
    text: {
        color: 'white',
    },
    days_flat_list: {},
    days_flat_list_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
    },
    days_flat_list_img: {
        marginRight: 30,
    },
    days_flat_list_name_container: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
    },
    days_flat_list_name_temp_container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inactif: {
        opacity: 0.8,
    },
    days_flat_list_name_actif: {
        color: '#FFF',
        fontFamily: 'Roboto',
        fontSize: 17,
    },
    days_flat_list_name: {
        color: '#FFF',
        fontFamily: 'Roboto',
        fontSize: 17,
    },
    days_flat_list_temp_min: {
        color: '#FFF',
        fontFamily: 'Roboto',
        paddingRight: 20,
    },
    days_flat_list_temp_max: {
        color: '#FFF',
        fontFamily: 'Roboto',
        paddingLeft: 20,
    },
    days_flat_list_bar: {
        width: 100,
        height: 10,
        borderRadius: 50,
    },
    container_help: {
        paddingVertical: 0,
        paddingHorizontal: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    info: {
        marginRight: 10,
        marginTop: 5,
    },
    text_help: {
        paddingTop: 5,
        fontSize: 16,
        color: '#E4EFFF',
        opacity: 0.6,
        fontFamily: 'Roboto',
    },
    title_help: {
        fontWeight: '500',
        marginVertical: 5,
        fontSize: 20,
        textAlign: 'center',
        color: colors.primaryGradientColorEndConst,
        fontFamily: 'Roboto',
    },
    container_help_all: {
        // backgroundColor : 'red',
        // flex : 1,
    },

});
