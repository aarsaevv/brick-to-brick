<template>
  <header :class="$style.header">
    <app-breadcrumbs :breadcrumbs="breadcrumbs" />
    <account-nav-block :account="account" />
  </header>
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

  const account = ref({});

  const fetchAccountData = async () => {
    try {
      const res = await fetch('/account.mock.json');

      return await res.json();
    } catch (e) {
      console.error(e);
    }
  };

  onBeforeMount(async () => {
    account.value = await fetchAccountData();
  });
</script>

<style lang="scss" module>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-16) var(--spacing-90);
    background-color: var(--bg-color-light);
  }
</style>
