<template>
  <RouterLink
    id="CircleButton"
    to="<slot></slot>"
    class="max-w-[13vw] max-h-[13vh] grid text-center place-items-center bg-gradient-to-br from-[#1549FF] hover:from-[#C02425] via-[#061FDF] hover:via-[#FE675C] hover:to-[#FF872A] to-[#002092] aspect-square rounded-full text-white uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.40)] scale-[2]"
  >
    <slot></slot>
  </RouterLink>
</template>
