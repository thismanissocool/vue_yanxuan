<template>
  <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goTo('/msite')" :class="{on: $route.path === '/msite'}">
      <i class="iconfont icon-homepage"></i>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/classify')" :class="{on: $route.path === '/classify'}">
      <i class="iconfont icon-order"></i>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/article')" :class="{on: $route.path === '/article'}">
      <i class="iconfont icon-dynamic"></i>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/cart')" :class="{on: $route.path === '/cart'}">
      <i class="iconfont icon-gouwuchekong"></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/personal')" :class="{on: $route.path === '/personal'}">
      <i class="iconfont icon-people"></i>
      <span>个人</span>
    </a>
  </div>
</template>

<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../common/stylus/mixins.styl'
  .footer_guide
    top-border-1px(#d9d9d9)
    display flex
    justify-content space-around
    position fixed
    bottom 0
    left 0
    right 0
    background-color: #fff;
    width 100%
    height 1.30667rem
    .guide_item
      display flex
      flex 1
      flex-direction column
      text-align center
      align-items center
      margin-top .2rem
      &.on
        color red
      span
        font-size .32rem
        margin-top .09333rem
      i
        font-size .53333rem


</style>

