<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import Logo from "src/components/icon/Logo.vue";
import Categoria from "src/components/icon/Categoria.vue";
import Favorito from "src/components/icon/favorito.vue";
import IconHome from "src/components/icon/IconHome.vue";
import UserAbout from "src/components/icon/UserAbout.vue";
import User from "src/components/icon/User.vue";

const $q = useQuasar();
const drawer = ref(false);

const closeDrawerOnMobile = () => {
  if ($q.screen.lt.md) {
    drawer.value = false;
  }
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      style="
        background-color: #bfdbfe;
        color: #1e3a8a;
        border-bottom: 1px solid #93c5fd;
      "
    >
      <q-toolbar class="relative justify-between px-3 py-2 sm:px-4">
        <div class="flex items-center gap-2 min-w-0">
          <q-btn
            v-if="$q.screen.lt.md"
            flat
            round
            dense
            icon="menu"
            class="mr-1 text-blue-700"
            @click="drawer = !drawer"
            aria-label="Abrir menu"
          />

          <div
            class="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 md:static md:left-auto md:translate-x-0"
          >
            <Logo class="w-10 h-10 sm:w-12 sm:h-12" />
            <span class="text-xl font-bold text-white sm:text-2xl">Giphy</span>
          </div>
        </div>

        <router-link
          to="/about"
          class="ml-auto flex items-center gap-1.5 transition hover:opacity-80 sm:gap-2"
        >
          <span v-if="!$q.screen.lt.md" class="font-semibold text-white">
            Débora Vitória
          </span>
          <User class="w-5 h-5 text-blue-500 sm:w-6 sm:h-7" />
        </router-link>
      </q-toolbar>
    </q-header>

    <q-drawer
      :model-value="$q.screen.lt.md ? drawer : true"
      @update:model-value="drawer = $event"
      show-if-above
      :breakpoint="768"
      class="bg-gray-100"
    >
      <q-list class="flex flex-col gap-1 p-2">
        <q-item
          to="/"
          clickable
          class="flex items-center gap-3 px-3 py-2 transition rounded-lg hover:bg-blue-100"
          @click="closeDrawerOnMobile"
        >
          <IconHome class="w-10 h-12 pt-3 text-blue-400" />
          <span class="text-sm font-medium text-blue-300">Home</span>
        </q-item>

        <q-item
          to="/favorites"
          clickable
          class="flex items-center gap-3 px-3 py-2 transition rounded-lg hover:bg-blue-100"
          @click="closeDrawerOnMobile"
        >
          <Favorito class="w-10 h-12 pt-3 text-blue-400" />
          <span class="text-sm font-medium text-blue-300">Favoritos</span>
        </q-item>

        <q-item
          to="/categories"
          clickable
          class="flex items-center gap-3 px-3 py-2 transition rounded-lg hover:bg-blue-100"
          @click="closeDrawerOnMobile"
        >
          <Categoria class="w-10 h-10 pt-3 text-blue-400" />
          <span class="text-sm font-medium text-blue-300">Categorias</span>
        </q-item>

        <q-item
          to="/about"
          clickable
          class="flex items-center gap-3 px-3 py-2 transition rounded-lg hover:bg-blue-100"
          @click="closeDrawerOnMobile"
        >
          <UserAbout class="w-12 h-12 pt-3 text-blue-400" />
          <span class="text-sm font-medium text-blue-300">Sobre</span>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
