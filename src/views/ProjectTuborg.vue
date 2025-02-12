<script>
import Kontakt from "../components/Kontakt.vue";

export default {
  components: {
    Kontakt,
  },
};
</script>

<template>
  <body class="grid gap-44">
    <section class="flex items-end h-[40vh] px-32 justify-center bg-[#04151E]">
      <h1 class="text-white mb-8">Tuborgplakat</h1>
    </section>

    <section class="grid grid-cols-2 px-56 gap-x-20 gap-y-16">
      <div>
        <h2>Opgaven</h2>
        <p>
          Opgaven gik ud på at vælge en statisk plakat, illustration eller
          lignende og gøre den generativ med processing. Jeg valgte her
          Tuborgplakaten med den tørstige mand malet af Erik Henningsen.
        </p>
      </div>

      <div class="grid justify-end">
        <img class="w-72 h-auto" src="/media/tuborgE.Henningsen.jpg" alt="" />
      </div>
    </section>

    <section class="px-56">
      <article class="mb-20 grid gap-20">
        <div>
          <h2>Løsning</h2>
          <h3>Plakater</h3>

          <div class="grid grid-cols-4 gap-5 gap-y-16">
            <img src="/media/tuborgMand1.png" alt="" />
            <img src="/media/tuborgMand2.png" alt="" />
            <img src="/media/tuborgMand3.png" alt="" />
            <img src="/media/tuborgMand4.png" alt="" />
          </div>
        </div>

        <div class="grid justify-center">
          <h3>Video</h3>
          <video class="w-80" controls>
            <source src="/media/tuborgMandVideo.mp4" type="video/mp4" />

            Your browser does not support the video tag.
          </video>
        </div>
        <div class="">
          <h3>Koden</h3>
          <p>
            Jeg har med kode genereret et mønster ovenpå plakaten, som man kan
            stille på i farverne og størrelsen med piletatserne på sin computer.
            Når man har stillet på mønsteret kan gemme billedet ved at trykke
            enter. Derudover har processeing den funktion at man kan optage en
            video imens man stiller på mønsteret.
          </p>
          <video class="" controls>
            <source src="/media/tuborgVid.mov" type="video/mp4" />

            Your browser does not support the video tag.
          </video>
        </div>
      </article>
    </section>

    <Kontakt></Kontakt>
  </body>
</template>

<style>
svg {
  fill: blue;
}
</style>
