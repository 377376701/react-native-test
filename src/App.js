/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'


// noinspection ES6CheckImport
import {
    StyleSheet,
    Text,
    View,
    PixelRatio,
    Navigator
} from 'react-native';

import Header from "./components/Header";
import ListItem from './components/ListItem';

type Props = {};
export default class App extends Component<Props> {

    render() {
        return <View style={styles.flex}>
            <View style={styles.container}>

                <View style={[styles.item, styles.center, styles.flex]}>
                    <Text style={styles.font}>主页</Text>
                </View>
                <View style={[styles.item, styles.lineLeftRight, styles.flex]}>
                    <View style={[styles.flex, styles.lineCenter, styles.center]}>
                        <Text style={styles.font}>海外酒店</Text>
                    </View>
                    <View style={[styles.flex, styles.center]}>
                        <Text style={styles.font}>特惠酒店</Text>
                    </View>
                </View>
                <View style={[styles.item, styles.flex]}>
                    <View style={[styles.flex, styles.center, styles.lineCenter]}>
                        <Text style={styles.font}>团购</Text>
                    </View>
                    <View style={[styles.flex, styles.center]}>
                        <Text style={styles.font}>客栈，公寓</Text>
                    </View>
                </View>
            </View>
            <Header></Header>
            <ListItem title='一线城市楼市退烧，有房源一日定价160万'></ListItem>
            <ListItem title='让英烈荣光永续传扬—写在英烈保护法施行之际'></ListItem>
            <ListItem title='地铁遇住宅等敏感目标环评该如何审批？环境部回应'></ListItem>
            <ListItem title='46个部委派人现场指导，海南还有尚未公开的大动作！'></ListItem>

            <ImporttantNews
                news={[
                    '北京首个智能斑马线亮相通州 闯灯通行被喊话',
                    '一个部门管市场效果怎么样？六成人员下沉一线',
                    '沪深股市交出“成绩单”，显示一个积极信号！',
                    '4月份全国50大城市土地收入2842亿 同比涨83.4%',
                ]}
            ></ImporttantNews>
        </View>;
    }

}


 class ImporttantNews extends Component {

    show(title) {
        alert(title);
    }

    render() {
        var news = [];
        for (var i in this.props.news) {
            //改变text属性一定要是小括号
            var text = (
                <Text style={styles.list_item_font}
                      onPress={this.show.bind(this, this.props.news[i])}
                      numberOfLines={1}
                      key={i}
                >{this.props.news[i]}</Text>

            );
            news.push(text);
        }
        return (
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    list_item_font: {
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center',
        fontSize: 16,
    },
    news_title: {
        color: '#cd1d1d',
        fontSize: 25,
        marginLeft: 10,
        marginTop: 20,
        fontWeight: 'bold',
    },
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
