import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton } from 'taro-ui'

import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goDetail = () => {
    Taro.navigateTo({
      url: '/pages/detail/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <AtButton onClick={this.goDetail}>Go</AtButton>
      </View>
    )
  }
}

export default Index 
