import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {
    cart:[]
  },
  getters: {
  },
  mutations: {
    addCart(state, data){
      state.cart.push(data)
      return state.cart
    },
    addNumber(state, data){
      for(let i = 0; i <= state.cart.length - 1; i++){
        if(state.cart[i].cartItemId == data.cartItemId){
          if(state.cart[i].number + data.number > 10){
            state.cart[i].number = 10
          }
          else{
            state.cart[i].number+=data.number
          }
          return state.cart
        }
      }
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]  
})
