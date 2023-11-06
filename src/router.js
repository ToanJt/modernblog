import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Categories from "@/pages/Categories";
import Shop from "@/pages/Shop";
import Contact from "@/pages/Contact";
import SignIn from "@/pages/SignIn";

import PostView from "@/components/PostView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
      children: [
        {
          path: "post",
          name: "post",
          component: PostView,
        },
      ],
    },
    { path: "/about", component: About },
    { path: "/categories", component: Categories },
    { path: "/shop", component: Shop },
    { path: "/contact", component: Contact },
    { path: "/signin", component: SignIn },
  ],
});


export default router;
