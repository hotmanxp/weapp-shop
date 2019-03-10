import { observable } from 'mobx'
import { getProductDetail } from './services'

const detailStore = observable({
  loading: true,
  bannerList: [],
  productInfo: {},

  async getProductDetail() {
    this.loading = true
    const detail = await getProductDetail()
    this.loading = false
    const { info } = detail
    this.bannerList = detail.bannerList || []
    this.productInfo = info
  }
})

export default detailStore
