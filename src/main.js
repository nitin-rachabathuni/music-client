import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import app from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./styles/homepage.css";
import routes from "./router.js";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  vuetify,
  router,
  render: (h) => h(app),
}).$mount("#app");
