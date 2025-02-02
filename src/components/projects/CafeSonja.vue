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
      to="/projectCafeSonja"
      name="Café Sonja"
      image="/media/sonja/sonjaLogo.png"
      description="Rebranding af Café Sonja på Saxogade"
      width="w-max"
      height="h-[50vh]"
    >
    </CardImage>
  </div>
</template>
