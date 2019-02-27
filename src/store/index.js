import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let defalutCity = '北京'
try {
    if ( localStorage.city) {
        defalutCity = localStorage.city
    }
} catch (e) {}
export default new Vuex.Store({
    state: {
        city:defalutCity
    },
    // actions: {
    //     changeCity(ctx,city) {
    //         ctx.commit('changeCity',city)
    //     }
    // },
    mutations: {
        changeCity(state,city) {
            state.city = city
            try {
                localStorage.city = city
            } catch (e) {}
        }
    }
})