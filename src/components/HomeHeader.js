import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native'
import RNC from 'react-native-css'

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'

const {width, height} = Dimensions.get('window')

export default class HomeHeader extends React.Component {

  render () {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>微信（156）</Text>
        <Image
          resizeMode='contain'
          style={[styles.headerImageSize, styles.headerImageSearch]}
          source={require('src/assets/imgs/ic_search_white.png')}/>
        <Menu style={[styles.headerImageSize, styles.headerImageAdd]}>
          <MenuTrigger style={[styles.headerImageSize]}>
            <Image resizeMode='contain' style={[styles.headerImageSize]}
                   source={require('src/assets/imgs/ic_add_white.png')}/>
          </MenuTrigger>
          <MenuOptions customStyles={optionsStyles}>
            <MenuOption onSelect={() => alert(`发起群聊`)}>
              <View style={styles.menu}>
                <Image style={styles.menuIcon} source={require('src/assets/imgs/ic_create_group_cheat.png')}/>
                <Text style={styles.menuText}>发起群聊</Text>
              </View>
            </MenuOption>
            <MenuOption onSelect={() => alert(`添加朋友`)}>
              <View style={styles.menu}>
                <Image style={styles.menuIcon} source={require('src/assets/imgs/ic_add_friend.png')}/>
                <Text style={styles.menuText}>添加朋友</Text>
              </View>
            </MenuOption>
            <MenuOption onSelect={() => alert(`扫一扫`)}>
              <View style={styles.menu}>
                <Image style={styles.menuIcon} source={require('src/assets/imgs/ic_scan_white.png')}/>
                <Text style={styles.menuText}>扫一扫</Text>
              </View>
            </MenuOption>
            <MenuOption onSelect={() => alert(`收付款`)}>
              <View style={styles.menu}>
                <Image style={styles.menuIcon} source={require('src/assets/imgs/ic_payment_received.png')}/>
                <Text style={styles.menuText}>收付款</Text>
              </View>
            </MenuOption>
            <MenuOption onSelect={() => alert(`帮助与反馈`)}>
              <View style={styles.menu}>
                <Image style={styles.menuIcon} source={require('src/assets/imgs/ic_help_feedback.png')}/>
                <Text style={styles.menuText}>帮助与反馈</Text>
              </View>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    )
  }
}

// language=CSS
const styles = RNC(`
.header {
    flex: 0;
    height: 50px;
    width: ${width};
    background-color: #373b3e;
    position: absolute;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: row;
    overflow: hidden;
}

.headerTitle {
    color: #fff;
    font-size: 20px;
}

.headerImageSize {
    width: 30px;
    height: 50px;
}

.headerImageAdd {
    position: absolute;
    right: 16px;
}

.headerImageSearch {
    position: absolute;
    right: 64px;
}

.menu {
    flex-direction: row;
    align-items: center;
}

.menuIcon {
    width: 20px;
    height: 20px;
}

.menuText {
    color: #fff;
    margin-left: 12px;
}
`)

const optionsStyles = {
  optionsContainer: {
    marginTop: 50,
    backgroundColor: '#373b3e',
  },
  optionsWrapper: {
    backgroundColor: '#373b3e',
  },
  optionWrapper: {
    backgroundColor: '#373b3e',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18
  },
  optionTouchable: {
    underlayColor: '#373b3e',
    activeOpacity: 50,
  },
  optionText: {
    color: '#fff',
  },
}

