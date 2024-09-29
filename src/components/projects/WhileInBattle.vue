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
      to="/projektWhileInBattle"
      name="Danseforestilling"
      image="/media/whileInBattle/main.png"
      description="Visuel identitet til danseforestillingen While In Battle"
      width="w-max"
      height="h-[50vh]"
    >
    </CardImage>
  </div>
</template>
