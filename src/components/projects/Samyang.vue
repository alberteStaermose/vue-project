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
      to="/projectSamyang"
      name="Samyang Nudler"
      image="/media/samyang/samyangLogo.png"
      description="Rebranding af Samyang"
      width="w-max"
      height="h-[50vh]"
    >
    </CardImage>
  </div>
</template>
