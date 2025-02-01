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
    <CardImage
      to="/projectPolitikenPlus"
      name="Politiken Plus"
      image="/media/politikenPlus/pulsIdentitet.png"
      description="Rebranding af fordelsunivers"
      width="w-max"
      height="h-[50vh]"
    >
    </CardImage>
  </div>
</template>
