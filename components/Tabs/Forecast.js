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
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

import LinearGradient from 'react-native-linear-gradient';

import stylesApp, {colors} from '../../Style';

export default class Forecast extends Component {
    constructor(props) {
        super(props);

        this.state ={
            days_data: [
                {width : 100, actif : true, key: 'sunday', name: 'SUN',temp_min: '-1°' , temp_max: '-4°', img : require('../images/cloud-sun.png')},
                {width : 70, actif : false, key: 'monday', name: 'MON', temp_min: '-2°', temp_max: '-3°', img : require('../images/cloud.png')},
                {width : 60, actif : false, key: 'tuesday', name: 'TUE', temp_min: '-3°', temp_max: '-3°', img : require('../images/cloud-showers-heavy.png')},
                {width : 50, actif : false, key: 'wednesday', name: 'WED', temp_min: '-3°', temp_max: '-4°', img : require('../images/cloud-sun.png')},
                {width : 60, actif : false, key: 'thursday', name: 'THU', temp_min: '-2°', temp_max: '-3°', img : require('../images/cloud-sun-2.png')},
                {width : 30, actif : false, key: 'friday', name: 'FRI',temp_min: '-2°' , temp_max: '-3°', img : require('../images/cloud.png')},
                {width : 60, actif : false, key: 'saturday', name: 'SAT', temp_min: '-1°', temp_max: '-0°', img : require('../images/cloud-sun.png')},
            ],
        }
    }

    render() {
        return (
            <View style={styles.view}>
                <FlatList data={this.state.days_data} contentContainerStyle={styles.days_flat_list}
                          renderItem={({item}) => (
                              <View style={styles.days_flat_list_container}>
                                  <View style={styles.days_flat_list_name_container}>
                                      <Image resizeMode='contain' style={[styles.days_flat_list_img, item.actif == true ? null : styles.inactif]} source={item.img}/>
                                      <Text style={[styles.days_flat_list_name, item.actif == true ? null : styles.inactif]}>{ item.name }</Text>
                                  </View>

                                  <View style={styles.days_flat_list_name_temp_container}>
                                      <Text style={styles.days_flat_list_temp_min}>{ item.temp_min }</Text>
                                      {/*  TODO */}
                                      <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 0}} colors={[colors.primaryGradientColorStartConst, colors.primaryGradientColorEndConst, colors.primaryGradientColorEndConst2, colors.primaryGradientColorEndConst2]}
                                                      style={[styles.days_flat_list_bar, {width :  item.width}]}></LinearGradient>
                                      <Text style={styles.days_flat_list_temp_max}>{ item.temp_max }</Text>
                                  </View>
                              </View>
                          )}
                />

                <LineChart
                    data={{
                        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", 'Sat'],
                        datasets: [
                            {
                                data: [
                                    -4,
                                    -3,
                                    -5,
                                    -4,
                                    -3,
                                    -3,
                                    -4
                                ]
                            },

                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
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
                            r: "6",
                            strokeWidth: "2",
                            stroke: colors.primaryColorConst,
                        }
                    }}
                    decorator={(x, i) => {return ( <Text key={i}>Ok, x, y</Text>)}}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 0
                    }}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    view : {
        flex : 1,
        paddingTop: 20,
    } ,
    text : {
        color : 'white',
    },
    days_flat_list : {
    },
    days_flat_list_container : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        margin : 10,
    },
    days_flat_list_name_container : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-around',
    },
    days_flat_list_name_temp_container : {
        flex: 2,
        flexDirection : 'row',
        justifyContent : 'flex-end',
        alignItems: 'center'
    },
    inactif : {
        opacity : 0.8,
    },
    days_flat_list_name_actif : {
        color : '#FFF',
        fontFamily : 'Roboto',
        fontSize : 17,
    },
    days_flat_list_name : {
        color : '#FFF',
        fontFamily : 'Roboto',
        fontSize : 17,
    },
    days_flat_list_temp_min : {
        color : '#FFF',
        fontFamily : 'Roboto',
        paddingRight : 20,
    },
    days_flat_list_temp_max : {
        color : '#FFF',
        fontFamily : 'Roboto',
        paddingLeft : 20,
    },
    days_flat_list_bar : {
        width : 100,
        height : 10,
        borderRadius : 50,
    }

});
