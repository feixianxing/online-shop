export default{
  // 为当前模块开启命名空间
  namespaced: true,
  
  // 模块的 state 数据
  state: ()=>({
    // 购物车的数组，用来存储购物车中每个商品的信息对象
    // 每个商品的信息对象，都包含如下 6 个属性：
    // {goods_id, goods_name, goods_price, goods_count, goods_small_logo, goods_state}
    cart: [],
  }),
  
  // 模块的 mutations 方法
  mutations: {
    addToCart(state, goods){
      // 根据提交的商品的Id，查询购物车中是否存在这件商品
      // 如果不存在，则 findResult 为 undefined；否则，为查找到商品信息对象
      const findResult = state.cart.find((x) => x.goods.id === goods.goods_id)
      if(!findResult){
        // 如果购物车中没有这件商品，则直接 push
        state.cart.push(goods)
      }else{
        // 如果购物车中有这件商品，则只更新数量即可
        findResult.goods_count++
      }
    },
    saveToStorage(state){
      uni.setStorageSync('cart', JSON.stringify(state.cart))
    }
  },
  
  // 模块的getters 方法
  getters: {
    // 统计购物车中商品的总数量
    total(state){
      let count = 0;
      // 循环统计商品的数量，累加到变量 count 中
      state.cart.forEach(goods => count += goods.goods_count)
      return count
    }
  },
}