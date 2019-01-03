<template>
  <div id="cart">
    <div class="header">
      <span>购物车</span>
      <a href="javascript:;">领券</a>
    </div>
    <div class="nav">
      <ul>
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
        <li>慢88免邮费</li>
      </ul>
    </div>
    <div class="content">
      <div class="top"></div>
      <div class="bottom">
        <div class="text">去添加点什么吧</div>
        <div class="login" @click="$router.push('/personal')">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #cart
    height 100%
    width 100%
    background-color #f4f4f4
    .header
      bottom-border-1px(#000)
      position relative
      height 1.1733rem
      box-sizing border-box
      text-align center
      line-height 1.1733rem
      padding 0 .4rem
      background-color: #fff;
      a
        position absolute
        right .8rem
        color #B4282D
        font-size .4rem
      span
        font-size .48rem

    .nav
      width 100%
      box-sizing border-box
      ul
        position relative
        padding 0 .4rem
        height .93333rem
        background-color #f4f4f4
        display flex
        align-items center
        justify-content space-between
        li
          font-size .32rem
          color #666
    .content
      box-sizing border-box
      width 100%
      .top
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
        width 3.30667rem
        height 3.30667rem
        margin 0 auto
        margin-top 5.3333rem
      .bottom
        width 100%
        .text
          font-size .37333rem
          text-align center
          margin-bottom .6667rem
          color #999
        .login
          width 6.4rem
          height 1.22667rem
          background-color: #b4282d
          font-size .4rem
          line-height 1.22667rem
          text-align center
          color #fff
          margin 0 auto

</style>

