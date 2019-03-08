import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text, AtIcon, Icon } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.less'


@inject('counterStore')
@observer
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

  render () {
    return (
      <View className='product-page'>
        <Input className='input-el' />
        <Text>Product</Text>
        <Icon size='20' type='search' color='#b10000' />
        <AtIcon
          className='grid-box-item_icon-small'
          prefixClass='icon' 
          value='sousuo' 
          size='30' color='red'
        >
        </AtIcon>
      </View>
    )
  }
}

export default Index 
