<template>
  <div
    class="min-h-screen p-4 bg-linear-to-br from-blue-50 via-blue-100 to-blue-200 md:p-6"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mb-6">
        <h1 class="text-3xl font-bold tracking-tight text-blue-300 md:text-4xl">
          Categorias
        </h1>
        <p class="mt-2 text-gray-400 md:text-base">
          Explore os GIFs por categoria com uma navegacao mais moderna.
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
        <aside
          class="lg:sticky lg:top-6 h-fit rounded-3xl border border-blue-200/80 bg-white/75 backdrop-blur-xl shadow-[0_10px_40px_rgba(147,197,253,0.18)]"
        >
          <div class="p-5 border-b border-blue-100">
            <p class="mt-1 text-sm text-blue-600">
              Clique para ir direto para a secao.
            </p>
          </div>
          <div
            class="max-h-105 lg:max-h-[70vh] overflow-y-auto p-4 space-y-3 custom-scroll"
          >
            <button
              v-for="cat in store.categories"
              :key="cat.name"
              @click="goToCategory(cat.name)"
              :class="[
                'w-full text-left px-4 py-3 rounded-2xl border transition-all duration-300',
                activeCategory === cat.name
                  ? 'bg-linear-to-r from-blue-300 to-blue-200 text-blue-900 border-blue-300 shadow-md shadow-blue-100'
                  : 'bg-blue-50/80 text-blue-800 border-blue-100 hover:bg-blue-100 hover:border-blue-200',
              ]"
            >
              <span class="font-medium">{{ cat.name }}</span>
            </button>
          </div>
        </aside>
        <section class="space-y-6">
          <div
            v-for="categoryName in loadedSections"
            :key="categoryName"
            :id="sectionId(categoryName)"
            class="rounded-3xl border border-blue-200 bg-white/80 backdrop-blur-xl p-5 md:p-6 shadow-[0_10px_40px_rgba(147,197,253,0.14)] scroll-mt-6"
          >
            <div class="flex items-center justify-between gap-3 mb-4">
              <div
                class="inline-flex items-center px-4 py-2 text-sm font-semibold tracking-wide text-blue-700 border border-blue-200 rounded-full shadow-sm bg-blue-50"
              >
                {{ categoryName }}
              </div>
              <button
                class="hidden px-4 py-2 text-sm font-medium text-blue-600 transition bg-white border border-blue-200 rounded-full md:inline-flex hover:bg-blue-50"
                @click="goToCategory(categoryName)"
              >
                Ver secao
              </button>
            </div>
            <div class="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
              <div
                v-for="gif in categorySections[categoryName]"
                :key="gif.id"
                class="relative overflow-hidden transition bg-white border border-blue-100 shadow rounded-2xl hover:shadow-lg"
              >
                <button
                  class="absolute z-10 p-2 transition rounded-full shadow top-2 right-2 bg-white/85 backdrop-blur hover:bg-blue-50"
                  @click="store.addFavorite(gif)"
                >
                  <Heart class="w-3.5 h-3.5 text-blue-300 fill-blue-300" />
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
