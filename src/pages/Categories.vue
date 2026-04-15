<template>
  <div
    class="min-h-screen px-4 py-5 bg-linear-to-br from-blue-50 via-blue-100 to-blue-200 sm:px-6 sm:py-6"
  >
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-center mb-8 text-center sm:mb-10">
        <div
          class="text-xl font-light leading-tight tracking-tight text-blue-500 sm:text-3xl md:text-5xl"
        >
          Categorias
        </div>
        <p
          class="w-full max-w-2xl mt-3 text-sm leading-6 text-center text-gray-500 sm:text-base md:text-lg"
        >
          Explore os GIFs por categoria com uma navegacao mais moderna.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-5 lg:grid-cols-[280px_1fr] lg:gap-6">
        <aside
          class="h-fit rounded-2xl border border-blue-200/80 bg-white/75 shadow-[0_10px_40px_rgba(147,197,253,0.18)] backdrop-blur-xl lg:sticky lg:top-6 lg:rounded-3xl"
        >
          <div class="p-4 border-b border-blue-100 sm:p-5">
            <div class="text-base font-semibold leading-tight text-blue-900 sm:text-lg">
              Lista de categorias
            </div>
            <p class="mt-2 text-sm leading-6 text-blue-600 sm:text-base">
              Clique para ir direto para a secao.
            </p>
          </div>

          <div
            class="max-h-72 overflow-y-auto p-4 space-y-3 custom-scroll lg:max-h-[70vh]"
          >
            <button
              v-for="cat in store.categories"
              :key="cat.name"
              @click="goToCategory(cat.name)"
              :class="[
                'w-full rounded-2xl border px-4 py-3 text-left text-sm transition-all duration-300 sm:text-base',
                activeCategory === cat.name
                  ? 'bg-linear-to-r from-blue-300 to-blue-200 text-blue-900 border-blue-300 shadow-md shadow-blue-100'
                  : 'bg-blue-50/80 text-blue-800 border-blue-100 hover:bg-blue-100 hover:border-blue-200',
              ]"
            >
              <span class="font-medium">{{ cat.name }}</span>
            </button>
          </div>
        </aside>

        <section class="space-y-5 sm:space-y-6">
          <div
            v-for="categoryName in loadedSections"
            :key="categoryName"
            :id="sectionId(categoryName)"
            class="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-[0_10px_40px_rgba(147,197,253,0.14)] backdrop-blur-xl scroll-mt-6 sm:rounded-3xl sm:p-6"
          >
            <div
              class="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div
                class="inline-flex items-center self-start px-4 py-2 text-sm font-semibold tracking-wide text-blue-700 border border-blue-200 rounded-full shadow-sm bg-blue-50 sm:text-base"
              >
                {{ categoryName }}
              </div>

              <button
                class="self-start px-4 py-2 text-sm font-medium text-blue-600 transition bg-white border border-blue-200 rounded-full hover:bg-blue-50 sm:inline-flex"
                @click="goToCategory(categoryName)"
              >
                Ver secao
              </button>
            </div>

            <div
              class="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:grid-cols-3 sm:gap-5 md:grid-cols-4"
            >
              <div
                v-for="gif in categorySections[categoryName]"
                :key="gif.id"
                class="relative overflow-hidden transition bg-white border border-blue-100 shadow rounded-2xl hover:shadow-lg"
              >
                <button
                  class="absolute z-10 p-2 transition rounded-full shadow top-2 right-2 bg-white/85 backdrop-blur hover:bg-blue-50"
                  @click="store.addFavorite(gif)"
                >
                  <Heart class="w-4 h-4 text-blue-300 fill-blue-300" />
                </button>

                <div class="w-full overflow-hidden aspect-4/3 bg-blue-50">
                  <img
                    :src="gif.images.fixed_height.url"
                    :alt="gif.title || categoryName"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import { Heart } from "lucide-vue-next";
import { useGiphyStore } from "src/stores/gifStore";

const store = useGiphyStore();

const activeCategory = ref("");
const categorySections = ref({});
const loadedSections = ref([]);

const sectionId = (name) =>
  `category-${name.toLowerCase().replace(/\s+/g, "-")}`;

const goToCategory = async (name) => {
  activeCategory.value = name;

  if (!categorySections.value[name]) {
    await store.getByCategory(name);
    categorySections.value[name] = [...store.categoryGifs];

    if (!loadedSections.value.includes(name)) {
      loadedSections.value.push(name);
    }
  }

  await nextTick();

  const target = document.getElementById(sectionId(name));
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

onMounted(async () => {
  await store.loadCategories();

  if (store.categories.length > 0) {
    await goToCategory(store.categories[0].name);
  }
});
</script>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  width: 10px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: #dbeafe;
  border-radius: 9999px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #bfdbfe, #93c5fd);
  border-radius: 9999px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #93c5fd, #60a5fa);
}
</style>
