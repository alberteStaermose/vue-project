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
    <h2 class="text-white text-center mb-7">Mine projekter</h2>

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
          <card
            to="//"
            name="Bullet Tounge"
            description="Albumcover til fiktivt band med JavaScript"
            video="/media/bullettounge.mov"
            width="w-max"
            height="h-[60vh]"
          />
        </div>
        <div>
          <CardImage
            to="//"
            name="ZoneClinic"
            description="Hjemmeside til zoneterapeut"
            image="/media/ZC.png"
            width="w-max"
            height="h-[60vh]"
          >
          </CardImage>
        </div>
        <div class="w-[30vw] h-[60vh] px-10 grid content-center">
          <div>
            <h3 class="text-white">Se alle projekter mine projekter</h3>
            <p class="text-white">
              Jeg har et bredt udvalg af forskellige projekter af forskellige
              størrelse og omfang. KLik ind og udforsk alle mine projekter.
            </p>
            <div class="px-20 pt-3">
              <CircleButton to="/projekter">Projekter</CircleButton>
            </div>
          </div>
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
