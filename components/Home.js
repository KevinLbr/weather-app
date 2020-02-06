/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';
import stylesApp, { colors } from '../Style'

class Home extends React.Component{

  render(){
    return (
        <View style={styles.view}>
          <View style={styles.container_img}>
            <Image source={require('./images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Weather Guide</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop : 40,
    flex : 1,
    backgroundColor : colors.primaryColorConst
  },
  container_img : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo : {
    width: 100,
    height: 100,
  },
  title : {
    marginTop: 20,
    fontSize : 40,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: "Roboto-Bold",
  }
});


export default Home;
