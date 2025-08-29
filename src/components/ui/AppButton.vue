<template>
  <button
    tabindex="0"
    :class="{
      [$style.button]: true,
      [$style.secondary]: variation === 'secondary',
    }"
    :title="title"
    type="button"
  >
    <span :class="$style.title">
      {{ title }}
    </span>
  </button>
</template>

<script setup>
  defineProps({
    title: String,
    variation: String,
  });
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .button {
    outline: none;
    border: none;
    background-color: var(--bg-color-accent-secondary);
    padding: var(--spacing-16) var(--spacing-36);
    border-radius: var(--spacing-10);
    cursor: pointer;
  }

  .secondary {
    background-color: var(--bg-color-ghost-secondary);
  }

  .title {
    text-transform: uppercase;
    color: var(--text-color-light);

    @include fonts.Caption-1();
  }
</style>
