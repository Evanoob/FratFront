import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/maraudes",
    name: "Maraudes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "maraudes" */ "../views/Maraudes.vue")
  },
  {
    path: "/urgences",
    name: "Urgences",
    component: () =>
      import(/* webpackChunkName: "urgences" */ "../views/Urgences.vue")
  },
  {
    path: "/defi",
    name: "Defi",
    component: () =>
      import(/* webpackChunkName: "defi" */ "../views/Defi.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admnin" */ "../views/Admin.vue")
  },
  {
    path: "/formActu",
    name: "FormActu",
    component: () =>
    import(/* webpackChunkName: "formActu" */ "../components/FormActu.vue")
  },
  {
  path: "/signaler",
  name: "Signaler",
  component: () =>
  import(/* webpackChunkName: "formActu" */ "../views/Signaler.vue")
},
  {
    path: "/actus",
    name: "Actus",
    component: () =>
    import(/* webpackChunkName: "actus" */ "../views/Actus.vue")
  },
  {
    path: "/editOneUser/:id",
    name: "EditOneUser",
    component: () =>
    import(/* webpackChunkName: "editOneUser" */ "../components/EditOneUser.vue")
  },
  {
    path: "/profil",
    name: "Profil",
    component: () =>
      import(/* webpackChunkName: "profil" */ "../views/Profil.vue")
  },
  {
    path: "/signup",
    name: "Inscription",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue")
  },
  {
    path: "/signin",
    name: "Connexion",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Signin.vue")
  },
  {
    path: "/cgu",
    name: "Cgu",
    component: () =>
      import(/* webpackChunkName: "cgu" */ "../views/Cgu.vue")
  },
  {
    path: "/plan",
    name: "Plan",
    component: () =>
      import(/* webpackChunkName: "plan" */ "../views/Plan.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
