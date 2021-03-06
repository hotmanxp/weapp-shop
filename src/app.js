import '@tarojs/async-await'
import './style/custom-theme.scss'

import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'
import homeStore from './store/home'
import detailStore from './store/detail'
import productStore from './store/products'

import './app.less'
import './font/iconfont.css'

// 如果需要在 h5 环境中开启 React Devtools //
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore, 
  homeStore,
  detailStore,
  productStore
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/products/index',
      'pages/shop_car/index',
      'pages/me/index',
      'pages/detail/index',
      'pages/address/index',

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#333',
      selectedColor: '#b10000',
      backgroundColor: '#FFFFFF',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
        },{
          pagePath: 'pages/products/index',
          text: '商品',
        },{
          pagePath: 'pages/shop_car/index', 
          text: '购物车',
        },{
          pagePath: 'pages/me/index',
          text: '我',
        },
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
