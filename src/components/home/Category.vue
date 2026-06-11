<template>
    <div>
<!-- CATEGORY -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="flex items-end justify-between mb-10">
    <div>
      <h2 class="text-3xl font-bold text-slate-900 tracking-tight">Browse by Category</h2>
      <p class="text-slate-400 text-sm mt-2">Find the exact hardware ecosystem you need.</p>
    </div>
    <button class="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group">
      View All Categories <span class="group-hover:translate-x-1 transition-transform">→</span>
    </button>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
    <!-- Cat 1 -->
    <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
      <div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">💻</div>
      <h3 class="mt-5 text-lg font-bold text-slate-900">Laptops</h3>
      <p class="text-slate-400 text-xs mt-1 font-medium">120 Products</p>
    </div>
    <!-- Cat 2 -->
    <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
      <div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">📱</div>
      <h3 class="mt-5 text-lg font-bold text-slate-900">Smartphones</h3>
      <p class="text-slate-400 text-xs mt-1 font-medium">90 Products</p>
    </div>
    <!-- Cat 3 -->
    <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
      <div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">🎧</div>
      <h3 class="mt-5 text-lg font-bold text-slate-900">Audio Gear</h3>
      <p class="text-slate-400 text-xs mt-1 font-medium">60 Products</p>
    </div>
    <!-- Cat 4 -->
    <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
      <div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">⌚</div>
      <h3 class="mt-5 text-lg font-bold text-slate-900">Smartwatches</h3>
      <p class="text-slate-400 text-xs mt-1 font-medium">40 Products</p>
    </div>
  </div>
</section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>