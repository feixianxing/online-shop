<template>
  <view class="my-search-container" :style="{'background-color':bgcolor}">
    <!-- 使用 view 组件模拟 input 输入框的样式 -->
    <view 
    class="my-search-box" 
    :style="{'border-radius':radius+'px'}"
    @click="searchBoxHandler">
      <uni-icons type="search" size="17"></uni-icons>
      <text class="placeholder">搜索</text>
    </view>
  </view>
</template>

<script>
  import UniIcons from '../../components/uni-icons/uni-icons'
  export default {
    components:{UniIcons},
    name:"my-search",
    props:{
      // 背景颜色
      bgcolor:{
        type: String,
        default: '#c00000'
      },
      // 圆角尺寸
      radius:{
        type: Number,
        //单位是px
        default: 18
      }
    },
    data() {
      return {
      };
    },
    methods:{
      // 点击了模拟的 input 输入框
      searchBoxHandler(){
        // 触发外界通过 @click 绑定的 click 事件处理函数
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss">
  .my-search-container{
    // 移除背景颜色，由props属性控制
    // background-color: #c00000;
    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
  
  .my-search-box{
    height: 36px;
    background-color: #fff;
    // 移除圆角尺寸， 由props属性控制
    // border-radius: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
    .placeholder{
      font-size: 12px;
      margin-left: 5px;
    }
  }
</style>