import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import Banner from '../../components/banner'
import ScrollProduct from './cmp/ScrollProduct'

import './index.less'


@inject('homeStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { 
    const { homeStore } = this.props
    homeStore.getBanner()
    homeStore.getHotList()
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {homeStore} = this.props
    return (
      <View className='index'>
        <Banner banner={homeStore.bannerList.slice()} />
        <ScrollProduct hotList={homeStore.hotList.slice()} />
      </View>
    )
  }
}

export default Index 
