<script>
import { RouterLink } from "vue-router";
import CircleButton from "./CircleButton.vue";
export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    CircleButton,
  },
};
</script>

<template>
  <header class="sticky top-0 z-20 hidden lg:block">
    <nav class="grid grid-cols-8 pl-5 pr-5 absolute top-0 w-full">
      <CircleButton to="/home" class="col-start-1"> AS </CircleButton>
      <CircleButton to="/projekter" class="col-start-7"
        >Mine projekter</CircleButton
      >
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
</template>
