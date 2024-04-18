<script>
import Kontakt from "../components/Kontakt.vue";

export default {
  components: {
    Kontakt,
  },
};
</script>

<template>
  <body class="grid gap-24">
    <section class="flex items-end h-[40vh] px-32 justify-center bg-[#04151E]">
      <h1 class="text-white mb-8">Alberte Stærmose</h1>
    </section>

    <section class="grid grid-cols-2 px-32 gap-x-5 gap-y-16">
      <div>
        <h2>Hvem er jeg?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div>
        <img src="/public/media/A.svg" alt="" />
      </div>

      <div><img src="/public/media/mig.jpg" alt="" /></div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>

    <Kontakt></Kontakt>
  </body>
</template>

<style>
svg {
  fill: blue;
}
</style>
