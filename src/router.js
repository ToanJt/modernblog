import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Categories from "@/pages/Categories";
import Shop from "@/pages/Shop";
import Contact from "@/pages/Contact";
import SignIn from "@/pages/SignIn";

import PostView from "@/components/PostView.vue";
import CategoriesView from "@/components/CategoriesView.vue";
import ProductView from "@/components/ProductView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/blog",
      name: "blog",
      children: [
        {
          path: "",
          component: Blog,
        },
        {
          path: "post/:idPost",
          name: "post",
          component: PostView,
          props: true,
        },
      ],
    },
    { path: "/about", component: About },
    {
      path: "/categories",
      name: "categories",
      children: [
        {
          path: "",
          component: Categories,
        },
        {
          path: "all-categories/:idCategories",
          name: "all-categories",
          component: CategoriesView,
          props: true,
        },
      ],
    },
    {
      path: "/shop",
      name: "shop",
      children: [
        {
          path: "",
          component: Shop,
        },
        {
          path: "product/:product",
          name: "product",
          component: ProductView,
          props: true,
        },
      ],
    },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/signin", name: "signin", component: SignIn },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      window.scrollTo(0, 0);
    }
  },
});

export default router;
