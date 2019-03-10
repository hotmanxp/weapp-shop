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
          <View>{title}</View>
          <View>{price}</View>
        </View>
      </View>
    )
  }
}