<template>
    <div class="weekend">
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
               <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="">
               </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
           
<script>
export default{
    name: 'HomeWeekend',
    props: {
        list:Array
    }
}
</script>
<style lang='less'scoped>
    .weekend {
       .title {
            line-height: 0.8rem;
            background-color: #eee;
            // margin-top: 0.2rem;
            text-indent: 0.2rem;
       }
       .item {
           .item-img-wrapper {
               overflow: hidden;
               height: 0;
               padding-bottom: 37.09%;
           }
            img {
                width: 100%;
            }
            .item-info {
                padding: 0.1rem;
                .item-title {
                    line-height: 0.54rem;
                    font-size: 0.32rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .item-desc {
                    line-height: 0.4rem;
                    color:#ccc;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
       } 
    }     
</style>