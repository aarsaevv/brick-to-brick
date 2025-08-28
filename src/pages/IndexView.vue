<template>
  <section :class="$style.wrapper">
    <profile-card :profile="profile" />
    <div :class="$style.tools">
      <filters-list />
      <app-button title="Добавить документ" @click="openAddDocumentModal" />
    </div>

    <h2 style="color: red">
      Сделать фильтры (vue-select) - вёрстка плюс логика
    </h2>
    <h2 style="color: red">Сделать документы (получение через fetch)</h2>
    <h2 style="color: red">Сделать содержимое модалки</h2>
  </section>
</template>

<script setup>
  import useModal from '@/code/use-modal.js';
  import ProfileCard from '@/components/docs/ProfileCard.vue';
  import FiltersList from '@/components/docs/FiltersList.vue';
  import AppButton from '@/components/ui/AppButton.vue';

  const { setCurrentModalName } = useModal();

  const profile = ref({});

  const fetchProfileData = async () => {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve({
          id: '1',
          name: 'Абрамова Екатерина',
          gender: 'female',
          avatarUrl: 'https://i.pravatar.cc/128?img=47',
          status: 'active',
          personal_phone: '8-900-000-00-00',
          parents_phone: '8-900-000-00-01',
          birthday: '25.04.2004 (17 лет)',
          address: 'г. Краснодар, ул. Советская 24, кв. 208',
        });
      }, 100);
    });
  };

  const openAddDocumentModal = () => {
    setCurrentModalName('add_document');
  };

  onMounted(async () => {
    try {
      profile.value = await fetchProfileData();
    } catch (e) {
      console.error(e);
    }
  });
</script>

<style lang="scss" module>
  .wrapper {
    position: relative;
    z-index: 0;
    padding: var(--spacing-16) var(--spacing-90);
  }

  .tools {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin-top: var(--spacing-90);
  }
</style>
