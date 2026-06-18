<template>
    <div>
       <!-- NAVBAR -->
<nav class="bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 fixed top-0 left-0  w-full z-50 ">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">

      <!-- Logo -->
      <router-link to="/"  class="flex items-center gap-3 group">
        <div class="w-11 h-11 rounded-xl bg-linear-to-tr from-slate-900 to-slate-700 text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-all duration-300">
          TS
        </div>
        <h1 class="text-2xl font-bold bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Tech Store
        </h1>
      </router-link>

      <!-- Menu -->
      <div class="hidden md:flex items-center gap-8 font-medium text-slate-600">
        <a href="#" class="text-slate-900 font-semibold relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-slate-900">Home</a>
        <router-link to="/products" class="hover:text-slate-900 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 hover:after:w-full after:transition-all transition">Shop</router-link>
        <a href="#" class="hover:text-slate-900 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 hover:after:w-full after:transition-all transition">About</a>
        <a href="#" class="hover:text-slate-900 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 hover:after:w-full after:transition-all transition">Pages</a>
        <a href="#" class="hover:text-slate-900 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 hover:after:w-full after:transition-all transition">Contact</a>
      </div>

      <!-- Right -->
      <div class="flex items-center gap-4">

        <!-- Search -->
        <div class="hidden lg:flex items-center bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-slate-200 px-4 rounded-xl h-11 transition-all border border-transparent focus-within:border-slate-300">
          <span class="text-slate-400 mr-2">🔍</span>
          <input type="text" placeholder="Search products..." class="bg-transparent outline-none text-sm w-52 text-slate-700" />
        </div>

        <!-- Login -->
        <button class="hidden sm:inline-flex items-center justify-center h-11 px-5 rounded-xl text-slate-700 font-medium hover:bg-slate-100 transition">
          Login
        </button>

        <!-- Register -->
        <button class="hidden sm:inline-flex items-center justify-center h-11 px-5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 shadow-sm hover:shadow transition">
          Register
        </button>

        <!-- Cart -->
        <router-link to="/checkout" class="relative bg-slate-900 text-white w-11 h-11 rounded-xl flex items-center justify-center hover:bg-slate-800 hover:scale-105 shadow-md active:scale-95 transition-all">
          <span class="text-lg">🛒</span>
          <span class="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
              {{ cartStore.cartCount }}

          </span>
        </router-link>
       

      </div>
    </div>
  </div>
</nav> 
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>

</style>