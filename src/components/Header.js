/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 导包基础组件一定要导入react-native的包，不能导入index目录下的Text，view什么的
import React, { Component } from 'react';
import { Image, Text , View} from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>

                <Image source={pic} style={{width: 193, height: 110}} />
                <Text>hello world</Text>

            </View>
        );
    }
}