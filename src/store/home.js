import { observable } from 'mobx'
import { getBanner, getHotList } from './services'

const homeStore = observable({
  bannerList: [],
  hotList: [],
  async getBanner() {
    const bannerList = await getBanner()
    this.bannerList = bannerList
  },
  async getHotList() {
    const hotList = await getHotList()
    this.hotList = hotList
  }
})

export default homeStore