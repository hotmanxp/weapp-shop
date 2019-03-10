import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'




class Loading extends Component {
  render () {
    const { loading, children } = this.props
    return <AtActivityIndicator mode='center'></AtActivityIndicator>
  }
}

export default Loading 
