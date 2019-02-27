<template>
    <ul class="alphabetList">
        <li class="item">A</li>
    </ul>
</template>
           
<script>
export default{
    name:'CityAlphabet'      
}
</script>
<style lang='less'scoped>
    .alphabetList {
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: 0.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        .item {
            text-align: center;
            line-height: 0.4rem;
            background-color: #00bcd4;
        }
    }       
</style>