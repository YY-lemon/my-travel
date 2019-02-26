<template>
  <div class="icons">
    <swiper>
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
  data () {
    return {
      iconList: [
        {
          id:'0001',
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc:'景点门票景点门票景点门票景点门票景点门票景点门票景点门票'
        }, {
          id:'0002',
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc:'一日游'
        }, {
          id:'0003',
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc:'北京必游'
        }, {
          id:'0004',
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          desc:'溜娃儿'
        }, {
          id:'0005',
          imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png",
          desc:'爬长城'
        }, {
          id:'0006',
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          desc:'故宫'
        }, {
          id: '0007',
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
          desc:'茶馆相声'
        }, {
          id:'0008',
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          desc:'踏青赏花'
        }, {
          id:'0009',
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          desc:'泡温泉'
        }, {
          id:'0010',
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc:'动植物园'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item,index) => {
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
      bottom: 0.22rem;
      right: 0;
      top: 0;
      left: 0;
      padding: 0.05rem;
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
        height: 0.22rem;
        line-height: 0.22rem;
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