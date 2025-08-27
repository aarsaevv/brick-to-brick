<template>
  <div :class="$style.breadcrumbs">
    <app-breadcrumb-item
      v-for="(breadcrumb, index) in breadcrumbs"
      :breadcrumb="breadcrumb"
      :is-last-breadcrumb="isLastBreadcrumb(index)"
    />
  </div>
</template>

<script setup>
  import AppBreadcrumbItem from '@/components/breadcrumbs/AppBreadcrumbItem.vue';

  const props = defineProps({
    breadcrumbs: Array,
  });

  const isLastBreadcrumb = (currentIndex) => {
    const lastIndex = props.breadcrumbs.length - 1;

    return lastIndex === currentIndex;
  };
</script>

<style lang="scss" module>
  .breadcrumbs {
    display: flex;
    gap: var(--spacing-10);
  }
</style>
