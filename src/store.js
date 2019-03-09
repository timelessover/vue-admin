import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10
  },
  getter:{
     getCount : state => {
      return state.count
    }
  },
  mutations: {
    Increment:(state)=>{
      state.count++
    },
    Decrement:(state)=>{
      state.count--
    }
  },
  actions: {
     increment:({commit})=>{
      commit('Increment')
    },
      decrement:({commit}) => {
      commit('Decrement')
    }
  }
})
