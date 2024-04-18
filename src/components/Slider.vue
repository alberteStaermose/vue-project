<script>
import Card from "@/components/Card.vue"; // Adjust the path as per your project structure

export default {
  name: "App",
  components: {
    Card,
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
            image="'none'"
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
          <card
            to="//"
            name="Example Card"
            description="This is an example card."
            image="'none'"
            still="/media/seafont.webp"
            video="none"
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
