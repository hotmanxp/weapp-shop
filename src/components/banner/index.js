import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem } from '@tarojs/components'


class Banner extends Component {

  render () {
    return (
      <View className='banner'>
				<Text>Banner</Text>
				<Swiper
  				className='test-h'
  				indicatorColor='#999'
  				indicatorActiveColor='#333'
  				circular
  				indicatorDots
  				autoplay
				>
					<SwiperItem>
						<View className='demo-text-1'>1</View>
					</SwiperItem>
					<SwiperItem>
						<View className='demo-text-2'>2</View>
					</SwiperItem>
					<SwiperItem>
						<View className='demo-text-3'>3</View>
					</SwiperItem>
				</Swiper>
      </View>
    )
  }
}

export default Banner 
