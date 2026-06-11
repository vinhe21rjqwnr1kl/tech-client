<script setup>
import { ref } from 'vue'

const images = [
  'https://images.unsplash.com/photo-1517336714739-489689fd1ca8',
  'https://images.unsplash.com/photo-1541807084-5c52b6b3adef',
  'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2'
]

const selectedImage = ref(images[0])

const storageOptions = [
  {
    name: '512GB SSD',
    price: 'Included',
    active: true
  },
  {
    name: '1TB SSD',
    price: '+$200',
    active: false
  }
]

const colors = [
  {
    class: 'bg-slate-700',
    active: true
  },
  {
    class: 'bg-slate-300',
    active: false
  }
]

const relatedProducts = [
  {
    name: 'Razer Gaming Laptop',
    category: 'Laptops',
    price: '$2,499',
    image:
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2'
  },
  {
    name: 'iPhone 15 Pro Max',
    category: 'Phones',
    price: '$1,299',
    image:
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef'
  }
]
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[12%]">

    <!-- BREADCRUMB -->
    <nav class="flex text-sm text-slate-400 mb-8 gap-2 items-center">
      <a href="#" class="hover:text-slate-600 transition">Home</a>
      <span>/</span>
      <a href="#" class="hover:text-slate-600 transition">Shop</a>
      <span>/</span>
      <span class="text-slate-600 font-medium">
        MacBook Pro M3
      </span>
    </nav>

    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

      <!-- LEFT -->
      <div class="sticky top-28">

        <!-- MAIN IMAGE -->
        <div class="bg-white rounded-3xl p-4 shadow-sm border border-slate-100">
          <div class="bg-slate-50 rounded-2xl overflow-hidden aspect-4/3">
            <img
              :src="selectedImage"
              class="w-full h-full object-cover hover:scale-105 transition duration-500"
              alt=""
            />
          </div>
        </div>

        <!-- THUMBNAILS -->
        <div class="flex gap-4 mt-5 justify-center sm:justify-start">
          <img
            v-for="img in images"
            :key="img"
            :src="img"
            @click="selectedImage = img"
            class="w-20 h-20 object-cover rounded-2xl cursor-pointer border-2 p-1 bg-white shadow-sm transition-all"
            :class="
              selectedImage === img
                ? 'border-black'
                : 'border-transparent hover:border-slate-300'
            "
          />
        </div>

      </div>

      <!-- RIGHT -->
      <div class="space-y-6">

        <div>
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3"
          >
            ● In Stock
          </span>

          <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight">
            MacBook Pro M3
          </h1>

          <p class="text-slate-400 mt-2 flex items-center gap-2 text-sm font-medium">
            <span>Apple</span>
            •
            <span>Laptop</span>
            •
            <span class="text-amber-500">
              ★ 4.9 (120 reviews)
            </span>
          </p>
        </div>

        <hr class="border-slate-200">

        <!-- PRICE -->
        <div class="flex items-baseline gap-4">
          <span class="text-4xl font-black text-slate-900">
            $1,999
          </span>

          <span class="text-xl text-slate-400 line-through">
            $2,199
          </span>

          <span
            class="bg-rose-50 text-rose-700 text-xs font-bold px-2.5 py-1 rounded-lg border border-rose-100"
          >
            Save $200
          </span>
        </div>

        <!-- DESC -->
        <p class="text-slate-600 leading-relaxed text-base">
          Powerful Apple silicon M3 chip delivers extreme performance for creators,
          developers, and data professionals.
        </p>

        <!-- OPTIONS -->
        <div class="space-y-5 pt-2">

          <!-- STORAGE -->
          <div>
            <label class="text-sm font-semibold text-slate-700 block mb-2">
              Storage Configuration
            </label>

            <div class="grid grid-cols-2 gap-3">

              <button
                v-for="item in storageOptions"
                :key="item.name"
                class="rounded-xl py-3 px-4 text-sm font-medium flex justify-between items-center transition-all"
                :class="
                  item.active
                    ? 'border-2 border-black bg-white'
                    : 'border border-slate-200 hover:border-slate-400 bg-white'
                "
              >
                <span>{{ item.name }}</span>
                <span class="text-xs text-slate-500">
                  {{ item.price }}
                </span>
              </button>

            </div>
          </div>

          <!-- COLORS -->
          <div>
            <label class="text-sm font-semibold text-slate-700 block mb-2">
              Select Color
            </label>

            <div class="flex gap-3">

              <button
                v-for="color in colors"
                :key="color.class"
                class="w-9 h-9 rounded-full ring-offset-2 transition-all"
                :class="
                  [
                    color.class,
                    color.active
                      ? 'ring-2 ring-black'
                      : 'hover:ring-2 ring-slate-400'
                  ]
                "
              />

            </div>
          </div>

        </div>

        <!-- BUTTONS -->
        <div class="flex gap-4 pt-4">

          <button
            class="bg-slate-900 text-white w-full py-4 rounded-xl font-semibold hover:bg-slate-800 shadow-lg shadow-slate-900/10 active:scale-[0.99] transition-all"
          >
            Add to Cart
          </button>

          <button
            class="border-2 border-slate-200 hover:border-slate-900 text-slate-900 w-full py-4 rounded-xl font-semibold active:scale-[0.99] transition-all"
          >
            Buy Now
          </button>

        </div>

        <!-- BADGES -->
        <div
          class="bg-slate-50 rounded-2xl p-4 grid grid-cols-3 gap-2 text-center text-xs font-medium text-slate-600 border border-slate-100"
        >

          <div class="space-y-1">
            <span class="text-xl">🚚</span>
            <p>Free Shipping</p>
          </div>

          <div class="space-y-1 border-x border-slate-200">
            <span class="text-xl">🛡️</span>
            <p>1 Year Warranty</p>
          </div>

          <div class="space-y-1">
            <span class="text-xl">🔄</span>
            <p>7-Day Return</p>
          </div>

        </div>

      </div>
    </div>

    <!-- TABS -->
    <div class="mt-20">

      <div class="flex gap-8 border-b border-slate-200">

        <button
          class="pb-4 border-b-2 border-black font-semibold text-sm text-slate-900"
        >
          Description
        </button>

        <button
          class="pb-4 text-slate-400 hover:text-slate-600 font-medium text-sm"
        >
          Specs
        </button>

        <button
          class="pb-4 text-slate-400 hover:text-slate-600 font-medium text-sm"
        >
          Reviews (120)
        </button>

      </div>

      <div class="mt-8 text-slate-600 leading-relaxed max-w-3xl">
        <p>
          This MacBook Pro is designed for high-performance workloads including
          4K/8K video editing, heavy software development, 3D rendering, and
          machine learning tasks.
        </p>
      </div>

    </div>

    <!-- RELATED -->
    <div class="mt-24">

      <div class="flex justify-between items-center mb-8">

        <h2 class="text-2xl font-bold text-slate-900">
          Related Products
        </h2>

        <a
          href="#"
          class="text-sm font-semibold text-slate-900 hover:underline"
        >
          View all →
        </a>

      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div
          v-for="product in relatedProducts"
          :key="product.name"
          class="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden group transition-all duration-300"
        >

          <div class="h-48 bg-slate-50 overflow-hidden relative">
            <img
              :src="product.image"
              class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt=""
            />
          </div>

          <div class="p-5">

            <span
              class="text-[10px] uppercase tracking-wider text-slate-400 font-bold"
            >
              {{ product.category }}
            </span>

            <h3
              class="font-bold text-slate-900 mt-1 group-hover:text-slate-700 transition"
            >
              {{ product.name }}
            </h3>

            <p class="text-slate-900 font-extrabold mt-2">
              {{ product.price }}
            </p>

          </div>

        </div>

      </div>

    </div>

  </main>
</template>