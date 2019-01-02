<template>
  <div id="msite">
    <div class="msite-top">
      <div class="msite_search">
        <a href="javascript:;" class="logo"></a>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品, 共19966款好物</span>
        </div>
        <div class="search_login">登录</div>
      </div>
      <div class="tabWarp">
        <!--<div class="warpList">-->
          <!--<ul class="list">-->
            <!--<li class="txt">推荐</li>-->
            <!--<li v-for="(item, index) in warpList" :key="index">{{item.name}}</li>-->
          <!--</ul>-->
        <!--</div>-->
        <div class="wrapper">
          <ul class="content">
            <li class="txt">推荐</li>
            <li v-for="(item, index) in warpList" :key="index">{{item.name}}</li>
          </ul>
          <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
        </div>
        <div class="warpToggle">
          <div class="toggle">
            <i class="iconfont icon-xiala"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="slideWarp">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!--<div class="swiper-slide">slider1</div>-->
          <!--<div class="swiper-slide">slider2</div>-->
          <!--<div class="swiper-slide">slider3</div>-->
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/089fdc9bfdc75ccfbe9c349d0096804b.jpg?imageView&quality=75&thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/45e2a2c3cf3e6881fbbcdf0b4f1a54e8.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/5c34dc433aabb6f237dc726ae6087c5f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/22c9df75da89c6a8ea7aa99287fb5d67.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0dde49bdc6a317125c1a051a81cce8d4.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/45e2a2c3cf3e6881fbbcdf0b4f1a54e8.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="warp-bottom">
        <ul class="bottom-list">
          <li>
            <i class="iconfont icon-duigou"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="iconfont icon-duigou"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="iconfont icon-duigou"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="msite-content">
      <div class="kingKongModule">
        <ul>
          <li v-for="(item, index) in contentInfo.kingKongModule.kingKongList" :key="index">
            <img :src="item.picUrl" alt="">
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>
      <div class="freshmanModule">
        <div class="top">
          <span>新人专享</span>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      this.$store.dispatch('getwarplist'/*,() => { // 状态数据更新了
        this.$nextTick(() => {
          // 创建swiper对象的时机: 列表数据显示之后
          new Swiper('.swiper-container', { // 配置对象
            loop: true, // 循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          });
          // 创建水平的scroll
          new BScroll('.wrapper', {
            click: true,
            scrollX: true, // 水平滑动
          });
        })
      }*/);
      this.$store.dispatch('getcontentinfo');


      // 创建水平的scroll
      new BScroll('.wrapper', {
        click: true,
        scrollX: true, // 水平滑动
      });
      new Swiper('.swiper-container', { // 配置对象
        loop: true, // 循环轮播
        autoplay: true, //
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },

    computed:{
      ...mapState(['warpList', 'contentInfo']),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #msite
    height 100%
    .msite-top
      .msite_search
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        padding .21333rem .4rem
        background #fff
        .logo
          width 1.84rem
          height .53333rem
          display inline-block
          margin-right .26667rem
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
        .search
          display flex
          justify-content center
          align-items center
          height .74667rem
          font-size .37333rem
          background #ededed
          border-radius .10667rem
          i
            font-size .53333rem
            margin-right .13333rem
            margin-left .53333rem
          span
            color: #666
            font-size .37333rem
            margin-right .37333rem
        .search_login
          width .98667rem
          height .53333rem
          margin-left .21333rem
          font-size .32rem
          line-height .53333rem
          text-align center
          color: #b4282d
          border 1px solid #b4282d
          border-radius .11333rem

      .tabWarp
        position relative
        .wrapper
          overflow hidden
          padding-left .4rem
          font-size .37333rem
          .content
            display flex
            width 16rem
            li
              padding 0 .21333rem
              line-height .8rem
              flex none
              &.txt
                position relative
                border none
                &:after
                  content ''
                  position absolute
                  left 0
                  bottom 0
                  width 100%
                  height 5px
                  background-color #b4282d
        .warpToggle
          position absolute
          top 0
          right  0
          height .8rem
          width 2.133rem
          background-color: #fff;
          .toggle
            width 1.3333rem
            height .8rem
            position absolute
            top 0
            right 0
            text-align center
            line-height .8rem
            i
              display inline-block
              font-size .6667rem
              margin-top .15rem



    .slideWarp
      .warp-bottom
        background-color: #fff;
        color #B4282D
        .bottom-list
          box-sizing border-box
          display flex
          width 100%
          height .96rem
          padding 0 .4rem
          align-items center
          li
            flex 1
            display inline-block
            vertical-align middle
            height .42667rem
            i
              font-size .42667rem
            span
              font-size .32rem
              margin-left .10667rem
              line-height .42667rem
              display inline-block
              vertical-align middle

    .msite-content
      width 100%
      .kingKongModule
        padding-bottom .69333rem
        ul
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          li
            display flex
            flex-direction column
            width 1.46667rem
            height 2.08rem
            float left
            margin .13333rem .26667rem 0
            img
              width 1.46667rem
              height 1.46667rem
            span
              margin-top .13333rem
              text-align center
              font-size .32rem
              line-height .48rem
              white-space nowrap

      .freshmanModule
        margin-top .26667rem
        padding-bottom .4rem
        background #fff
        .top
          box-sizing border-box
          padding: 0 .4rem;
          background: #fff;
          overflow: hidden;
          height 1.2rem
          width 100%
          text-align center
          font-family PingFangSC-Regular
          span
            font-size .42667rem
            line-height 1.2rem

</style>

