<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>
           
<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
export default{
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data() {
        return {
            cities: {},
            hotCities: [],
            letter:''
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            console.log(res)
            res = res.data
            if (res.ret && res.data) {
                this.cities = res.data.cities
                this.hotCities = res.data.hotCities
            }
        },
        handleLetterChange(letter) {
            // console.log(letter)
            this.letter = letter
        }
    },
    mounted () {
        this.getCityInfo()
    }       
}
</script>
<style lang='less'scoped>
            
</style>