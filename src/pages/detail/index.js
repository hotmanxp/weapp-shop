import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtActivityIndicator } from 'taro-ui'

import Banner from '../../components/banner'
import Loading from '../../components/loading'

import './index.less'

@inject('detailStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
    console.log(this.$router)
    this.props.detailStore.getProductDetail(this.$router.pid)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { detailStore: {bannerList, loading} } = this.props
    if (loading) return <AtActivityIndicator content='加载中...' mode='center' />
    return (
      <View className='index'>
          <Banner banner={bannerList.slice()} />
          <Text>DETAIL</Text>
      </View>
    )
  }
}

export default Index 
