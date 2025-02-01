<template>
  <RouterLink
    to="<slot></slot>"
    :class="`text-white bg-slate-200 bg-contain inline-block bg-center bg-no-repeat  ${width} ${height}  relative flex items-center justify-center overflow-hidden group `"
  >
    <div
      id="text"
      class="z-10 absolute top-0 w-full h-full hidden group-hover:block hover:bg-[#00209295] p-2 text-end"
    >
      <h3 class="">{{ name }}</h3>
      <p class="">{{ description }}</p>
    </div>

    <img class="z-0 h-fit w-full" :src="image" alt="" />
  </RouterLink>
</template>

<script>
import CircleButton from "./CircleButton.vue";

export default {
  components: {
    CircleButton,
  },

  name: "CardImage",
  props: {
    name: {
      type: String,
      default: "MANGLER NAVN!",
    },
    image: {
      type: String,
      default: "'/media/test.jpg'",
    },
    description: {
      type: String,
      default: "Lorem ipsum",
    },

    width: {
      type: [String, Number],
      default: "max-w-full",
    },
    height: {
      type: [String, Number],
      default: "h-96",
    },
  },
};
</script>

<style>
img {
  max-width: 100%; /* Ensure the image doesn't exceed the width of its container */
  max-height: 100%; /* Ensure the image doesn't exceed the height of its container */
  object-fit: contain; /* Scale the image to maintain aspect ratio while fitting within the container */
}
/* Add your component-specific styles here */
</style>
