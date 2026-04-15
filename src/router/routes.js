const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      { path: "favorites", component: () => import("pages/Favorites.vue") },
      { path: "categories", component: () => import("pages/Categories.vue") },
      { path: "about", component: () => import("pages/About.vue") },
    ],
  },
];

export default routes;
