import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'

import './style.less'


class Banner extends Component {

  render () {
		const { banner } = this.props
    return (
      <View className='banner'>
				<Swiper
  				className='container'
  				indicatorColor='#ccc'
  				indicatorActiveColor='#b10000'
  				circular
  				indicatorDots
  				autoplay
				>
					{
						banner.map(i => (
						<SwiperItem key={i.id}>
							<Image src={i.imgSrc} className='img' />
						</SwiperItem>
						))
					}
				</Swiper>
      </View>
    )
  }
}

export default Banner 
