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
      <h1 class="text-white mb-8">Blender ø</h1>
    </section>

    <section class="grid grid-cols-2 px-56 gap-x-20 gap-y-16">
      <div>
        <h2>Opgaven</h2>
        <p>
          Opgaven gik ud på at lave en ø i 3D-programmet blender. Med frie
          tøjler og rig mulighed for at fortolke "Ø" gik jeg ellers i gang.
        </p>
      </div>
      <img src="/media/blender/blenderØen1.png" alt="" />
    </section>

    <section class="px-56">
      <article class="grid gap-20">
        <div>
          <h2>Løsning</h2>

          <div class="grid grid-cols-3 gap-5 gap-y-16">
            <img src="/media/blender/blenderØen1.png" alt="" />
            <img src="/media/blender/blenderØen2.png" alt="" />
            <img src="/media/blender/blenderØen3.png" alt="" />
          </div>
        </div>
        <div>
          <h2>Process</h2>
          <p>
            Jeg havde mange forskellige tanker, og min første tanke var at lave
            noget man ellers ikke normalt forbinder med en øde ø. Jeg startede
            med at skitsere lidt forskellige ideer, og løbende som jeg
            skitserede, så jeg noget sjovt ved at kombinere de forskellige idéer
            til en.
          </p>
          <div class="grid grid-cols-2 gap-5 gap-y-16">
            <img src="/media/blender/blenderSkitse1.jpeg" alt="" />
            <img src="/media/blender/blenderSkitse2.jpeg" alt="" />
          </div>
        </div>
        <div>
          <p>
            Min tanke var at skabe 3 små "historier" til hver blæksprutte. Den
            store, kigger på øen, den mellemste kigger på rumskibet, og den
            lille kigger på rejerne under vandet.

            <br /><br />
            er skabt en mystik omkring historien med øen. Hvad laver dyrene der?
            og hvorfor suger rumskibet blomsterne op? Dette er til fri
            fortolkning.

            <br /><br />
            Øen skulle illustreres om natten, forskellige elementer skulle lyse
            og øen skulle være våd efter lige at være dukket op til
            havoverfladen.

            <br /><br />
            Med lysindfald, forskellige materials og blenderkits, fik jeg skabt
            en nattestemning, med selvlysende elementer og spejlninger.
          </p>
        </div>
        <div>
          <div class="grid grid-cols-1 gap-2">
            <img src="/media/blender/blenderProces1.png" alt="" />
            <img src="/media/blender/blenderProces2.png" alt="" />
            <img src="/media/blender/blenderProces3.png" alt="" />
            <img src="/media/blender/blenderProces4.png" alt="" />
            <img src="/media/blender/blenderProces5.png" alt="" />
            <img src="/media/blender/blenderProces6.png" alt="" />
          </div>
        </div>
        <div>
          <p>Lille sprutte 3D-printet</p>
          <div class="grid grid-cols-2 gap-5 gap-y-16">
            <img src="/media/blender/blenderPrint1.jpeg" alt="" />
            <img src="/media/blender/blenderPrint2.jpeg" alt="" />
          </div>
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
