<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img
              :src="item.imgUrl"
              alt=""
            />
            <p>{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
           
<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay:false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item,index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] =[]
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>
<style lang='less'scoped>
.icons {
  margin-top: 0.2rem;
  /deep/ .swiper-container {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
  }
  .icon {
    width: 25%;
    float: left;
    height: 0;
    padding-bottom: 25%;
    overflow: hidden;
    position: relative;
    .icon-img {
      position: absolute;
      bottom: 0.44rem;
      right: 0;
      top: 0;
      left: 0;
      padding: 0.1rem;
      box-sizing: border-box;
      img {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
      p {
        position: relative;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        color: #333;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>