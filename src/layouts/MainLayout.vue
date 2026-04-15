<script setup>
import Logo from "src/components/icon/Logo.vue";
import Categoria from "src/components/icon/Categoria.vue";
import Favorito from "src/components/icon/favorito.vue";
import IconHome from "src/components/icon/IconHome.vue";
import UserAbout from "src/components/icon/UserAbout.vue";
import User from "src/components/icon/User.vue";
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
      <q-toolbar class="flex justify-between px-4 py-2">
        <div class="flex items-center gap-2">
          <Logo class="w-12 h-12" />
          <span class="text-2xl font-bold text-white">Giphy</span>
        </div>

        <router-link
          to="/About"
          class="flex items-center gap-2 transition hover:opacity-80"
        >
          <span class="font-semibold text-white">Débora Vitória</span>
          <User class="w-6 text-blue-500 h-7" />
        </router-link>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above class="bg-gray-100">
      <q-list class="flex flex-col gap-1 p-2">
        <q-item
          to="/"
          clickable
          class="flex items-center gap-3 px-3 py-2 transition rounded-lg hover:bg-blue-100"
        >
          <IconHome class="w-10 h-12 pt-3 text-blue-400" />
          <span class="text-sm font-medium text-blue-300">Home</span>
        </q-item>

        <q-item
          to="/favorites"
          clickable
          class="flex items-center gap-3 px-3 py-2 transition rounded-lg hover:bg-blue-100"
        >
          <Favorito class="w-10 h-12 pt-3 text-blue-400" />
          <span class="text-sm font-medium text-blue-300">Favoritos</span>
        </q-item>

        <q-item
          to="/categories"
          clickable
          class="flex items-center gap-3 px-3 py-2 transition rounded-lg hover:bg-blue-100"
        >
          <Categoria class="w-10 h-10 pt-3 text-blue-400" />
          <span class="text-sm font-medium text-blue-300">Categorias</span>
        </q-item>

        <q-item
          to="/about"
          clickable
          class="flex items-center gap-3 px-3 py-2 transition rounded-lg hover:bg-blue-100"
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
