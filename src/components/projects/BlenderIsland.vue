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
      to="/projectBlenderIsland"
      name="En ø i blender"
      image="/media/blender/blenderØen1.png"
      description="En ø tegnet i programmet blender"
      width="w-max"
      height="h-[50vh]"
    >
    </CardImage>
  </div>
</template>
