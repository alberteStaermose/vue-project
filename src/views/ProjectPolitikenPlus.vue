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
      <h1 class="text-white mb-8">Politiken Plus</h1>
    </section>

    <section class="grid grid-cols-2 px-56 gap-x-20 gap-y-16">
      <div>
        <h2>Opgaven</h2>
        <p>
          Dette var en skoleopgave i grupper og den gik ud på at rebrande
          Politiken Plus med fokus på at tiltrække en yngre målgruppe til deres
          fordels univers. Vores løsning var Politiken Puls
        </p>
      </div>

      <div>
        <img src="/media/pulsPolitikenLogo.png" alt="" />
      </div>
    </section>
    <section class="px-56">
      <article class="gap-y-16 mb-20">
        <div class="grid grid-cols-2 gap-x-20 gap-y-16 mb-5">
          <div>
            <h2>Løsning</h2>
            <p>
              Vi har skabt et helt nyt unviers til Politiken Plus, som vi har
              valgt at kalde Politiken Puls. Til Politiken Puls, har vi udviklet
              en ny startegi, en ny visuel identet og en prototype til en ny
              hjemmeside.
            </p>
          </div>

          <video autoplay loop muted class="z-0 w-auto max-h-full object-cover">
            <source src="/media/pulsHjemmeside.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="grid grid-cols-2">
          <img src="/media/pulsEks1.png" alt="" />
          <img src="/media/pulsEks2.png" alt="" />
        </div>
      </article>

      <div class="grid grid-cols-2 gap-20">
        <div>
          <h3>Logo</h3>
          <img src="/media/pulsLogo.png" alt="" />
        </div>
        <div>
          <h3>Grafik</h3>
          <img src="/media/pulsGrafik.png" alt="" />
        </div>
        <div>
          <h3>Farver</h3>
          <img src="/media/pulsFarver.png" alt="" />
        </div>
        <div>
          <h3>Billedestil</h3>
          <img src="/media/pulsBilledstil.png" alt="" />
        </div>
      </div>
    </section>

    <section class="mx-56">
      <article class="mx-32 mb-20">
        <h2>Politiken Puls research</h2>
        <p>
          Ud fra en dybdegående research kom vi frem til en strategi til
          Politken Plus. Vi gjorde en dyd af at researche på Politken og
          Politiken Plus, både visuelt og verbalt for at få et klar overblik
          over hvem Politiken er. Udover det, indsamlede vi en masse data på
          eksisterende og mulige forbrugere af Politiken Plus for at få en
          forståelse for deres behov. For at få et overblik over markedet og
          hvor Politiken Plus nye posititon kunne være, undersøgte vi hvordan
          konkurrenterne både kommunikerer visuelt og verbalt og hvordan de
          havde løst og opsat deres fordelsuniverser. Til sidst undersøgte vi
          kulturen for at finde frem til trends og tendenser vi kunne tappe ind
          i.
        </p>
      </article>

      <div class="grid grid-cols-2 gap-20">
        <div>
          <h3>Politken</h3>
          <img src="/media/pulsPolitiken.png" alt="" />
        </div>
        <div>
          <h3>Konkurrenter</h3>
          <img src="/media/pulsKonkurrenter.png" alt="" />
        </div>
        <div>
          <h3>Trends og tendenser</h3>
          <img src="/media/pulsTrends.png" alt="" />
          <img src="/media/pulsTendenser.png" alt="" />
        </div>
        <div>
          <h3>Forbrugere</h3>
          <img src="/media/pulsForbruger.png" alt="" />
          <img src="/media/pulsForbrugerIndsigt.png" alt="" />
        </div>
      </div>
    </section>

    <section class="mx-56">
      <article class="mx-32 mb-20">
        <h2>Ny strategi</h2>
        <p>
          Ud fra vores research kom vi frem til en ny strategi til Politiken
          Plus, som er den der ligger til grund for vores løsning - Politiken
          Plus nye navn "Politken Puls" og den nye visuelle identitet.
        </p>
      </article>

      <div class="grid grid-cols-2 gap-x-20 gap-y-16"></div>
      <div class="grid grid-cols-3">
        <img src="/media/pulsAmbition.png" alt="" />
        <img src="/media/pulsWhy.png" alt="" />
        <img src="/media/pulsHvadogHvordan.png" alt="" />
        <img src="/media/pulsVærdier.png" alt="" />
        <img src="/media/pulsDifferentiering.png" alt="" />
        <img src="/media/pulsHvem.png" alt="" />
        <img src="/media/pulsPersonlighed.png" alt="" />
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
