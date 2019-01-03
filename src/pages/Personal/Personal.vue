<template>
  <div id="personal">
    <div class="header">
      <i class="iconfont icon-homepage"></i>
      <span></span>
      <span>
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuchekong"></i>
      </span>
    </div>
    <div class="content">
      <div class="login">
        <div class="top">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="yanxuan">
        </div>
        <div class="down">
          <div class="phone">
            <i class="iconfont icon-dynamic"></i>
            <span>手机号码登录</span>
          </div>
          <div class="email">
            <i class="iconfont icon-order"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="linkto">
            <span>手机快捷注册</span>
            <i class="iconfont icon-xiala"></i>
          </div>
        </div>
      </div>
      <div class="text"></div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #personal
    width 100%
    height 100%
    .header
      bottom-border-1px(#333)
      box-sizing border-box
      width 100%
      padding 0 .21333rem 0 .32rem
      height 1.17333rem
      display flex
      align-items center
      justify-content space-between
      i
        font-size .75333rem
        margin-left .1rem
      span
        &:nth-child(2)
          width 2.29333rem
          height .72rem
          background-position 0 -1.70667rem
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
</style>

