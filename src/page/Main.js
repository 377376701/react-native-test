/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    Alert,
    Navigator,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

type Props = {};

export default class Main extends Component<Props> {

    _onPressButton() {
        Alert.alert('onPressButton');
    }

    render() {
        return (
            <View style={styles.flex}>

            </View>
        );
    }
}



const styles = StyleSheet.create({

    flex: {flex: 1},

});
