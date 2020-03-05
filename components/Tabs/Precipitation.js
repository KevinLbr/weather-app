import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    ScrollView,
} from 'react-native';

import stylesApp, {colors} from '../../Style';

import moment from 'moment';

// https://github.com/JesperLekland/react-native-svg-charts-examples/blob/master/storybook/stories/line-chart/with-gradient.js
// https://github.com/JesperLekland/react-native-svg-charts#common-props
import {LineChart, Grid, AreaChart, YAxis, XAxis, BarChart} from 'react-native-svg-charts';
import {Defs, Stop, LinearGradient, Circle, Path, Rect, G, Text as TextLabel} from 'react-native-svg';
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'

export default class Precipitation extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            days_data: [
                {
                    key: 'sunday',
                    name: 'SUN',
                    probability: 39,
                },
                {
                    key: 'monday',
                    name: 'MON',
                    probability: 30,
                },
                {
                    key: 'tuesday',
                    name: 'TUE',
                    probability: 10,
                },
                {
                    key: 'wednesday',
                    name: 'WED',
                    probability: 57,
                },
                {
                    key: 'thursday',
                    name: 'THU',
                    probability: 40,
                },
                {
                    key: 'friday',
                    name: 'FRI',
                    probability: 29,
                },
                {
                    key: 'saturday',
                    name: 'SAT',
                    probability: 30,
                },
            ],
        }
    }

    next_week_part = () => {
        const dateStart = moment().format('DD.MM');
        const dateEnd = moment().days(7).format('DD.MM');

        const data = [ 10, 5, 50, 15, 84, 73, 19 ]

        const CUT_OFF = 100;
        const Labels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <TextLabel
                    key={ index }
                    x={ x(index) + (bandwidth / 2) -5 }
                    y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                    fontSize={ 17 }
                    fill={ value >= CUT_OFF ? 'white' : 'white' }
                    alignmentBaseline={ 'middle' }
                    textAnchor={ 'middle' }
                >
                    {value}%
                </TextLabel>
            ))
        )

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={colors.primaryGradientColorEndConst2}/>
                    <Stop offset={'80%'} stopColor={colors.primaryGradientColorEndConst}/>
                    <Stop offset={'100%'} stopColor={colors.primaryGradientColorStartConst}/>
                </LinearGradient>
            </Defs>
        )

        return (
            <View style={{ paddingVertical: 16}}>
                <View style={styles.next_week_container_title}>
                    <Text style={styles.next_week_title}>Next week</Text>
                    <Text style={styles.next_week_date}>{dateStart} - {dateEnd}</Text>
                </View>

                <View style={{flex : 1}}>
                    <View style={{ height: 200}}>
                        <BarChart
                            style={{ flex: 1}}
                            data={data}
                            svg={ {
                                strokeWidth: 1,
                                fill: 'url(#gradient)',
                            }}
                            contentInset={{ top: 20, bottom: 10, left:10, right:10}}
                            scale={scale.scaleBand}
                            spacingInner={0.5}
                            radius={10}
                            gridMin={0}
                            gridMax={100}
                        >
                            <Labels/>
                            <Gradient/>
                        </BarChart>
                        <XAxis
                            style={{ marginTop: 10, opacity : 0.8,}}
                            data={ this.state.days_data }
                            scale={scale.scaleBand}
                            formatLabel={ (value, index) => this.state.days_data[index].name }
                            svg={{
                                fontSize: 13,
                                fill: colors.secondaryColorConst
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    };

    month_part = () => {
        const dateStart = moment().format('DD.MM');
        const dateEnd = moment().days(30).format('DD.MM');
        const month = moment().format('MMMM YYYY');

        return (
            <View>
                <View style={styles.next_week_container_title}>
                    <Text style={styles.next_week_title}>{month}</Text>
                    <Text style={styles.next_week_date}>{dateStart} - {dateEnd}</Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <ScrollView style={styles.view}>
                {this.next_week_part()}
                {this.props.bottomComponentIsOpen == true ? this.month_part(): null}
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    next_week_title: {
        color: '#FFF',
        fontFamily: 'Roboto',
        fontSize: 23,
        fontWeight: '500',
    },
    next_week_date: {
        color: '#FFF',
        fontFamily: 'Roboto',
        paddingBottom : 3,
        opacity : 0.6,
        // letterSpacing : 1.2,
        fontWeight: '500',
    },
    next_week_container_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    text: {
        color: 'white',
    },
});
