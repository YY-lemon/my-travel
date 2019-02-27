<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-fanhui back-icon"></div>
        </div>
        <div class="header-input">
            <span class="iconfont icon-sousuo"></span> 
            输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont icon-jiantouarrow486 arrow-icon"></span>
            </div>
        </router-link>
        
    </div>
</template>
<script>
export default {
    name:'HomeHeader',
    props: {
        city:String
    } 
}
</script>
<style lang="less" scoped>
    .header {
        display: flex;
        height: 0.86rem;
        line-height: 0.86rem;
        background-color: #00bcd4;
        color:#fff;
        .header-left {
            width: 0.64rem;
            float: left;
            .back-icon {
                font-size:20px;
                text-align: center;
            }
        }
        .header-input {
            height: 0.64rem;
            line-height: 0.64rem;
            flex:1;
            border-radius: 0.2rem;
            background-color: #fff;
            margin-top: 0.12rem;
            margin-left: 0.2rem;
            color:#ccc;
            padding-left: 0.2rem;
            box-sizing: border-box;
        }
        .header-right {
            width: 1.24rem;
            float: right;
            text-align: center;
            color:#fff;
            .arrow-icon {
                font-size: 16px;
                margin-left: -0.08rem;
            }
        }
    }
</style>
