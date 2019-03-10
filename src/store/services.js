import { bannerList, hotProductList, productDetail, productItem } from './mock'

const mock = (data, time = 1) => new Promise(res => setTimeout(() => res(data), time*1000))

export const getBanner = () => {
  return bannerList
}

export const getHotList = () => {
  return hotProductList
}

export const getProductDetail = (pid) => {
  return mock(productDetail, 3)
}

export const searchProduct = params => {
  const { current, sort, search } = params
  const res = {
    current,
    productList: Array.from({length: 10}, (_, idx) => ({
      ...productItem,
      id: current * 10 + idx,
      title: `${productItem.title}-${current*10+idx}`,
      price: productItem.price+current*10+idx
    })),
    hasMore: current * 10 < 65,

  }
  return mock(res, 1)
}
