/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 导包基础组件一定要导入react-native的包，不能导入index目录下的Text，view什么的
import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    PixelRatio,
    TextProps as numberOfLines,
    Alert,
    TouchableOpacity
} from 'react-native';

export default class ListItem extends Component {

    show(title) {
        alert(title);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.show.bind(this, this.props.title)}>
                <View style={styles.list_item}>
                    <Text style={styles.list_item_font} numberOfLines={1}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center',
    },
    list_item_font: {
        fontSize: 16,
    },
});
// 第二种导出组件的方式
// module.exports =Header;