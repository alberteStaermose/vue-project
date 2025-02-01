import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ProjectOneView from "../views/ProjectOneView.vue";
import ProjectWhileInBattle from "../views/ProjectWhileInBattle.vue";
import ProjectPolitikenPlus from "../views/ProjectPolitikenPlus.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",

      component: AboutView,
    },
    {
      path: "/projekter",
      name: "projekter",

      component: ProjectsView,
    },
    {
      path: "/projektEt",
      name: "projekteEt",

      component: ProjectOneView,
    },
    {
      path: "/projektWhileInBattle",
      name: "projektWhileInBattle",

      component: ProjectWhileInBattle,
    },
    {
      path: "/projectPolitikenPlus",
      name: "projectPolitikenPlus",

      component: ProjectPolitikenPlus,
    },
  ],
});

export default router;
