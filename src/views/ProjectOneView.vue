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
      <h1 class="text-white mb-8">Valør</h1>
    </section>

    <section class="grid grid-cols-2 px-56 gap-x-20 gap-y-16">
      <div>
        <h2>Opgaven</h2>
        <p>
          Dette var en skoleopgave og den gik ud på at opsætte en visuel
          identitet, animere et navnetræk, samt lave en asset generator til en
          fiktiv kunde. Jeg fik tildelt, møbelbutik og har fra research, viden
          om form, farver, typografi, tegning, kreativitet og programmering
          udarbejdet møbelbutikken Valør.
        </p>
      </div>

      <div>
        <img src="/media/valor/monstre/valorHeader.png" alt="" />
      </div>
    </section>

    <section class="mx-56">
      <article class="mx-32">
        <h2>Hvem er Valør?</h2>
        <p>
          Valør er en møbelbutik der sælger dansk møbeldesign med fokus på
          farver, og på at sælge et realistisk billede af boligindretningen. Ved
          at tage et kig på konkurrenterne, ses det at deres visuelle identitet
          klart afspejler dansk møbeldesign, med enkelthed og naturen i fokus.
          Ud fra en analyse af trends og tendenser kan man dog se at farver, der
          står i kontrast til de analoge naturfarver, er efterspurgte i den
          danske boligindretning. Så ved at sælge dansk møbeldesign med fokus på
          farver, skiller Valør sig ud fra konkurrenterne, og giver samtidig
          deres kunder en mulighed for at bringe farver ind i boligindretningen.
          Tager man et kig på konkurrenternes billeder, ser man en visualisering
          af et perfekt opryddet hjem. Næsten for perfekt, og man kunne blive i
          tvivl om der overhovedet er nogen der bor sådan. Dette gør Valør op
          med. Valørs målgruppe er altså familier og personer, der giver plads
          til farver og leg i boligindretningen, men som også ved at de ikke kan
          leve op til en perfekt oprydning. Ordende, enkelthed, rene klare
          linjer, farverig og legende beskriver altså Valørs tone of voice.
        </p>
      </article>

      <div>
        <h3>Konkurrenter</h3>
        <img src="/media/valor/Konkurrenter.jpg" alt="" />
      </div>
      <div>
        <h3>Trends og tendenser</h3>
        <img src="/media/valor/trendsOgTendenser.jpg" alt="" />
      </div>
    </section>

    <section class="mx-56">
      <article class="mx-32">
        <h2>Billedestil</h2>
        <p>
          Med fokus på farver og en mindre perfekt indretning har jeg genereret
          nogle eksempler på billeder til Valør. Billederne har jeg genereret
          med Midjourney.
        </p>
      </article>

      <div class="grid grid-cols-2 gap-x-20 gap-y-16"></div>
      <div class="grid grid-cols-4">
        <img src="/media/valor/fotostil/rum1.jpg" alt="" />
        <img src="/media/valor/fotostil/rum2.jpg" alt="" />
        <img src="/media/valor/fotostil/rum3.jpg" alt="" />
        <img src="/media/valor/fotostil/rum4.jpg" alt="" />
        <img src="/media/valor/fotostil/rum5.jpg" alt="" />
        <img src="/media/valor/fotostil/rum6.jpg" alt="" />
        <img src="/media/valor/fotostil/rum7.jpg" alt="" />
        <img src="/media/valor/fotostil/rum8.jpg" alt="" />
      </div>
    </section>

    <section class="mx-56">
      <article class="mx-32">
        <h2>Farvepalette</h2>
        <p>
          Ud fra de genererede billeder har jeg skabt en bred farvepalette.
          Paletten har en bred vifte af farver fra farvecirklen, for at gøre det
          muligt at kombinere så mange farver som muligt og skabe forskellige
          kontraster. Den brune i farvepaletten skal visualisere dansk
          møbeldesign og træ, men kan samtidig bruges som en basicfarve til fx
          tekst. De resterende farver i farvepaletten er valgt for at kunne stå
          i kontrast til den brune, og skal visualisere valørs fokus på
          farver.​​​​​​​
        </p>
      </article>

      <img src="/media/valor/Farvepalette.jpg" alt="" />
    </section>

    <section class="mx-56">
      <article class="mx-32">
        <h2>Typografisk navnetræk</h2>
        <p>
          Valørs navn er valgt ud fra fokus på farver. For at skabe en rød tråd
          mellem koncept og navn er ordet "Valør" valgt, da det er et begreb der
          beskriver en farves intensitet. Til navnetrækket har jeg illustreret
          en "A"-stol, altså en stol der ligner et A. Dette er gjort for at give
          navnetrækket, et mere legende udseende. Fonten "Genoa" er valgt til
          navnetrækket da den udstråler noget enkelthed og noget moderne, men
          samtidig harmonerer med "A"-stolen. Navntrækket har et enkelt og
          legende udtryk, med rene klare linjer.
        </p>
      </article>

      <img src="/media/valor/logoPosNeg.svg" alt="" />
    </section>

    <section class="mx-56">
      <article class="mx-32">
        <h2>Illustrationer</h2>
        <p>
          Udover "A"-stolen har jeg illustreret flere møbler, der kan benyttes
          på forskellige måder i den visuelle identitet. Dette har jeg gjort da
          konkurrenterne ikke rigtig benytter sig af grafisk materiale, så med
          dette kan valør skille sig ud fra konkurrenterne.
        </p>
      </article>

      <div class="grid grid-cols-4">
        <img src="/media/valor/a/aStol.svg" alt="" />
        <img src="/media/valor/a/lampe1.svg" alt="" />
        <img src="/media/valor/a/lampe2.svg" alt="" />
        <img src="/media/valor/a/reol.svg" alt="" />
      </div>
    </section>

    <section class="mx-56">
      <article class="mx-32">
        <h2>Animeret navnetræk</h2>
        <p>
          Med processing, har jeg kodet en animation af navnetrækket. Til det
          animerede navnetræk var fokus igen her at lade den brune visualisere
          natur, hvor møblerne der skiftevis skifter mellem farverne i paletten,
          skal visualisere at - hos valør kan du trække farver ind i din
          indretning. Du kan lege og kombinere ligesom du vil, der er masser af
          muligheder.
        </p>
      </article>

      <video controls>
        <source src="/media/valør.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    </section>

    <section class="mx-56">
      <article class="mx-32">
        <h2>Asset generator</h2>
        <p>
          Også med processing har jeg opsat en kode med de forskellige
          illustrationer af møbler. Ved at stille på forskellige parametre, kan
          man genere en masse forskellige mønstre, der kan tilpasses alt efter
          hvad de ønskes at bruge til, helt uden at miste Valørs visuelle
          identitet. Nedenfor kan eksempler, på forskellige mønstre og eksempler
          på hvad de kan bruges, ses. <br />
          <br />
          Se min asset generator og eksempel på brugervenligt interface til at
          stille på de forskellige parametre
        </p>
      </article>

      <img src="/media/valor/generator.png" alt="" />
    </section>

    <section class="mx-56">
      <p>Eksempler på eksporterede mønstre, genereret med asset generatoren</p>
      <img src="/media/valor/genereret1.png" alt="" />
      <img src="/public/media/valor/genereret2.png" alt="" />
    </section>

    <section class="mx-56">
      <p>Eksempler på hvad de forskellige mønstre kan bruges til</p>
      <img src="/media/valor/samletAsset1.png" alt="" />
      <img src="/media/valor/samletAsset2.png" alt="" />
    </section>

    <Kontakt></Kontakt>
  </body>
</template>

<style>
svg {
  fill: blue;
}
</style>
