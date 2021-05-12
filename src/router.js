import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: () => import("./components/Home.vue")
    },
    {
      path: "/tutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("./components/Tutorial")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTutorial")
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("./components/Rules")
    },
    {
      path: "/credentials",
      name: "credentials",
      component: () => import("./components/Credentials")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./components/Profile")
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("./components/Posts")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/Login")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./components/Register")
    },
    {
      path: "*",
      component: () => import("./components/NotFound")
    },
    {
      path: "/users",
      name: "users",
      component: () => import("./components/Users")
    },
    {
      path: "/usersList",
      name: "usersList",
      component: () => import("./components/UsersList")
    }
  ]
});