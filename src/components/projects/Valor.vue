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
      to="/projektEt"
      name="Valør"
      description="Møbelbutikken Valør"
      video="/media/valør.mp4"
      width="w-max"
      height="h-[50vh]"
    />
  </div>
</template>
