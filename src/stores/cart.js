// stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),

  getters: {
    cartCount: (state) =>
      state.cart.reduce((total, item) => total + item.quantity, 0)
  }
})