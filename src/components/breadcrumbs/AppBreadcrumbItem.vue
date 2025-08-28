<template>
  <div>
    <router-link
      :class="{ [$style.breadcrumb]: true, [$style.last]: isLastBreadcrumb }"
      :to="breadcrumb.path"
    >
      <span :class="$style.text">
        {{ breadcrumb.title }}
      </span>
    </router-link>
  </div>
</template>

<script setup>
  defineProps({
    breadcrumb: Object,
    isLastBreadcrumb: Boolean,
  });
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .breadcrumb {
    color: var(--text-color-dark);
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);

    &:after {
      content: '/';
      padding-left: var(--spacing-10);
    }

    @include fonts.Caption-3();
  }

  .last {
    color: var(--text-color-ghost);
    pointer-events: none;

    &:after {
      content: none;
    }
  }
</style>
