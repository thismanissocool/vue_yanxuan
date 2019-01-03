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
       <li v-for="(item, index) in categoryL1List" :key="index" @click="getIndex(index)">{{item.name}}</li>
      </ul>
    </div>
    <div class="classify-right">
      <div class="top">
        <img v-if="categoryL1List[itemIndex]" :src="categoryL1List[itemIndex].bannerUrl">
      </div>
      <div class="right-content">
        <ul v-if="categoryL1List[itemIndex]">
          <li v-for="(item, index) in categoryL1List[itemIndex].subCateList" :key="index">
            <img :src="item.bannerUrl">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        itemIndex: 0
      }
    },
    mounted(){
      this.$store.dispatch('getcategoryL1List'/*, () => {
        this.$nextTick(() => {
          new BScroll('.classify-left', {
            click: true,
            scrollY: true, // 水平滑动
          });
        })
      }*/);
      new BScroll('.classify-left', {
        click: true,
        scrollY: true,
      });

    },
    computed:{
      ...mapState(['categoryL1List']),
    },
    methods:{
      getIndex(index){
        this.itemIndex = index;
      }
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
      z-index 5
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
      top 1.17333rem
      left 0
      background-color: #fff;
      width 2.16rem
      height 100%
      ul
        padding-bottom 1.84rem
        li
          width 100%
          height .66667rem
          line-height .66667rem
          margin-top .53333rem
          text-align center
          color #333
          &:first-child
            margin-top 0
    .classify-right
      box-sizing border-box
      margin-left 2.16rem
      padding .4rem .4rem .28rem
      .top
        position relative
        width 100%;
        height 2.56rem
        /*display: table;*/
        margin-bottom .42667rem
        background center no-repeat #f4f4f4
        background-size cover
        border-radius 4px
        img
          width 100%
          height 2.56rem
      .right-content
        width 100%
        li
          display inline-block
          box-sizing border-box
          margin-right .45333rem
          font-size .32rem;
          text-align center
          width 1.92rem
          height 2.88rem
          vertical-align top
          &:nth-child(3n)
            margin-right 0
          img
            width 1.92rem
            height 1.92rem
          span
            height .96rem
            font-size .32rem
            line-height .48rem
</style>

