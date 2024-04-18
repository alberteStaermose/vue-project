<script>
import Circles from "../components/Circles.vue";
import CircleButton from "../components/CircleButton.vue";

export default {
  components: {
    Circles,
    CircleButton,
  },
};
</script>

<template>
  <div class="w-screen px-96 pb-32">
    <div class="grid grid-cols-3 gap-10">
      <CircleButton> Linked-In </CircleButton>
      <CircleButton> Instagram </CircleButton>
      <CircleButton> Behance </CircleButton>
    </div>
  </div>
</template>
