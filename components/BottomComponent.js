import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    PanResponder,
    Animated,
    TouchableHighlight,
    Text,
} from 'react-native';

import stylesApp, {colors} from '../Style';

export default class BottomComponent extends Component {
    constructor(props) {
        super(props);

        console.log(props)

        this.state = {
            changeHeight: new Animated.Value(0),
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
                            <Text></Text>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.components}></View>
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    button : {
        backgroundColor: '#FFF',
        width: 200,
        height: 10,
        borderRadius: 20,
        opacity : 0.5,
    },
    container : {
        flex : 1,
    },
    container_view : {
        paddingTop : 20,
        paddingBottom : 20,
        flex : 1,
        alignItems : 'center',
    },
    components : {
        flex : 15,
    }
});
