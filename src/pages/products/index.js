import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text, Icon, ScrollView } from '@tarojs/components'
import { AtIcon, AtTabsPane, AtTag, AtSearchBar, AtLoadMore, AtActivityIndicator } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import classnames from 'classnames'

import ProItem from './ProItem'

import './index.less'

@inject('productStore')
@observer
class Index extends Component {

  state = {
    height: 600,
    loading: false
  }

  config = {
    navigationBarTitleText: '商品'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res.windowHeight);
        this.setState({
          height: res.windowHeight
        })
      },
    })
 
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
    console.log('triger')
    this.setState({ loading: true })
    const { current, hasMore } = this.props.productStore
    if(!hasMore || this.state.loading) return
    this.props.productStore.searchProducts({
      current: current + 1
    }, () => this.setState({ loading: false }))
  }
  getStatus = () => {
    const { loading } = this.state
    const { hasMore } = this.props.productStore
    if (loading) return 'loading'
    if (hasMore) return 'more'
    return 'noMore'
  }

  render () {
    const { products, hasMore } = this.props.productStore
    console.log(hasMore)
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
        <View className='refrash'>
          <Text >Refrash</Text>
        </View>
        <View className='scroll-box'>
          <ScrollView
            className='scrollview fm'
            scrollY
            style={`height: ${this.state.height -76}px;`}
            // scrollWithAnimation
            scrollTop='0'
            lowerThreshold='5'
            onScrollToLower={this.onScrolltoupper}
            // onScroll={this.onScroll}
          >
            {
              products.slice().map( i => <ProItem item={i} key={i.id} />)
            }
            <AtActivityIndicator
              className={classnames('loading-icon', {noMore: !hasMore})}
              content={`${hasMore ? '加载中...' : '没有更多'}`}
              mode='normal'
            />
          </ScrollView>
        </View>
        
      </View>
    )
  }
}

export default Index 

