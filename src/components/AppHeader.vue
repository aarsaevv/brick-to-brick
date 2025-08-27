<template>
  <div :class="$style.header">
    <app-breadcrumbs :breadcrumbs="breadcrumbs" />
    <account-nav-block />
  </div>
</template>

<script setup>
  import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue';
  import AccountNavBlock from '@/components/account/AccountNavBlock.vue';

  const breadcrumbs = [
    {
      title: 'Главная',
      path: '/',
    },
    {
      title: 'Ученики',
      path: '/students',
    },
    {
      title: 'Документы',
      path: '/students/docs',
    },
  ];
</script>

<style lang="scss" module>
  .header {
    position: absolute;
    margin-left: var(--sidebar-width);
    width: -webkit-fill-available;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-16) var(--spacing-90);
    background-color: var(--background-color-light);
  }
</style>
