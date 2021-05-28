import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Makams from "../views/Makams.vue";
import makamdetail from "../views/Makam-detail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/makams/:url",
    name: "Makams",
    component: Makams,
  },
  {
    path: "/detail/:url",
    name: "Makam-detail",
    component: makamdetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
