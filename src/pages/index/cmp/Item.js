import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './style.less'

export default class Item extends Component {
  render () {
    const { onItemClick, item} = this.props
    const { currentPrice, marketPrice , title } = item
    return (
      <View className='scroll-item' onClick={onItemClick} >
        <Image
          className='img'
          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
        />
        <View className='title'>
          <Text >{title}</Text>
        </View>
        <View>
          <Text className='current-price'>{currentPrice}</Text>
          <Text className='market-price'>{marketPrice}</Text>
        </View>
      </View>
    )
  }
}