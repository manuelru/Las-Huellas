import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Products from "./pages/Products.vue";
import Vitaminas from "./pages/Vitaminas.vue";
import Desparasitantes from "./pages/Desparasitantes.vue";
import Accesorios from "./pages/Accesorios.vue"
import Contactanos from "./pages/Contactanos.vue"
import Servicios from "./pages/Servicios.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/desparasitantes", component: Desparasitantes },
  { path: "/vitaminas", component: Vitaminas },
  { path: "/accesorios", component: Accesorios },
  { path: "/contactanos", component: Contactanos },
  { path: "/servicios", component: Servicios },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
