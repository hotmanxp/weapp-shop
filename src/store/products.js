import { observable } from 'mobx'
import { searchProduct } from './services'

const DEFAULT_SIZE = 10

const productStore = observable({
  products: [],
  current: 1,
  pageSize: DEFAULT_SIZE,
  hasMore: true,

  async searchProducts(params, cb) {
    const res = await searchProduct(params)
    cb && cb()
    const { productList, hasMore } = res
    if (params.current !== 1) {
      this.products = this.products.concat(productList)
      this.hasMore = hasMore
      this.current = this.current + 1
    } else {
      this.products = [...productList]
    }
  },
})

export default productStore
