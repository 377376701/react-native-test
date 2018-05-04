// 这个文件负责对我们需要跳转的页面进行注册（相当于在Android中每一个Activity都需要在清单文件中注册），同时也创建了navigation供后续操作。

// import {StackNavigator} from 'react-navigation';
import {StackNavigator} from 'react-navigation';
import React from 'react';

import App from './page/App';
import Main from './page/Main';
//使用动画时使用这个类
import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator";

//初始化StackNavigator

export default ApplicationApp = StackNavigator(
    //默认加载第一个页面，这里用来注册需要跳转的页面，相当于Mainfest.xml文件
    {
        App: {
            screen: App,
        },
        Main: {
            screen: Main,
        },
    },
    {
        // mode:'modal',
        headerMode: 'screen',
        transitionConfig: () => ({
            // 只要修改最后的forVertical就可以实现不同的动画了。
            //  1、从右向左：  forHorizontal；
            // 2、从下向上：  forVertical；
            // 3、安卓那种的从下向上： forFadeFromBottomAndroid；
            // 4、无动画：  forInitial。
            screenInterpolator: CardStackStyleInterpolator.forHorizontal,
        })
    });
