<template>
  <div :class="$style.accountInfo">
    <img :src="account.avatarUrl" alt="Account avatar" :class="$style.image" />
    <p>{{ account.name }}</p>
  </div>
</template>

<script setup>
  defineProps({
    account: Object,
  });
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .accountInfo {
    display: flex;
    align-items: center;
    gap: var(--spacing-10);
  }

  .image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>
