<template>
  <picture>
    <img
      v-if="src"
      :alt="alt"
      :class="[$style.img, $style.imageClass]"
      :src="src"
    />
  </picture>
</template>

<script setup>
  defineProps({
    src: String,
    alt: String,
    imageClass: String,
  });
</script>

<style lang="scss" module>
  .img {
    object-fit: cover;
  }
</style>
