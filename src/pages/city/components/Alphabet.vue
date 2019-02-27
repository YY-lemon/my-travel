<template>
    <ul class="alphabetList">
        <li class="item" :ref="item" v-for="item of letters" :key="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
    </ul>
</template>
           
<script>
export default{
    name:'CityAlphabet',
    props: {
        cities:Object
    },
    data() {
        return {
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick (e) {
            // console.log(e.target.innerText)
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                } 
                this.timer = setTimeout(() => {
                    // const startY = this.$refs['A'][0].offsetTop
                    // console.log(startY)
                    const touchY = e.touches[0].clientY - 89
                    // console.log(touchY)
                    const index = Math.floor((touchY - this.startY) / 20) //字母下标
                    // console.log(index)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index])
                    }
                },16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }    
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
            color: #00bcd4;
        }
    }       
</style>