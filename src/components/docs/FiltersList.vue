<template>
  <div :class="$style.wrapper">
    <p :class="$style.caption">Тип документа</p>
    <p :class="$style.caption">Статус</p>
    <p :class="$style.caption">Сортировать по</p>
  </div>
</template>

<script setup></script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .wrapper {
    display: flex;
    align-items: center;
    gap: 164px;
  }

  .caption {
    color: var(--text-color-ghost);

    @include fonts.Caption-2();
  }
</style>
