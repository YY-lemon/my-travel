<template>
    <div class="recommend">
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
           
<script>
export default{
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [
                {
                    id:'0001',
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
                    title:'故宫',
                    desc:'世界五大宫之首，穿越与您近在咫尺'
                }, {
                    id:'0002',
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
                    title:'北京欢乐谷',
                    desc:'亚洲唯一飞行式过山车等你来挑战'
                }, {
                    id:'0003',
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg",
                    title:'远去的恐龙',
                    desc:'一部不可思议的巨制演艺作品'
                }, {
                    id:'0004',
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg",
                    title:'八达岭长城故宫',
                    desc:'不到长城非好汉'
                }, {
                    id:'0005',
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1411/43/dea8b51719a4a69b68777baa68c146e4.water.jpg_200x200_8da8cebe.jpg",
                    title:'春晖园温泉度假村',
                    desc:'北京高端温泉，近年价格越来越亲民'
                }
            ]
        }
    }
}
</script>
<style lang='less'scoped>
    .recommend {
       .title {
            line-height: 0.8rem;
            background-color: #eee;
            margin-top: 0.2rem;
            text-indent: 0.2rem;
       }
       .item {
            display: flex;
            height: 1.9rem;
            overflow: hidden;
            img {
                width: 1.7rem;
                height: 1.7rem;
                padding: 0.1rem;
            }
            .item-info {
                flex:1;
                padding: 0.1rem;
                min-width: 0;
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
                .item-button {
                    background-color: #ff9300;
                    padding: 0 0.2rem;
                    border-radius: 0.06rem;
                    color:#fff;
                    margin-top: 0.16rem;
                    line-height: 0.44rem;
                }
            }
       } 
    }     
</style>