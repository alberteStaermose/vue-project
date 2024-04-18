<script>
import HeroSection from "../components/HeroSection.vue";
import CircleGrid from "../components/CircleGrid.vue";
import Slider from "../components/Slider.vue";
import Kontakt from "../components/Kontakt.vue";

export default {
  components: {
    HeroSection,
    CircleGrid,
    Slider,
    Kontakt,
  },
};
</script>

<template>
  <body class="bg-[#04151E]">
    <HeroSection></HeroSection>

    <CircleGrid></CircleGrid>
    <Slider></Slider>

    <Kontakt></Kontakt>
  </body>
</template>

<style></style>
