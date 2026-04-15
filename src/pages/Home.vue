<script setup>
import { ref, computed, onMounted } from "vue";
import { useGiphyStore } from "src/stores/gifStore";
import { Heart, Search } from "lucide-vue-next";

const store = useGiphyStore();
const query = ref("");

onMounted(() => {
  store.loadTrending();
});

const search = () => {
  store.searchGifs(query.value);
};

const gifs = computed(() =>
  store.searchResults.length ? store.searchResults : store.trending,
);

const isFavorite = (id) => {
  return store.favorites.some((fav) => fav.id === id);
};
</script>

<template>
  <div class="px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-6">
    <div class="mb-8 text-center sm:mb-10">
      <div class="text-2xl leading-tight text-blue-200 sm:text-3xl md:text-5xl">
        GIFs em alta
      </div>
      <p class="mt-2 text-base leading-7 text-gray-400 sm:text-sm md:text-base">
        Descubra, explore e favorite os melhores GIFs
      </p>
    </div>

    <div class="mb-5 sm:mb-6">
      <div class="relative">
        <input
          v-model="query"
          @keyup.enter="search"
          placeholder="Buscar GIFs..."
          class="w-full py-3 text-base pl-4 pr-12 border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 sm:py-3.5"
        />

        <button
          @click="search"
          class="absolute -translate-y-1/2 right-3 top-1/2"
          aria-label="Buscar"
        >
          <Search
            class="w-5 h-5 text-blue-300 transition hover:text-blue-400"
          />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:gap-5 sm:grid-cols-3 md:grid-cols-4">
      <div
        v-for="gif in gifs"
        :key="gif.id"
        class="relative overflow-hidden transition bg-white shadow rounded-2xl hover:shadow-lg"
      >
        <button
          class="absolute p-2 rounded-full shadow top-2 right-2 bg-white/80 backdrop-blur"
          @click="
            isFavorite(gif.id)
              ? store.removeFavorite(gif.id)
              : store.addFavorite(gif)
          "
        >
          <Heart
            :size="18"
            :class="
              isFavorite(gif.id)
                ? 'text-blue-300 fill-blue-300'
                : 'text-gray-400'
            "
          />
        </button>

        <div class="w-full overflow-hidden bg-gray-100 aspect-4/3">
          <img
            :src="gif.images.fixed_height.url"
            class="object-cover w-full h-full"
            :alt="gif.title || 'GIF'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
