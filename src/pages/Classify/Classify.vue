<template>
  <div id="classify">
    <div class="classify-header">
      <div class="classify-search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品, 共19966款好物</span>
      </div>
    </div>
    <div class="classify-left">
      <ul>
       <li>sssss</li>
      </ul>
    </div>
    <div class="classify-right"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getclassify')
    },
    computed:{
      ...mapState(['classify']),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #classify
    height 100%
    .classify-header
      display flex
      height 1.1733rem
      align-items center
      padding 0 .4rem
      background-color: #fff;
      position relative
      top 0
      left 0
      .classify-search
        width 100%
        height .74667rem
        display flex
        justify-content center
        align-items center
        background-color: #ededed;
        border-radius .10667rem
        i
          font-size .37333rem
          margin-right .13333rem
        span
          color #666
    .classify-left
      position fixed
      top 1.1733rem
      left 0
      background-color: red;
      width 2.16rem
</style>

