<template>
    <div>
    <Navbar/>
    <Hero/>
    <Category/>
    <Products/>
    <Banner/>
    <Footer/>
    </div>
   
  
   
</template>

<script setup>
   import Navbar from '@/components/layout/Navbar.vue';
   import Hero from '@/components//home/Hero.vue';
import Category from '@/components/home/Category.vue';
import Products from '@/components/product/Products.vue';
import Banner from '@/components/home/Banner.vue';
import Footer from '@/components/layout/Footer.vue';
</script>

