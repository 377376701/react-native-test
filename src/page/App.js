/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import Header from "../components/Header";
import ListItem from '../components/ListItem';

type Props = {};

class App extends Component<Props> {
    //设置顶部导航栏的内容  其他属性自行百度navigationOptions
    //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
        //左侧标题
        headerTitle: '我是主页面',
        //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
        headerBackTitle: null,
        //顶部标题栏的样式
        headerStyle: styles.headerStyle,
        //顶部标题栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,
    });

    jump() {
        this.props.navigation.navigate('Main', {key: '首页'});
    }

    render() {
        return <View style={styles.flex}>
            <ScrollView>
                <View>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={this.jump.bind(this)} style={styles.flex}>
                            <View style={[styles.item, styles.center, styles.flex]}>
                                <Text style={styles.font}>主页</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.item, styles.lineLeftRight, styles.flex]}>
                            <TouchableOpacity onPress={this.jump.bind(this)} style={styles.flex}>
                                <View style={[styles.flex, styles.lineCenter, styles.center]}>
                                    <Text style={styles.font}>海外酒店</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.jump.bind(this)} style={styles.flex}>
                                <View style={[styles.flex, styles.center]}>
                                    <Text style={styles.font}>特惠酒店</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.item, styles.flex]}>
                            <TouchableOpacity onPress={this.jump.bind(this)} style={styles.flex}>
                                <View style={[styles.flex, styles.center, styles.lineCenter]}>
                                    <Text style={styles.font}>团购</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.jump.bind(this)} style={styles.flex}>
                                <View style={[styles.flex, styles.center]}>
                                    <Text style={styles.font}>客栈，公寓</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Header></Header>
                    <ListItem title='一线城市楼市退烧，有房源一日定价160万'></ListItem>
                    <ListItem title='让英烈荣光永续传扬—写在英烈保护法施行之际'></ListItem>
                    <ListItem title='地铁遇住宅等敏感目标环评该如何审批？环境部回应'></ListItem>
                    <ListItem title='46个部委派人现场指导，海南还有尚未公开的大动作！'></ListItem>
                    <ListItem title='中国成功发射亚太6C通信卫星！'></ListItem>
                    <ListItem title='西安千架无人机尬舞 创始人:年入过亿'></ListItem>
                    <ListItem title='韩获美钢铁税豁免 转头被征高额反倾销税'></ListItem>
                    <ListItem title='特朗普承认曾向艳星付封口费:在富人中很普遍'></ListItem>
                    <ListItem title='重庆小伙在荒无人烟的深山建别墅 50万造出唯美学'></ListItem>
                    <ListItem title='乔布斯遗孀1亿现金全款买旧金山豪宅 浴室就有7个'></ListItem>
                    <ListItem title='夫妻俩花30万买了个黑箱子，住上了有花园露台的房'></ListItem>
                    <ListItem title='罗志祥砸5700万购婚房 看看台湾艺人的豪宅有多'></ListItem>
                    <ListItem title='女子怀里婴儿不停哭泣 司机多看一眼引出惊人内幕'></ListItem>
                    <ListItem title='女生校内遭流浪狗追咬 校保卫处:曾组织扑杀遭反对'></ListItem>
                    <ListItem title='未婚妻哥哥劝哈里王子取消婚礼:她会让皇室成笑柄'></ListItem>
                    <ListItem title='业主将楼上楼下四套房楼板打穿 欲在屋内装电梯'></ListItem>


                    <ImporttantNews
                        news={[
                            '北京首个智能斑马线亮相通州 闯灯通行被喊话',
                            '一个部门管市场效果怎么样？六成人员下沉一线',
                            '沪深股市交出“成绩单”，显示一个积极信号！',
                            '4月份全国50大城市土地收入2842亿 同比涨83.4%',
                        ]}
                    ></ImporttantNews>
                </View>
            </ScrollView>
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
                <TouchableOpacity onPress={this.show.bind(this, this.props.news[i])} key={i}>
                    <Text style={styles.list_item_font}
                          numberOfLines={1}
                    >{this.props.news[i]}</Text>
                </TouchableOpacity>

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
    headerStyle: {
        backgroundColor: '#4398ff',
    },
    headerTitleStyle: {
        //标题的文字颜色
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
});

module.exports = App;