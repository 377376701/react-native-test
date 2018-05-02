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
    TouchableHighlight,
} from 'react-native';

import Header from "./components/Header";

type Props = {};
export default class App extends Component<Props> {

    _onPressButton() {
        Alert.alert('onPressButton');
    }

    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.container}>
                    <TouchableHighlight onPress={this._onPressButton} style={styles.flex}>
                        < View style={[styles.item, styles.center]}>
                            <Text style={styles.font}>酒店</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.item, styles.lineLeftRight, styles.flex]}>

                        <TouchableHighlight onPress={this._onPressButton} style={styles.flex}>
                            <View style={[styles.flex, styles.lineCenter, styles.center]}>
                                <Text style={styles.font}>海外酒店</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressButton} style={styles.flex}>
                            <View style={[styles.flex, styles.center]}>
                                <Text style={styles.font}>特惠酒店</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                    <View style={[styles.item, styles.flex]}>
                        <TouchableHighlight onPress={this._onPressButton} style={styles.flex}>
                            <View style={[styles.flex, styles.center, styles.lineCenter]}>
                                <Text style={styles.font}>团购</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressButton} style={styles.flex}>
                            <View style={[styles.flex, styles.center]}>
                                <Text style={styles.font}>客栈，公寓</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <Header></Header>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 84,
        borderRadius: 5,
        padding: 2,
        // borderWidth: 1,
        // borderColor: 'red',
        //默认是垂直，现在改成水平
        flexDirection: 'row',
        backgroundColor: '#FF0067',
    },
    item: {
        flex: 1,
        height: 80,
        // borderWidth: 1,
        // borderColor: 'blue',
    },
    center: {
        //垂直水平居中
        justifyContent: 'center',
        alignItems: 'center',
    },
    flex: {flex: 1},
    font: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    lineLeftRight: {
        borderColor: '#fff',
        //  PixelRatio.get()获取屏幕像素比 1/PixelRatio.get()
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
    },

    lineCenter: {
        borderColor: '#fff',
        borderBottomWidth: 1 / PixelRatio.get(),
    },
});
