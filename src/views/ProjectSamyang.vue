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
      <h1 class="text-white mb-8">Samyang Foods</h1>
    </section>

    <section class="grid grid-cols-2 px-56 gap-x-20 gap-y-16">
      <div>
        <h2>Opgaven</h2>
        <p>
          Dette var en skoleopgave og den gik ud på at finde et brand som vi
          kunne se potentiale i ved en rebranding. Jeg valgte Samyang Foods, da
          alle nudler på hylderne i Danmark ikke visuelt er så forskellige. MIn
          rebranding har fokus på Samyang Foods som et paraply brand, hvis
          visuelle identitet skal skinne igennem på alle deres produkter, og jeg
          har derfor også fokuseret på deres "Original" nudler.
        </p>
      </div>

      <div>
        <img src="/media/samyangOgMarkedet.png" alt="" />
      </div>
    </section>
    <section class="px-56">
      <article class="mb-20">
        <h2>Løsning</h2>
        <img src="/media/samyangVisuelidentitet.png" alt="" />
      </article>
      <article class="gap-y-16 mb-20">
        <div class="grid grid-cols-2 gap-x-20 gap-y-16 mb-5">
          <div>
            <h3>Logo og tagline</h3>
            <img src="/media/samyangLogos.png" alt="" />
          </div>

          <div>
            <h3>Nuddelindpakning</h3>
            <img src="/media/samyangNuddel.png" alt="" />
          </div>

          <div>
            <h3>Hjemmeside</h3>
            <p>
              Vi har skabt et helt nyt unviers til Politiken Plus, som vi har
              valgt at kalde Politiken Puls. Til Politiken Puls, har vi udviklet
              en ny startegi, en ny visuel identet og en prototype til en ny
              hjemmeside.
            </p>
            <img src="/media/samyangLogos.png" alt="" />
          </div>
        </div>
      </article>
    </section>
    <section class="px-56">
      <h2>Process</h2>

      <article class="gap-y-16 mb-20">
        <div class="gap-x-20 gap-y-16 mb-5">
          <div class="mb-5">
            <h3>Research og indsigter</h3>
            <p>
              Ud fra en dybdegående research kom vi frem til en strategi til
              Politken Plus. Vi gjorde en dyd af at researche på Politken og
              Politiken Plus, både visuelt og verbalt for at få et klar overblik
              over hvem Politiken er. Udover det, indsamlede vi en masse data på
              eksisterende og mulige forbrugere af Politiken Plus for at få en
              forståelse for deres behov. For at få et overblik over markedet og
              hvor Politiken Plus nye posititon kunne være, undersøgte vi
              hvordan konkurrenterne både kommunikerer visuelt og verbalt og
              hvordan de havde løst og opsat deres fordelsuniverser. Til sidst
              undersøgte vi kulturen for at finde frem til trends og tendenser
              vi kunne tappe ind i.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-x-20 gap-y-16 mb-10">
            <img src="/media/samyangResearch.png" alt="" />
            <img src="/media/samyang4c.png" alt="" />
          </div>
          <div class="mb-5">
            <h3>Strategi</h3>
            <p>
              Ud fra vores research kom vi frem til en ny strategi til Politiken
              Plus, som er den der ligger til grund for vores løsning -
              Politiken Plus nye navn "Politken Puls" og den nye visuelle
              identitet.
            </p>
          </div>
          <div class="grid grid-cols-4 gap-y-16 mb-10">
            <img src="/media/samyangStrategi1.png" alt="" />
            <img src="/media/samyangStrategi2.png" alt="" />
            <img src="/media/samyangStrategi3.png" alt="" />
            <img src="/media/samyangStrategi4.png" alt="" />
          </div>
          <div class="mb-5">
            <h3>Visuel identitet inspiration</h3>
            <p>
              Ud fra vores research kom vi frem til en ny strategi til Politiken
              Plus, som er den der ligger til grund for vores løsning -
              Politiken Plus nye navn "Politken Puls" og den nye visuelle
              identitet.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-20 gap-y-16 mb-10">
            <div>
              <img src="/media/samyangKoreaVisuelt.png" alt="" />
              <img src="/media/samyangMinwha.png" alt="" />
            </div>

            <img src="/media/samyangLogoInspo.png" alt="" />
          </div>
          <div class="mb-5">
            <h3>Logo</h3>
            <p>
              Ud fra vores research kom vi frem til en ny strategi til Politiken
              Plus, som er den der ligger til grund for vores løsning -
              Politiken Plus nye navn "Politken Puls" og den nye visuelle
              identitet.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-20 gap-y-16 mb-10">
            <div>
              <img src="/media/samyangSkitser.png" alt="" />
              <img src="/media/samyangLogoSkitser.png" alt="" />
            </div>
            <img src="/media/samyangLogos.png" alt="" />
          </div>
          <div class="mb-5">
            <h3>Farver</h3>
            <p>
              Ud fra vores research kom vi frem til en ny strategi til Politiken
              Plus, som er den der ligger til grund for vores løsning -
              Politiken Plus nye navn "Politken Puls" og den nye visuelle
              identitet.
            </p>
            <img src="/media/samyangFarver.png" alt="" />
          </div>

          <div class="mb-5">
            <h3>Grafik</h3>
            <p>
              Ud fra vores research kom vi frem til en ny strategi til Politiken
              Plus, som er den der ligger til grund for vores løsning -
              Politiken Plus nye navn "Politken Puls" og den nye visuelle
              identitet.
            </p>
            <img src="/media/samyangGrafik.png" alt="" />
          </div>
        </div>
      </article>

      <section>
        <article class="px-56 gap-x-20 gap-y-16">
          <h2>Før og efter</h2>
        </article>

        <img src="/media/samyangFørEfter.png" alt="" />
      </section>
    </section>

    <Kontakt></Kontakt>
  </body>
</template>

<style>
svg {
  fill: blue;
}
</style>
