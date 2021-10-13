import { createRouter, createWebHistory } from "vue-router";
import Shop from "../views/Shop.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Category from "../views/Category.vue";
import Cart from "../views/Cart.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import Prueba from "../views/prueba.vue";

const routes = [
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/:category",
    component: Category,
  },
  {
    name: "Home",
    component: Home,
  },
  {
    path: "/prueba",
    name: "Prueba",
    component: Prueba,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
