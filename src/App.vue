<script>
import { RouterLink, RouterView } from "vue-router";

import NavMenu from "./components/NavMenu.vue";
import HeroSection from "./components/HeroSection.vue";
import CircleButton from "./components/CircleButton.vue";

export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    NavMenu,
    HeroSection,
    CircleButton,
  },
};
</script>

<template>
  <header class="sticky top-0 z-20 hidden lg:block">
    <nav
      class="grid grid-cols-8 pl-5 pr-5 absolute top-0 w-full px-3 pt-3 gap-5"
    >
      <CircleButton to="/home" class="">
        <img src="/media/A2.svg" alt="" />
      </CircleButton>
      <CircleButton to="/projekter" class="col-start-7">Projekter</CircleButton>
      <CircleButton to="/about" class="col-start-8">Om mig </CircleButton>
    </nav>
  </header>
  <header class="sticky top-0 z-20 lg:hidden block">
    <nav class="grid grid-cols-5 pl-5 pr-5 absolute top-0 w-full">
      <CircleButton class="col-start-1">AS</CircleButton>
      <CircleButton class="col-start-5">Burger</CircleButton>
      <!--<CircleButton class="col-start-7">Mine projekter</CircleButton>
      <CircleButton class="col-start-8">Om mig</CircleButton> -->
    </nav>
  </header>

  <RouterView />
</template>

<style>
section {
  background-color: white;
}
</style>
