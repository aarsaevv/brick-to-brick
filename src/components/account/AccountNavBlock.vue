<template>
  <div :class="$style.navBlock">
    <account-nav-block-info :account="account" />
    <account-nav-block-buttons />
  </div>
</template>

<script setup>
  import AccountNavBlockButtons from '@/components/account/AccountNavBlockButtons.vue';
  import AccountNavBlockInfo from '@/components/account/AccountNavBlockInfo.vue';

  defineProps({
    account: Object,
  });
</script>

<style lang="scss" module>
  .navBlock {
    display: flex;
    align-items: center;
    gap: var(--spacing-54);
  }
</style>
