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
    TouchableOpacity,
} from 'react-native';

type Props = {};

export default class Main extends Component<Props> {

    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle: navigation.state.params.key,
            //设置滑动返回的距离
            gestureResponseDistance: {horizontal: 300},
            //是否开启手势滑动返回，android 默认关闭 ios打开
            gesturesEnabled: true,
            //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
            headerBackTitle: null,
            //导航栏的样式
            headerStyle: styles.headerStyle,
            //导航栏文字的样式
            headerTitleStyle: styles.headerTitleStyle,
            //返回按钮的颜色
            headerTintColor: 'white',
            //隐藏顶部导航栏
            // header: null,
            //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
            headerRight: (<View/>),
            //设置导航栏左边的视图
            // headerLeft: (<View/>),
        }
    );

    render() {
        return (
            <View style={styles.flex}>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    flex: {flex: 1},
    headerStyle: {
        backgroundColor: '#4398ff',
    },
    headerTitleStyle: {
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
});
