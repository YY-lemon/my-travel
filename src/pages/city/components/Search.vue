<template>
    <div class="search">
      <input type="text" placeholder="输入城市名称或拼音">
    </div>
</template>
           
<script>
export default{
    name: 'CitySearch'      
}
</script>
<style lang='less'scoped>
    .search {
        height: 0.72rem;
        background-color: #00bcd4;
        padding: 0.1rem;
        input {
            height: 0.62rem;
            line-height: 0.62rem;
            width: 100%;
            text-align: center;
            border-radius: 0.06rem;
            color:#666;
            padding: 0 0.1rem;
            box-sizing: border-box;
        }
    }       
</style>