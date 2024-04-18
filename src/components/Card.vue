<template>
  <RouterLink
    to="<slot></slot>"
    :class="`text-white bg-slate-200 bg-contain inline-block bg-center bg-no-repeat  ${width} ${height}  relative flex items-center justify-center overflow-hidden group `"
    :style="[`background-image: url(${image})`]"
  >
    <div
      id="text"
      class="z-10 absolute top-0 w-full h-full hidden group-hover:block hover:bg-[#00209260] p-2 text-end"
    >
      <h3 class="">{{ name }}</h3>
      <p class="">{{ description }}</p>
    </div>

    <video autoplay loop muted class="z-0 w-auto max-h-full object-cover">
      <source :src="video" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <img
      class="absolute top-0 z-0 min-w-fit min-h-full object-cover"
      :src="still"
      alt=""
    />
  </RouterLink>
</template>

<script>
import CircleButton from "./CircleButton.vue";

export default {
  components: {
    CircleButton,
  },

  name: "Card",
  props: {
    name: {
      type: String,
      default: "MANGLER NAVN!",
    },
    still: {
      type: String,
      default: "'/media/test.jpg'",
    },
    video: {
      type: String,
      default:
        "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4",
    },
    description: {
      type: String,
      default: "Lorem ipsum",
    },
    image: {
      type: String,
      default: "'/media/test.jpg'",
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
/* Add your component-specific styles here */
</style>
