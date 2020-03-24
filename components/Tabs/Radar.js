import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    TouchableOpacity,
    TouchableHighlight,
    Text,
} from 'react-native';

import stylesApp, {colors} from '../../Style';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export default class Radar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.animateStart == false){
            if(this.props.bottomComponentIsOpen == true){
                return (
                    <View style={styles.view}>
                        <View style={styles.container}>
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}

                            >
                            </MapView>
                        </View>
                    </View>
                );
            } else {
                return (
                    <View style={styles.view}>
                        <View style={styles.container}>
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            />
                        </View>
                    </View>
                );
            }
        } else {
            return (
                <View style={styles.view}>
                    <ActivityIndicator size="large" color="#FFF"/>
                </View>
            )
        }
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
    },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
