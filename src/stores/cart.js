// stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    isCartModalOpen: false,

  }),

  getters: {
    cartCount: (state) =>
      state.cart.reduce((total, item) => total + item.quantity, 0)
  },
  actions:{
     removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      this.saveCartToLocalStorage();

    },
    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  loadCartFromLocalStorage() {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
    },
  
    addToCart(product) {

      const cartItem = this.cart.find((item) => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      //this.openCartModal();
      this.saveCartToLocalStorage();
      alert("Add to Cart Successfully");
      this.isCartModalOpen = true;
    },
     openCartModal() {
      this.isCartModalOpen = true
    },

    closeCartModal() {
      this.isCartModalOpen = false
    }
  }
})