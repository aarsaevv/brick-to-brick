<template>
  <div :class="$style.accountInfo">
    <app-image :src="AccountStubImg" :image-class="$style.image" />
    <p :class="$style.name">{{ accountName }}</p>
  </div>
</template>

<script setup>
  import AppImage from '@/components/ui/AppImage.vue';
  import AccountStubImg from '@/assets/account-stub.png';

  const accountName = ref('Иван Иванов');
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .accountInfo {
    display: flex;
    align-items: center;
    gap: var(--spacing-10);
  }

  .name {
    @include fonts.Paragraph-1();
  }
</style>
