<script>
import Card from "@/components/Card.vue";
import CardImage from "@/components/CardImage.vue";

import CircleButton from "./CircleButton.vue";

export default {
  name: "App",
  components: {
    Card,
    CircleButton,
    CardImage,
  },
};
</script>

<template>
  <section class="bg-[#04151E] my-32">
    <h2 class="text-white text-center mb-7">Udvalgte projekter</h2>

    <article class="slider-wrapper">
      <div class="gallery">
        <div>
          <card
            to="//"
            name="Tuborgplakat"
            description="Plakat mappet i processing"
            video="/media/tuborgMandVideo.mp4"
            width="w-max"
            height="h-[60vh]"
          />
        </div>

        <div>
          <card
            to="//"
            name="Valør"
            description="Møbelbutikken Valør"
            video="/media/valør.mp4"
            width="w-max"
            height="h-[60vh]"
          />
        </div>
        <div>
          <CardImage
            to="//"
            name="SEA"
            image="/media/seafont.webp"
            description="Min egen font"
            width="w-max"
            height="h-[60vh]"
          >
          </CardImage>
        </div>
        <div>
          <CardImage
            to="//"
            name="ZoneClinic"
            description="This is an example description."
            image="/media/ZC.png"
            width="w-max"
            height="h-[60vh]"
          >
          </CardImage>
        </div>
      </div>
    </article>
  </section>
</template>

<style>
.slider-wrapper .gallery {
  display: grid;
  font-size: 0;
  overflow-x: auto;
  grid-template-columns: repeat(14, 1fr);
}
</style>
