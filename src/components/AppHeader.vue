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
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve({
          id: '0',
          name: 'Сергеев Иван',
          avatarUrl: 'https://i.pravatar.cc/64?img=8',
        });
      }, 100);
    });
  };

  onMounted(async () => {
    try {
      account.value = await fetchAccountData();
    } catch (e) {
      console.error(e);
    }
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
