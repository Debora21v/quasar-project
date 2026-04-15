<template>
  <div
    class="min-h-screen p-4 bg-linear-to-br from-blue-50 via-blue-100 to-blue-200 md:p-6"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mb-8 text-center md:mb-10">
        <h1 class="text-3xl font-bold tracking-tight text-blue-300 md:text-4xl">
          Favoritos
        </h1>
        <p class="mt-2 text-sm text-gray-400 md:text-base">
          Seus GIFs favoritos em um espaco mais organizado e bonito.
        </p>
      </div>

      <div
        v-if="store.favorites.length === 0"
        class="rounded-3xl border border-blue-200 bg-white/75 p-10 text-center shadow-[0_10px_35px_rgba(147,197,253,0.18)] backdrop-blur"
      >
        <div
          class="flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-full h-14 w-14"
        >
          <Heart class="w-6 h-6 text-blue-400" />
        </div>

        <h2 class="text-xl font-semibold text-blue-900">
          Nenhum favorito ainda
        </h2>

        <p class="mt-2 text-sm text-blue-700">
          Adicione GIFs aos favoritos para eles aparecerem aqui.
        </p>
      </div>

      <div
        v-else
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <div
          v-for="gif in store.favorites"
          :key="gif.id"
          class="relative overflow-hidden transition duration-300 border border-blue-100 shadow-md group rounded-3xl bg-white/85 hover:-translate-y-1 hover:shadow-xl"
        >
          <button
            class="absolute z-10 p-2 transition rounded-full shadow-md top-3 right-3 bg-white/85 backdrop-blur hover:bg-blue-50"
            @click="store.removeFavorite(gif.id)"
          >
            <Heart class="w-4 h-4 text-blue-300 fill-blue-300" />
          </button>

          <div class="overflow-hidden aspect-4/3 bg-blue-50">
            <img
              :src="gif.images.fixed_height.url"
              :alt="gif.title || 'GIF favorito'"
              class="object-cover w-full h-full transition duration-500 group-hover:scale-105"
            />
          </div>

          <div class="px-4 py-3 border-t border-blue-100">
            <p class="text-sm font-medium text-blue-800 truncate">
              {{ gif.title || "GIF sem titulo" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Heart } from "lucide-vue-next";
import { useGiphyStore } from "src/stores/gifStore";

const store = useGiphyStore();

onMounted(() => {
  store.loadFavorites();
});
</script>
