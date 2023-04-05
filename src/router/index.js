import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AdminView from "../views/AdminView.vue";
import UserView from "../views/UserView.vue";
import EditUserView from "../views/EditUserView.vue";
import ProductsView from "../views/ProductsView.vue";
import ViewProductsView from "../views/ViewProductsView.vue";
import UploadFileView from "../views/UploadFileView.vue";
import AboutUsView from "../views/AboutUsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
    },
  },
  {
    path: "/about",
    name: "about",
    components: {
      default: AboutUsView,
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      default: LoginView,
    },
  },
  {
    path: "/register",
    name: "register",
    components: {
      default: RegisterView,
    },
  },
  {
    path: "/viewProducts",
    name: "viewProducts",
    components: {
      default: ViewProductsView,
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    children: [
      {
        name: "userDetails",
        path: "user",
        component: UserView,
      },
      {
        path: "user/:id",
        name: "editUserDetails",
        component: EditUserView,
      },
      {
        path: "products",
        name: "products",
        component: ProductsView,
      },
      {
        path: "products/add",
        name: "addProducts",
        component: UploadFileView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
