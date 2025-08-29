<template>
  <button tabindex="0" :class="$style.button" :title="title" type="button">
    <slot />
  </button>
</template>

<script setup>
  defineProps({
    title: String,
  });
</script>

<style lang="scss" module>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    font: inherit;
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }
</style>
