import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text, Icon, ScrollView } from '@tarojs/components'
import { AtIcon, AtTabsPane, AtTag, AtSearchBar } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import ProItem from './ProItem'

import './index.less'
@inject('productStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '商品'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
    this.props.productStore.searchProducts({
      current: 1
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = (value) => {
    this.setState({
      current: value
    })
  }

  onSearchChange = search => {
    this.setState({
      search
    })
  }

  onScrolltoupper = () => {

    const { searchProducts, current, hasMore } = this.props.productStore
    if(!hasMore) return
    searchProducts({
      current: current + 1
    })
  }

  render () {
    const { products } = this.props.productStore
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    return (
      <View className='product-page bg-g'>
        <View className='search-header section'>
          <AtSearchBar
            value={this.state.search}
            onChange={this.onSearchChange}
          />
          <View className='label'>
            {
              tabList.map(i => (
                <AtTag key={i.title} size='small' className='tag'>{i.title}</AtTag>
              ))
            }
          </View>
        </View>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          style='height: 650px;'
          lowerThreshold='20'
          upperThreshold='20'
          onScrollToLower={this.onScrolltoupper}
          // onScroll={this.onScroll}
        >
          {
            products.slice().map( i => <ProItem item={i} key={i.id} />)
          }
          </ScrollView>
        
      </View>
    )
  }
}

export default Index 
