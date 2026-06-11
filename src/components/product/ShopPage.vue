<template>
    <div>
 <!-- SHOP PAGE -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col lg:flex-row gap-10">

            <!-- LEFT: FILTER -->
            <aside class="w-full lg:w-64 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm h-fit sticky top-24">
                <div class="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                    <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <span>🎛️</span> Filters
                    </h3>
                    <button class="text-xs font-semibold text-slate-400 hover:text-indigo-600 transition">Clear all</button>
                </div>

                <!-- Category -->
                <div class="mb-8">
                    <h4 class="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Category</h4>
                    <div class="space-y-3">
                        <label class="flex items-center gap-3 text-slate-600 cursor-pointer group text-sm font-medium">
                            <input type="checkbox" class="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500 accent-indigo-600">
                            <span class="group-hover:text-slate-900 transition">Laptops</span>
                        </label>
                        <label class="flex items-center gap-3 text-slate-600 cursor-pointer group text-sm font-medium">
                            <input type="checkbox" class="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500 accent-indigo-600">
                            <span class="group-hover:text-slate-900 transition">Smartphones</span>
                        </label>
                        <label class="flex items-center gap-3 text-slate-600 cursor-pointer group text-sm font-medium">
                            <input type="checkbox" class="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500 accent-indigo-600">
                            <span class="group-hover:text-slate-900 transition">Accessories</span>
                        </label>
                    </div>
                </div>

                <!-- Brand -->
                <div>
                    <h4 class="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Brand</h4>
                    <div class="space-y-3">
                        <label class="flex items-center gap-3 text-slate-600 cursor-pointer group text-sm font-medium">
                            <input type="checkbox" class="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500 accent-indigo-600">
                            <span class="group-hover:text-slate-900 transition">Apple</span>
                        </label>
                        <label class="flex items-center gap-3 text-slate-600 cursor-pointer group text-sm font-medium">
                            <input type="checkbox" class="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500 accent-indigo-600">
                            <span class="group-hover:text-slate-900 transition">Samsung</span>
                        </label>
                        <label class="flex items-center gap-3 text-slate-600 cursor-pointer group text-sm font-medium">
                            <input type="checkbox" class="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500 accent-indigo-600">
                            <span class="group-hover:text-slate-900 transition">ASUS</span>
                        </label>
                    </div>
                </div>
            </aside>

            <!-- RIGHT: PRODUCTS GRID -->
            <div class="flex-1">
                <!-- TOP BAR -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 pb-4 border-b border-slate-100">
                    <div>
                        <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">Catalog Products</h2>
                        <p class="text-xs text-slate-400 mt-1">Showing 1-4 of 24 results</p>
                    </div>

                    <div class="flex items-center gap-3 self-end sm:self-auto">
                        <span class="text-sm font-medium text-slate-400">Sort by:</span>
                        <select class="border border-slate-200 bg-white rounded-xl px-4 py-2 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all cursor-pointer">
                            <option>Newest Arrivals</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <!-- GRID -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- CARD 1 -->
                    <div class="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div class="relative bg-slate-50 aspect-4/3 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
                                class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Macbook">
                        </div>
                        <div class="p-6">
                            <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400">Laptops</span>
                            <h3 class="font-bold text-lg text-slate-900 mt-1 truncate group-hover:text-indigo-600 transition-colors">Macbook Pro M3</h3>
                            <div class="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
                                <span>★ 4.9</span> <span class="text-slate-300">(12)</span>
                            </div>
                            <div class="flex items-center justify-between mt-5">
                                <span class="font-black text-xl text-slate-900">$1,999</span>
                                <button class="bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white font-semibold text-xs px-4 py-2.5 rounded-xl active:scale-95 transition-all">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- CARD 2 -->
                    <div class="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div class="relative bg-slate-50 aspect-4/3 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
                                class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="iPhone">
                        </div>
                        <div class="p-6">
                            <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400">Smartphones</span>
                            <h3 class="font-bold text-lg text-slate-900 mt-1 truncate group-hover:text-indigo-600 transition-colors">iPhone 15 Pro</h3>
                            <div class="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
                                <span>★ 4.8</span> <span class="text-slate-300">(45)</span>
                            </div>
                            <div class="flex items-center justify-between mt-5">
                                <span class="font-black text-xl text-slate-900">$1,299</span>
                                <button class="bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white font-semibold text-xs px-4 py-2.5 rounded-xl active:scale-95 transition-all">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- CARD 3 -->
                    <div class="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div class="relative bg-slate-50 aspect-4/3 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
                                class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Samsung">
                        </div>
                        <div class="p-6">
                            <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400">Smartphones</span>
                            <h3 class="font-bold text-lg text-slate-900 mt-1 truncate group-hover:text-indigo-600 transition-colors">Samsung S25 Ultra</h3>
                            <div class="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
                                <span>★ 4.7</span> <span class="text-slate-300">(29)</span>
                            </div>
                            <div class="flex items-center justify-between mt-5">
                                <span class="font-black text-xl text-slate-900">$999</span>
                                <button class="bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white font-semibold text-xs px-4 py-2.5 rounded-xl active:scale-95 transition-all">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PAGINATION -->
                <div class="flex justify-center mt-12">
                    <div class="flex gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <button class="px-3.5 py-2 text-sm font-semibold rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-800 transition">Prev</button>
                        <button class="w-10 h-10 text-sm font-bold rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md">1</button>
                        <button class="w-10 h-10 text-sm font-semibold rounded-xl text-slate-600 hover:bg-slate-50 flex items-center justify-center transition">2</button>
                        <button class="w-10 h-10 text-sm font-semibold rounded-xl text-slate-600 hover:bg-slate-50 flex items-center justify-center transition">3</button>
                        <button class="px-3.5 py-2 text-sm font-semibold rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-800 transition">Next</button>
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
