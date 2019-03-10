import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './product.less'

export default class Item extends Component {
  render () {
    const { onItemClick, item} = this.props
    const { price, marketPrice , title, picUrl } = item
    return (
      <View className='product-item df aic' onClick={onItemClick} >
        <View className='pic-part'>
          <Image
            className='product-pic'
            src={picUrl}
          />
        </View>
        <View className='info-part fm'>
          <View className='title'>{title}</View>
          <View className='price-part'>{`${price} 元`}</View>
        </View>
      </View>
    )
  }
}