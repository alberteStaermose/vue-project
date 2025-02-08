<script>
import { RouterLink, RouterView } from "vue-router";

import Card from "@/components/Card.vue";
import CardImage from "@/components/CardImage.vue";

export default {
  name: "App",
  components: {
    Card,

    CardImage,
  },
};
</script>
<template>
  <div>
    <card
      to="/projectTuborg"
      name="Tuborgplakat"
      description="Plakat mappet i processing"
      video="/media/tuborg/tuborgMandVideo.mp4"
      width="w-max"
      height="h-[50vh]"
    />
  </div>
</template>
