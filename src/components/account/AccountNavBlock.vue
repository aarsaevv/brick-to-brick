<template>
  <div :class="$style.navBlock">
    <account-nav-block-info />
    <account-nav-block-buttons />
  </div>
</template>

<script setup>
  import AccountNavBlockButtons from '@/components/account/AccountNavBlockButtons.vue';
  import AccountNavBlockInfo from '@/components/account/AccountNavBlockInfo.vue';
</script>

<style lang="scss" module>
  .navBlock {
    display: flex;
    align-items: center;
    gap: var(--spacing-54);
  }
</style>
