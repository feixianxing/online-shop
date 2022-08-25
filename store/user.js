export default {
  // 开启命名空间
  namespaced: true,
  
  // state 数据
  state: () => ({
    // 收获地址
    address: JSON.parse(uni.getStorageSync('address') || '{}'),
  }),
  
  // 方法
  mutations: {
    // 更新收货地址
    updateAddress(state, address){
      state.address = address
      this.commit('m_user/saveAddressToStorage')
    },
    saveAddressToStorage(state){
      uni.setStorageSync('address', JSON.stringify(state.address))
    }
  },
  
  // 数据打包器
  getters: {
    // 收货详细地址的计算属性
    addstr(state){
      if(!state.address.provinceName) return ''
      // 拼接 省、市、区，详细地址 的字符串并返回给用户
      return this.address.provinceName + this.address.cityName + this.address.countyName + this.address.detailInfo
    }
  },
}