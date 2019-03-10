import Taro from '@tarojs/taro'

export const toDetailPage = pid => {
  Taro.navigateTo({
    url: `/pages/detail/index?pid=${pid}`
  })
}

export const getUserInfo = () => {
  return {}
}