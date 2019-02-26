<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.url" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
           
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          loop:true
        }
      },
      swiperList: [
        {
          id: "001",
          url:
            "http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"
        },
        {
          id: "002",
          url:
            "http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg"
        },
        {
          id: "003",
          url:
            "http://img1.qunarzz.com/piao/fusion/1811/29/2a6b77b6ff72402.jpg_750x200_d4cec568.jpg"
        },
        {
          id: "004",
          url:
            "http://img1.qunarzz.com/piao/fusion/1812/82/485722b356f99302.jpg_750x200_dcc608d6.jpg"
        },
        {
          id: "005",
          url:
            "http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg"
        },
        {
          id: "006",
          url:
            "http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg"
        }
      ]
    };
  }
};
</script>
<style lang='less'scoped>
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 26.5%;
  overflow: hidden;
  img {
    width: 100%;
  }
  /deep/ .swiper-pagination-bullet-active {
      background-color: #fff;
  }
}
</style>