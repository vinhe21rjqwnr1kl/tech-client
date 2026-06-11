<template>
    <div>
   <Navbar/>
   <TrendingProducts/>
   <ShopPage/>
   <Footer/>
    </div>
  
</template>

<script setup>
import Footer from '@/components/layout/Footer.vue';
import Navbar from '@/components/layout/Navbar.vue';
import ShopPage from '@/components/product/ShopPage.vue';
import TrendingProducts from '@/components/product/TrendingProducts.vue';

  
</script>
