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

import Hr from 'react-native-hr-component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

// https://github.com/JesperLekland/react-native-svg-charts-examples/blob/master/storybook/stories/line-chart/with-gradient.js
// https://github.com/JesperLekland/react-native-svg-charts#common-props
import {LineChart, Grid, AreaChart, YAxis, XAxis, BarChart} from 'react-native-svg-charts';
import {Defs, Stop, LinearGradient, Circle, Path, Rect, G, Text as TextLabel} from 'react-native-svg';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';

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
        };
    }

    next_week_part = () => {
        const dateStart = moment().format('DD.MM');
        const dateEnd = moment().days(7).format('DD.MM');

        const data = [10, 5, 50, 15, 84, 73, 19];

        const CUT_OFF = 100;
        const Labels = ({x, y, bandwidth, data}) => (
            data.map((value, index) => (
                <TextLabel
                    key={index}
                    x={x(index) + (bandwidth / 2) - 5}
                    y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
                    fontSize={17}
                    fill={value >= CUT_OFF ? 'white' : 'white'}
                    alignmentBaseline={'middle'}
                    textAnchor={'middle'}
                >
                    {value}%
                </TextLabel>
            ))
        );

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={colors.primaryGradientColorEndConst2}/>
                    <Stop offset={'80%'} stopColor={colors.primaryGradientColorEndConst}/>
                    <Stop offset={'100%'} stopColor={colors.primaryGradientColorStartConst}/>
                </LinearGradient>
            </Defs>
        );

        return (
            <View style={{paddingVertical: 16}}>
                <View style={styles.next_week_container_title}>
                    <Text style={styles.next_week_title}>Next week</Text>
                    <Text style={styles.next_week_date}>{dateStart} - {dateEnd}</Text>
                </View>

                <View style={{flex: 1}}>
                    <View style={{height: 200}}>
                        <BarChart
                            style={{flex: 1}}
                            data={data}
                            svg={{
                                strokeWidth: 1,
                                fill: 'url(#gradient)',
                            }}
                            contentInset={{top: 20, bottom: 10, left: 10, right: 10}}
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
                            style={{marginTop: 10, opacity: 0.8}}
                            data={this.state.days_data}
                            scale={scale.scaleBand}
                            formatLabel={(value, index) => this.state.days_data[index].name}
                            svg={{
                                fontSize: 13,
                                fill: colors.secondaryColorConst,
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

        const data1 = [50, 10, 40, 95];
        const data2 = [30, 60, 35, 66];

        const data = [
            {
                data: data1,
                svg: {stroke: colors.secondaryColorConst, strokeWidth: 3},
            },
            {
                data: data2,
                svg: {stroke: colors.primaryGradientColorStartConst, strokeWidth: 3},
            },
        ];

        const ShadowData1 = ({lines}) => {
            return (
                <Path
                    key={'shadow'}
                    y={5}
                    d={lines[0]}
                    fill={'none'}
                    strokeWidth={4}
                    stroke={colors.secondaryColorConst}
                    opacity={0.2}
                />
            );
        };

        const ShadowData2 = ({lines}) => {
            return (
                <Path
                    key={'shadow'}
                    y={5}
                    d={lines[1]}
                    fill={'none'}
                    strokeWidth={4}
                    stroke={colors.primaryGradientColorStartConst}
                    opacity={0.2}
                />
            );
        };

        const DecoratorData1 = ({x, y, data}) => {
            return data[0].data.map((value, index) => (
                <Circle
                    key={index}
                    cx={x(index)}
                    cy={y(value)}
                    r={6}
                    stroke={'#FFF'}
                    strokeWidth={3}
                    fill={colors.primaryColorConst}
                />
            ));
        };

        const DecoratorData2 = ({x, y, data}) => {
            return data[1].data.map((value, index) => (
                <Circle
                    key={index}
                    cx={x(index)}
                    cy={y(value)}
                    r={6}
                    stroke={'#FFF'}
                    strokeWidth={3}
                    fill={colors.primaryColorConst}
                />
            ));
        };

        const weeks = [
            {
                index: 0,
                label: "1st week",
            },
            {
                index: 1,
                label: "2nd week",
            },
            {
                index: 2,
                label: "3rd week",
            },
            {
                index: 3,
                label: "4th week",
            },
        ]

        const axesSvg = {fontSize: 10, fill: colors.secondaryColorConst, opacity : 0.8};
        const verticalContentInset = {top: 10, bottom: 10};
        const xAxisHeight = 30;

        return (
            <View style={{paddingTop: 30}}>
                <View style={styles.next_week_container_title}>
                    <Text style={styles.next_week_title}>{month}</Text>
                    <Text style={styles.next_week_date}>{dateStart} - {dateEnd}</Text>
                </View>

                <LineChart
                    style={{height: 200}}
                    data={data}
                    contentInset={{top: 20, bottom: 20, left: 20, right: 20}}
                >
                    {/*<Grid/>*/}
                    <DecoratorData1/>
                    <DecoratorData2/>
                    <ShadowData1/>
                    <ShadowData2/>
                </LineChart>
                <XAxis
                    style={{marginHorizontal: -10, height: xAxisHeight}}
                    data={weeks}
                    formatLabel={(index, label) => weeks[index].label}
                    contentInset={{left: 25, right: 25}}
                    svg={axesSvg}
                />
            </View>
        );
    };

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

    render() {
        return (
            <ScrollView style={styles.view}>
                {this.next_week_part()}
                {this.props.bottomComponentIsOpen == true ? this.month_part() : null}
                {this.props.bottomComponentIsOpen == true ? this.helpPart() : null}
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
        paddingBottom: 3,
        opacity: 0.6,
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
    container_help: {
        paddingVertical: 0,
        paddingHorizontal: 10,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
});
