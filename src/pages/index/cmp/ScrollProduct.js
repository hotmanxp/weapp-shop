import Taro, { Component } from '@tarojs/taro'
import { ScrollView, View, Image } from '@tarojs/components'
import Item from './Item'

import './style.less'

export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    const { hotList } = this.props
    return (
      <View className='scroll-container'>
        <View>
          <Image
            className='img'
            src='https://img.ithome.com/newsuploadfiles/focus/c79f7ba2-c4d7-41a5-a487-a81ebcde0135.jpg'
          />
        </View>
 
        <ScrollView
          style='white-space: nowrap;'
          className=''
          scrollX
          scrollWithAnimation
          scrollTop='0'
          lowerThreshold='20'
          upperThreshold='20'
          // onScrolltoupper={this.onScrolltoupper}
          // onScroll={this.onScroll}
        >
          {
            hotList.map(i => (
              <Item key={i.id} item={i} />
            ))
          }
        </ScrollView>
      </View>
    )
  }
}