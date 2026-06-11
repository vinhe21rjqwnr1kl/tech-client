<template>
    <div>
  <!-- TRENDING PRODUCTS -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[12%]">

        <div class="flex items-end justify-between mb-10">
            <div>
                <h2 class="text-3xl font-bold text-slate-900 tracking-tight">Trending Innovations</h2>
                <p class="text-slate-400 text-sm mt-2">The most demanded tech items this week.</p>
            </div>
            <button class="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group">
                See More Products <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <!-- PRODUCT 1 -->
            <div class="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div class="relative bg-slate-50 aspect-square overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
                        class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="MacBook Pro" />
                    <span class="absolute top-4 left-4 bg-slate-900 text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg shadow-sm">
                        New
                    </span>
                    <button class="absolute top-4 right-4 bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm hover:bg-white hover:scale-110 active:scale-95 transition-all text-slate-600" title="Add to Wishlist">
                        ♥
                    </button>
                </div>

                <div class="p-6">
                    <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400">Apple Ecosystem</span>
                    <h3 class="text-lg font-bold text-slate-900 mt-1 truncate group-hover:text-indigo-600 transition-colors">
                        Macbook Pro M3
                    </h3>
                    <div class="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
                        <span>★ 4.9</span> <span class="text-slate-300">(42)</span>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-xl font-black text-slate-900">$1,999</span>
                        <button class="bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white font-semibold text-xs px-4 py-2.5 rounded-xl active:scale-95 transition-all">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            <!-- PRODUCT 2 -->
            <div class="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div class="relative bg-slate-50 aspect-square overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
                        class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="iPhone 15 Pro" />
                    <button class="absolute top-4 right-4 bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm hover:bg-white hover:scale-110 active:scale-95 transition-all text-slate-600" title="Add to Wishlist">
                        ♥
                    </button>
                </div>

                <div class="p-6">
                    <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400">Smartphones</span>
                    <h3 class="text-lg font-bold text-slate-900 mt-1 truncate group-hover:text-indigo-600 transition-colors">
                        iPhone 15 Pro
                    </h3>
                    <div class="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
                        <span>★ 4.8</span> <span class="text-slate-300">(89)</span>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-xl font-black text-slate-900">$1,299</span>
                        <button class="bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white font-semibold text-xs px-4 py-2.5 rounded-xl active:scale-95 transition-all">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            <!-- PRODUCT 3 -->
            <div class="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div class="relative bg-slate-50 aspect-square overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
                        class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Samsung S25" />
                    <button class="absolute top-4 right-4 bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm hover:bg-white hover:scale-110 active:scale-95 transition-all text-slate-600" title="Add to Wishlist">
                        ♥
                    </button>
                </div>

                <div class="p-6">
                    <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400">Smartphones</span>
                    <h3 class="text-lg font-bold text-slate-900 mt-1 truncate group-hover:text-indigo-600 transition-colors">
                        Samsung S25 Ultra
                    </h3>
                    <div class="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
                        <span>★ 4.7</span> <span class="text-slate-300">(51)</span>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-xl font-black text-slate-900">$999</span>
                        <button class="bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white font-semibold text-xs px-4 py-2.5 rounded-xl active:scale-95 transition-all">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            <!-- PRODUCT 4 -->
            <div class="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div class="relative bg-slate-50 aspect-square overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop"
                        class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gaming Laptop" />
                    <button class="absolute top-4 right-4 bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm hover:bg-white hover:scale-110 active:scale-95 transition-all text-slate-600" title="Add to Wishlist">
                        ♥
                    </button>
                </div>

                <div class="p-6">
                    <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400">Laptops</span>
                    <h3 class="text-lg font-bold text-slate-900 mt-1 truncate group-hover:text-indigo-600 transition-colors">
                        ASUS ROG Gaming
                    </h3>
                    <div class="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
                        <span>★ 4.9</span> <span class="text-slate-300">(116)</span>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-xl font-black text-slate-900">$2,499</span>
                        <button class="bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white font-semibold text-xs px-4 py-2.5 rounded-xl active:scale-95 transition-all">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

