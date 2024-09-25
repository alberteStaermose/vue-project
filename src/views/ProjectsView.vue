<script>
import { RouterLink, RouterView } from "vue-router";

import Card from "@/components/Card.vue";
import CardImage from "@/components/CardImage.vue";
import Valor from "@/components/projects/Valor.vue";

export default {
  name: "App",
  components: {
    Card,

    CardImage,
    Valor,
  },
};
</script>

<template>
  <body class="grid">
    <section class="flex items-end h-[40vh] px-32 justify-center bg-[#04151E]">
      <h1 class="text-white mb-8">Mine projekter</h1>
    </section>

    <section
      class="flex-wrap gap-8 pt-8 pb-8 align-middle flex justify-center px-8"
    >
      <Valor height="h-[50vh]"></Valor>
      <div>
        <card
          to="src/views/AboutView.vue"
          name="Tuborgplakat"
          description="Plakat mappet i processing"
          video="/media/tuborgMandVideo.mp4"
          width="w-max"
          height="h-[50vh]"
        />
      </div>

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
      <div>
        <CardImage
          to="//"
          name="SEA"
          image="/media/seafont.webp"
          description="Min egen font"
          width="w-max"
          height="h-[50vh]"
        >
        </CardImage>
      </div>
      <div>
        <card
          to="//"
          name="Bullet Tounge"
          description="Albumcover til fiktivt band med JavaScript"
          video="/media/bullettounge.mov"
          width="w-max"
          height="h-[50vh]"
        />
      </div>
      <div>
        <CardImage
          to="//"
          name="ZoneClinic"
          description="Hjemmeside til zoneterapeut"
          image="/media/ZC.png"
          width="w-max"
          height="h-[50vh]"
        >
        </CardImage>
      </div>
    </section>
  </body>
</template>

<style></style>
