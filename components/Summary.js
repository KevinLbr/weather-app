/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity, Animated,
} from 'react-native';
import stylesApp, {colors} from '../Style';
import BottomComponent from './BottomComponent';

class Summary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bottomComponentIsOpen : false,
            flexMainComponent : new Animated.Value(0),
            flexMainComponentHeight : new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.flexMainComponent,
            {
                toValue: 2,
                duration: 1,
            },
        ).start();

        Animated.timing(
            this.state.flexMainComponentHeight,
            {
                toValue: 0,
                duration: 1,
            },
        ).start();
    }

    _onPressButton() {
        // TODO
    }

    _openDrawerNavigation = () => {
        this.props.navigation.openDrawer();
    };

    toggleBottomComponent = () => {
        this.setState({bottomComponentIsOpen : this.state.bottomComponentIsOpen == true ? false : true});

        var flex = this.state.bottomComponentIsOpen ? 0 : 2;
        var height = this.state.bottomComponentIsOpen ? 0 : 1;

        Animated.timing(
            this.state.flexMainComponent,
            {
                toValue: flex,
                duration: 500,
            },
        ).start();

        Animated.timing(
            this.state.flexMainComponentHeight,
            {
                toValue: height,
                duration: 500,
            },
        ).start();
    }

    render() {
        return (
            <ImageBackground style={styles.view} source={require('./images/background.png')} resizeMode='cover'>
                <View style={styles.container_header}>
                    <View style={styles.header_part_1}>
                        <View>
                            <TouchableOpacity onPress={this._openDrawerNavigation}>
                                <Image resizeMode='contain' style={styles.menu} source={require('./images/menu.png')}/>
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.white, styles.name]}>Alberta</Text>
                    </View>
                    <View>
                        <Image resizeMode='contain' style={styles.options} source={require('./images/options.png')}/>
                    </View>
                </View>

                <Animated.View style={{flex : this.state.flexMainComponent, height : this.state.flexMainComponentHeight}}>
                    <View style={styles.flex}>
                        <View style={styles.container_img}>
                            <Image resizeMode='contain' style={styles.tmp_img} source={require('./images/cloud.png')}/>
                        </View>

                        <View style={styles.container_center}>
                            <Text style={[styles.white, styles.text, styles.tmp]}>
                                -7°
                            </Text>

                            <Text style={[styles.white, styles.text, styles.line_height]}>Foggy weather</Text>

                            <Text style={[styles.white, styles.text]}>
                                <Text style={styles.text_variable_tmp}>
                                    68°/56
                                </Text>

                                <Image style={styles.tint_img} resizeMode='contain'
                                       source={require('./images/tint.png')}/>
                                0%
                            </Text>
                        </View>

                        <View style={styles.container_img}>
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
                </Animated.View>

                <BottomComponent toggleBottomComponent={this.toggleBottomComponent}></BottomComponent>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    bottomComponentIsOpen : {
        flex : 0,
        height : 0
    },
    bottomComponentIsClosed : {
        flex: 2
    },
    view: {
        right: 0,
        marginTop: 40,
        flex: 1,
        backgroundColor: colors.primaryColorConst,
    },
    container_img: {
        flex: 1,
    },
    container_center: {
        // backgroundColor : 'red',
        flex: 2,
    },
    flex: {
        padding: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    line_height: {
        lineHeight: 30,
    },
    name: {
        fontFamily: 'Roboto',
        fontSize: 20,
    },
    white: {
        color: '#FFF',
    },
    text: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontSize: 20,
    },
    tmp: {
        fontSize: 130,
        textAlign: 'center',
    },
    container_btn: {
        textAlign: 'right',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 50,
        marginBottom: 50,
    },
    tmp_img: {
        width: 70,
        height: 70,
    },
    menu: {
        width: 20,
        height: 20,
        paddingLeft: 70,
    },
    options: {
        width: 20,
        height: 20,
        paddingRight: 50,
    },
    header_part_1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text_variable_tmp: {
        // paddingRight: 10
    },
    tint_img: {
        width: 15,
        height: 15,
    },
    container_header: {
        height: 70,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
