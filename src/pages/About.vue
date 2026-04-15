<template>
  <div
    class="min-h-screen p-6 bg-linear-to-br from-blue-50 via-blue-100 to-blue-200"
  >
    <div class="max-w-6xl mx-auto">
      <div class="mb-10 text-center">
        <div
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-full shadow-sm bg-white/70"
        >
          Desafio técnico Front-End
        </div>
        <h1
          class="mt-4 text-3xl font-light tracking-tight text-blue-300 md:text-5xl"
        >
          Sobre o projeto
        </h1>
        <p class="mt-3 text-sm text-gray-400 md:text-base">
          Aplicação desenvolvida para a vaga de Front-End Developer
        </p>
      </div>
      <div
        class="p-6 mb-6 border border-blue-100 shadow-md rounded-3xl bg-white/80"
      >
        <h2 class="mb-3 text-xl font-semibold text-blue-900">
          Objetivo do desafio
        </h2>
        <p class="leading-8 text-blue-800">
          O projeto foi desenvolvido como parte do desafio técnico da vaga
          Front-End, com foco em consumo de APIs, gerenciamento de estado,
          persistência de dados e construção de uma interface moderna,
          responsiva e intuitiva.
        </p>
      </div>
      <div
        class="p-6 mb-6 border border-blue-100 shadow-md rounded-3xl bg-white/80"
      >
        <h2 class="mb-3 text-xl font-semibold text-blue-900">
          Como foi desenvolvido
        </h2>
        <p class="leading-8 text-blue-800">
          A aplicação foi construída utilizando Quasar 2 com Vue 3, adotando
          Composition API com <code>script setup</code>
          para uma estrutura mais moderna e organizada.
        </p>
        <p class="mt-3 leading-8 text-blue-800">
          O gerenciamento global do estado foi realizado com Pinia,
          centralizando os dados de GIFs, resultados de busca, favoritos e
          categorias.
        </p>
        <p class="mt-3 leading-8 text-blue-800">
          Para o consumo da API do GIPHY foi utilizado Axios, permitindo buscar
          GIFs trending, pesquisar por termos e listar GIFs por categoria.
        </p>
        <p class="mt-3 leading-8 text-blue-800">
          A persistência dos favoritos foi implementada utilizando LocalStorage
          via plugin do Quasar, garantindo que os dados permaneçam salvos entre
          sessões.
        </p>
      </div>
      <div
        class="p-6 mb-6 border border-blue-100 shadow-md rounded-3xl bg-white/80"
      >
        <h2 class="mb-3 text-xl font-semibold text-blue-900">
          Funcionalidades implementadas
        </h2>
        <ul class="space-y-2 leading-8 text-blue-800">
          <li>Listagem de GIFs em alta</li>
          <li>Busca dinâmica por termos</li>
          <li>Favoritar e remover GIFs</li>
          <li>Persistência de favoritos</li>
          <li>Navegação por categorias</li>
          <li>Layout responsivo</li>
          <li>Sidebar e topbar personalizadas</li>
        </ul>
      </div>

      <div class="p-6 border border-blue-100 shadow-md rounded-3xl bg-white/80">
        <h2 class="mb-3 text-xl font-semibold text-blue-900">
          Sobre a desenvolvedora
        </h2>
        <p class="text-lg font-medium text-blue-900">
          Débora Vitória Cabral Silva
        </p>
        <p class="mt-3 leading-8 text-blue-800">
          Desenvolvedora Front-End com foco em interfaces modernas,
          componentização, usabilidade e experiência do usuário.
        </p>
        <p class="mt-3 leading-8 text-blue-800">
          Neste projeto busquei aplicar boas práticas de organização, separação
          de responsabilidades e consistência visual, demonstrando capacidade de
          adaptação a novas tecnologias e foco em qualidade de entrega.
        </p>
      </div>
    </div>
  </div>
</template>
