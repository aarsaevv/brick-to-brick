<template>
  <div :class="$style.list">
    <document-card
      v-for="document in documents"
      :key="document.id"
      :document="document"
    />
  </div>
</template>

<script setup>
  import DocumentCard from '@/components/docs/DocumentCard.vue';

  defineProps({
    documents: Array,
  });
</script>

<style lang="scss" module>
  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: var(--spacing-20);
  }
</style>
