import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MakananView from "../views/MakananView.vue";
import DetailMakanan from "../views/DetailMakanan.vue";
import Keranjang from "../views/KeranjangView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/makanan",
    name: "MakananView",
    component: MakananView,
  },
  {
    path: "/makanan/:id",
    name: "DetailMakanan",
    component: DetailMakanan,
  },
  {
    path: "/keranjang",
    name: "Keranjang",
    component: Keranjang,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
