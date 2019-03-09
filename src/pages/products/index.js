import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text, Icon } from '@tarojs/components'
import { AtIcon, AtTabsPane, AtTabs } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '商品'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = (value) => {
    this.setState({
      current: value
    })
  }

  render () {
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    return (
      <View className='product-page'>
        <View className='search-header'>
          <Input
            className='input-el'
            placeholder='搜索商品'
          />
          <Icon size='15' type='search' color='#b10000' className='search-icon' />
        </View>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
        <Text>Product</Text>
        <AtIcon value='clock' size='30' color='#F00'></AtIcon>
        <View className='at-icon at-icon-settings'></View>
      </View>
    )
  }
}

export default Index 
