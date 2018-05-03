/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 导包基础组件一定要导入react-native的包，不能导入index目录下的Text，view什么的
import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, PixelRatio} from 'react-native';

export default class Header extends Component {
    render() {

        return (
            <View style={[styles.container,]}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginTop: 25,
        height: 50,
        borderBottomColor: '#ef2d36',
        borderBottomWidth: 3 / PixelRatio.get(),
    },
    font: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    font_1: {
        color: '#cd1d1d',
    },
    font_2: {
        color: '#fff',
        backgroundColor: '#cd1d1d',
    },
});
// 第二种导出组件的方式
// module.exports =Header;