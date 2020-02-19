import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    PanResponder,
    TouchableOpacity,
    Animated,
    TouchableHighlight,
    Text,
} from 'react-native';

import stylesApp, {colors} from '../Style';

import Today from './Tabs/Today'
import Radar from './Tabs/Radar';
import Forecast from './Tabs/Forecast';
import Precipitation from './Tabs/Precipitation';

export default class BottomComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changeHeight: new Animated.Value(0),
            active_tab: 1,
        };
    }

    _onPressButton = (event) => {
        Animated.timing(
            this.state.changeHeight,
            {
                toValue: 1,
                duration: 1000,
            },
        ).start();

        this.props.toggleBottomComponent();
    };

    componentDidMount() {
        Animated.timing(
            this.state.changeHeight,
            {
                toValue: 1,
                duration: 1000,
            },
        ).start();
    }

    changeActiveTab = (number) => {
        this.setState({active_tab: number});
    };

    render() {
        return (
            <Animated.View
                style={[styles.view, {flex: this.state.changeHeight}]}
            >
                <View style={styles.container}>
                    <TouchableHighlight
                        underlayColor="transparent"
                        style={styles.container_view}
                        onPress={this._onPressButton}
                    >
                        <View style={styles.button}>
                            <Text> </Text>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.components}>
                        <View style={styles.tabs}>
                            <TouchableOpacity
                                style={this.state.active_tab == 1 ? styles.container_text_tab_active : styles.container_text_tab}
                                onPress={() => this.changeActiveTab(1)}>
                                <Text style={styles.text_tab}>Today</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={this.state.active_tab == 2 ? styles.container_text_tab_active : styles.container_text_tab}
                                onPress={() => this.changeActiveTab(2)}>
                                <Text style={styles.text_tab}>Forecast</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={this.state.active_tab == 3 ? styles.container_text_tab_active : styles.container_text_tab}
                                onPress={() => this.changeActiveTab(3)}>
                                <Text style={styles.text_tab}>Precipitation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={this.state.active_tab == 4 ? styles.container_text_tab_active : styles.container_text_tab}
                                onPress={() => this.changeActiveTab(4)}>
                                <Text style={styles.text_tab}>Radar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.content_tabs}>
                            {this.state.active_tab == 1 ? <Today></Today> : null}
                            {this.state.active_tab == 2 ? <Forecast></Forecast> : null}
                            {this.state.active_tab == 3 ? <Precipitation></Precipitation> : null}
                            {this.state.active_tab == 4 ? <Radar></Radar> : null}
                        </View>
                    </View>
                </View>
            </Animated.View>
        );
    }
}

let styles = StyleSheet.create({
    view: {
        backgroundColor: colors.primaryColorConst,
        height: 0,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    content_tabs: {
        flex: 3,
    },
    tabs: {
        padding: 0,
        margin: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    container_text_tab_active: {
        borderRadius: 5,
        borderBottomWidth: 3,
        borderBottomColor: colors.secondaryColorConst,
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_text_tab: {
        borderRadius: 5,
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(255,255,255,0.15)',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_tab: {
        color: '#FFF',
    },
    button: {
        backgroundColor: '#FFF',
        width: 150,
        height: 7,
        borderRadius: 20,
        opacity: 0.3,
    },
    container: {
        flex: 1,
    },
    container_view: {
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
        alignItems: 'center',
    },
    components: {
        flex: 15,
    },
});
