<template>
  <div
    class="min-h-screen px-4 py-5 bg-linear-to-br from-blue-50 via-blue-100 to-blue-200 sm:px-6 sm:py-6"
  >
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-center mb-8 text-center sm:mb-10">
        <div
          class="text-xl font-light leading-tight tracking-tight text-blue-500 sm:text-3xl md:text-5xl"
        >
          Favoritos
        </div>
        <p
          class="w-full max-w-2xl mt-3 text-sm leading-6 text-center text-gray-500 sm:text-base md:text-lg"
        >
          Seus GIFs favoritos em um espaco mais organizado e bonito.
        </p>
      </div>

      <div
        v-if="store.favorites.length === 0"
        class="rounded-2xl border border-blue-200 bg-white/75 p-6 text-center shadow-[0_10px_35px_rgba(147,197,253,0.18)] backdrop-blur sm:rounded-3xl sm:p-10"
      >
        <div
          class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full sm:h-14 sm:w-14"
        >
          <Heart class="w-6 h-6 text-blue-400" />
        </div>

        <div class="text-base font-semibold leading-tight text-blue-900 sm:text-lg md:text-xl">
          Nenhum favorito ainda
        </div>

        <p class="mt-2 text-sm leading-6 text-blue-700 sm:text-base sm:leading-7">
          Adicione GIFs aos favoritos para eles aparecerem aqui.
        </p>
      </div>

      <div
        v-else
        class="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <div
          v-for="gif in store.favorites"
          :key="gif.id"
          class="relative overflow-hidden transition duration-300 border border-blue-100 shadow-md group rounded-2xl bg-white/85 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl"
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
            <p class="text-sm font-medium leading-6 text-blue-800 truncate sm:text-base">
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
