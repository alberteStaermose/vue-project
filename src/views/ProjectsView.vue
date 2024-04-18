<script></script>

<template>
  <body class="grid gap-24 bg-blue-300 py-20">
    <section class="flex items-end h-[40vh] px-32 justify-center bg-[#04151E]">
      <h1 class="text-white mb-8">Mine projekter</h1>
    </section>

    <section
      class="text-white bg-slate-200 bg-contain bg-center bg-no-repeat h-[60vh] w-max relative justify-center group"
    >
      <div class="h-full w-full flex items-center justify-center">
        <img class="h-full w-auto" src="../components/img/test.jpg" alt="" />
      </div>
    </section>
  </body>
</template>

<style>
img {
  max-width: 100%; /* Ensure the image doesn't exceed the width of its container */
  max-height: 100%; /* Ensure the image doesn't exceed the height of its container */
  object-fit: contain; /* Scale the image to maintain aspect ratio while fitting within the container */
}
</style>
