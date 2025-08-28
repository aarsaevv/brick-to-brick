<template>
  <section :class="$style.wrapper">
    <profile-card :profile="profile" />
    <div :class="$style.tools">
      <filters-list @on-change="onFilterChange" />
      <app-button title="Добавить документ" @click="openAddDocumentModal" />
    </div>
    <div :class="$style.docs">
      <documents-list :documents="documents" />
    </div>

    <h2 style="color: red">
      Сделать фильтры -
      <span style="text-decoration: line-through">вёрстка</span> плюс логика
    </h2>
    <h2 style="color: red; text-decoration: line-through">
      Сделать документы (получение через fetch)
    </h2>
    <h2 style="color: red">Сделать содержимое модалки</h2>
  </section>
</template>

<script setup>
  import useModal from '@/code/use-modal.js';
  import ProfileCard from '@/components/docs/ProfileCard.vue';
  import FiltersList from '@/components/docs/FiltersList.vue';
  import AppButton from '@/components/ui/AppButton.vue';
  import DocumentsList from '@/components/docs/DocumentsList.vue';

  const { setCurrentModalName } = useModal();

  let timeoutId;

  const profile = ref({});
  const documents = ref([]);

  const fetchProfileData = async () => {
    try {
      const res = await fetch('/profile.mock.json');

      return await res.json();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchDocuments = async () => {
    return new Promise((resolve) => {
      timeoutId = window.setTimeout(async () => {
        const res = await fetch('/documents.mock.json');

        resolve(res.json());
      }, 1000);
    });
  };

  const onFilterChange = (event) => {
    const { id, value } = event.target;

    console.warn(id, value);
  };

  const openAddDocumentModal = () => {
    setCurrentModalName('add_doc');
  };

  onBeforeMount(async () => {
    profile.value = await fetchProfileData();
    documents.value = await fetchDocuments();
  });

  onUnmounted(() => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
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

  .docs {
    margin-top: var(--spacing-30);
  }
</style>
