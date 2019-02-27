<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
           
<script>
export default {
  name: "HomeSwiper",
  props: {
      list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          loop:true
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
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