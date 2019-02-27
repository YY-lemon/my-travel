<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的位置</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
           
<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array,
    letter:String
  },
  mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
        if(this.letter) {
            const el = this.$refs[this.letter][0]
            this.scroll.scrollToElement(el) //el必须是一个dom元素或者dom选择器
        }
    }
  },
};
</script>
<style lang='less'scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;
  .border-topbottom {
    &:before {
      border-color: #ccc;
    }
    &:after {
      border-color: #ccc;
    }
  }
  .border-bottom {
    &:before {
      border-color: #ccc;
    }
  }
  .area {
    .title {
      line-height: 0.54rem;
      background: #eee;
      padding-left: 0.2rem;
      font-size: 0.26rem;
      color: #666;
    }
    .button-list {
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;
      overflow: hidden;
      .button-wrapper {
        float: left;
        width: 33.33%;
        .button {
          text-align: center;
          margin: 0.1rem 0.1rem;
          padding: 0.1rem 0;
          border: 0.02rem solid #ccc;
          border-radius: 0.06rem;
        }
      }
    }
    .item-list {
      .item {
        line-height: 0.76rem;
        padding-left: 0.2rem;
      }
    }
  }
}
</style>