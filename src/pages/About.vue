<template>
  <div
    class="min-h-screen px-4 py-5 bg-linear-to-br from-blue-50 via-blue-100 to-blue-200 sm:px-6 sm:py-6"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col items-center mb-8 text-center sm:mb-10">
        <div
          class="inline-flex items-center px-3 py-2 text-xs font-medium text-blue-600 border border-blue-200 rounded-full shadow-sm sm:px-4 sm:text-sm bg-white/70"
        >
          Desafio técnico Front-End
        </div>
        <div
          class="mt-4 px-2 text-xl font-light leading-tight tracking-tight text-blue-500 sm:px-0 sm:text-3xl md:text-5xl"
        >
          Sobre o projeto
        </div>
        <p class="w-full max-w-2xl mt-3 text-base leading-7 text-center text-gray-500 sm:text-base">
          Aplicação desenvolvida para a vaga de Front-End Developer
        </p>
      </div>

      <div
        class="p-4 mb-4 border border-blue-100 shadow-md rounded-2xl sm:p-6 sm:mb-6 sm:rounded-3xl bg-white/80"
      >
        <div
          class="mb-3 font-semibold leading-tight text-blue-900 sm:text-xl"
          style="font-size: 1rem; line-height: 1.25rem"
        >
          Objetivo do desafio
        </div>
        <p class="text-base leading-8 text-blue-800 sm:text-base sm:leading-8">
          O projeto foi desenvolvido como parte do desafio técnico da vaga
          Front-End, com foco em consumo de APIs, gerenciamento de estado,
          persistência de dados e construção de uma interface moderna,
          responsiva e intuitiva.
        </p>
      </div>

      <div
        class="p-4 mb-4 border border-blue-100 shadow-md rounded-2xl sm:p-6 sm:mb-6 sm:rounded-3xl bg-white/80"
      >
        <div
          class="mb-3 font-semibold leading-tight text-blue-900 sm:text-xl"
          style="font-size: 1rem; line-height: 1.25rem"
        >
          Como foi desenvolvido
        </div>
        <p class="text-base leading-8 text-blue-800 sm:text-base sm:leading-8">
          A aplicação foi construída utilizando Quasar 2 com Vue 3, adotando
          Composition API com <code>script setup</code>
          para uma estrutura mais moderna e organizada.
        </p>
        <p class="mt-3 text-base leading-8 text-blue-800 sm:text-base sm:leading-8">
          O gerenciamento global do estado foi realizado com Pinia,
          centralizando os dados de GIFs, resultados de busca, favoritos e
          categorias.
        </p>
        <p class="mt-3 text-base leading-8 text-blue-800 sm:text-base sm:leading-8">
          Para o consumo da API do GIPHY foi utilizado Axios, permitindo buscar
          GIFs trending, pesquisar por termos e listar GIFs por categoria.
        </p>
        <p class="mt-3 text-base leading-8 text-blue-800 sm:text-base sm:leading-8">
          A persistência dos favoritos foi implementada utilizando LocalStorage
          via plugin do Quasar, garantindo que os dados permaneçam salvos entre
          sessões.
        </p>
      </div>

      <div
        class="p-4 mb-4 border border-blue-100 shadow-md rounded-2xl sm:p-6 sm:mb-6 sm:rounded-3xl bg-white/80"
      >
        <div
          class="mb-3 font-semibold leading-tight text-blue-900 sm:text-xl"
          style="font-size: 1rem; line-height: 1.25rem"
        >
          Funcionalidades implementadas
        </div>
        <ul class="space-y-2 text-base leading-8 text-blue-800 sm:text-base sm:leading-8">
          <li>Listagem de GIFs em alta</li>
          <li>Busca dinâmica por termos</li>
          <li>Favoritar e remover GIFs</li>
          <li>Persistência de favoritos</li>
          <li>Navegação por categorias</li>
          <li>Layout responsivo</li>
          <li>Sidebar e topbar personalizadas</li>
        </ul>
      </div>

      <div
        class="p-4 border border-blue-100 shadow-md rounded-2xl sm:p-6 sm:rounded-3xl bg-white/80"
      >
        <div
          class="mb-3 font-semibold leading-tight text-blue-900 sm:text-xl"
          style="font-size: 1rem; line-height: 1.25rem"
        >
          Sobre a desenvolvedora
        </div>
        <p class="text-base font-medium text-blue-900 sm:text-lg">
          Débora Vitória Cabral Silva
        </p>
        <p class="mt-3 text-base leading-8 text-blue-800 sm:text-base sm:leading-8">
          Desenvolvedora Front-End com foco em interfaces modernas,
          componentização, usabilidade e experiência do usuário.
        </p>
        <p class="mt-3 text-base leading-8 text-blue-800 sm:text-base sm:leading-8">
          Neste projeto busquei aplicar boas práticas de organização, separação
          de responsabilidades e consistência visual, demonstrando capacidade de
          adaptação a novas tecnologias e foco em qualidade de entrega.
        </p>
      </div>
    </div>
  </div>
</template>
