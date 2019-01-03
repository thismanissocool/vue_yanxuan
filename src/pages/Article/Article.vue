<template>
  <div id="article">
    <div class="header">
      <i class="iconfont icon-homepage"></i>
      <span class="middle">
        <a href="javascript:;">发现</a>
        <a href="javascript:;">甄选家</a>
      </span>
      <span>
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuchekong"></i>
      </span>
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/article/tab1" replace>推荐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/article/tab2" replace>达人</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/article/tab3" replace>上新</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/article/tab4" replace>晒单</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/article/tab5" replace>HOME</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #article
    background-color: #dedede;
    .header
      bottom-border-1px(#333)
      box-sizing border-box
      width 100%
      padding 0 .21333rem 0 .32rem
      height 1.3333rem
      display flex
      align-items center
      justify-content space-between
      background-color #fafafa
      border-bottom .01rem solid #d9d9d9
      i
        font-size .75333rem
        margin-left .1rem
      .middle
        a
          padding 0 .16rem
          vertical-align middle
          &:first-child
            font-size .5rem
            color #b4282d
            font-weight bold
    .tab
      display flex
      justify-content space-around
      align-items center
      box-sizing border-box
      width 100%
      height .95rem
      background #fafafa
      border-bottom .01rem solid #d9d9d9
      .tab-item
        float left
        width: 100%
        text-align center
        font-size 14px
        color rgb(77, 85, 93)
        a
          display block
          position relative
          &.router-link-active
            color #B4282D
            &::after
              content ''
              position absolute
              left 50%
              bottom -.3rem
              width 1rem
              height .08rem
              transform translateX(-50%)
              background #B4282D
</style>

