import { observable } from 'mobx'
import { searchProduct } from './services'

const DEFAULT_SIZE = 10

const productStore = observable({
  products: [],
  current: 1,
  pageSize: DEFAULT_SIZE,
  hasMore: true,
  loading: false,

  async searchProducts(params) {
    this.loading = true
    const res = await searchProduct(params)
    const { productList, hasMore } = res
    this.loading = false
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
