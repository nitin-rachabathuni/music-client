import HomePage from "./components/HomePage.vue";
import ManagePage from "./components/Manage.vue";

export default [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/manage",
    component: ManagePage,
  },
];
