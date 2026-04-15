import { defineStore } from "pinia";
import { GiphyService } from "src/services/giphyApi";
import { LocalStorage } from "quasar";

export const useGiphyStore = defineStore("giphy", {
  state: () => ({
    trending: [],
    searchResults: [],
    favorites: [],
    categories: [],
    categoryGifs: [],
  }),

  actions: {
    // 🔥 TRENDING
    async loadTrending() {
      const res = await GiphyService.trending();
      this.trending = res.data.data;
    },

    // 🔍 SEARCH
    async searchGifs(query) {
      if (!query) return;

      const res = await GiphyService.search(query);
      this.searchResults = res.data.data;
    },

    // ❤️ CARREGAR FAVORITOS DO LOCALSTORAGE
    loadFavorites() {
      const data = LocalStorage.getItem("favorites");
      this.favorites = data || [];
    },

    // ❤️ ADICIONAR FAVORITO
    addFavorite(gif) {
      const exists = this.favorites.find((item) => item.id === gif.id);

      if (!exists) {
        this.favorites.push(gif);
        this.saveFavorites();
      }
    },

    // ❌ REMOVER FAVORITO
    removeFavorite(id) {
      this.favorites = this.favorites.filter((gif) => gif.id !== id);
      this.saveFavorites();
    },
    // 📂 CARREGAR CATEGORIAS
    async loadCategories() {
      const res = await GiphyService.categories();
      this.categories = res.data.data;
    },

    // 📌 BUSCAR GIFS POR CATEGORIA
    async getByCategory(category) {
      const res = await GiphyService.search(category);
      this.categoryGifs = res.data.data;
    },
    // 💾 SALVAR NO LOCALSTORAGE
    saveFavorites() {
      LocalStorage.set("favorites", this.favorites);
    },
  },
});
