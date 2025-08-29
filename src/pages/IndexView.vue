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
  import useModal from '@/code/composables/use-modal.js';
  import useProfile from '@/code/composables/use-profile.js';
  import useDocuments from '@/code/composables/use-documents.js';

  import ProfileCard from '@/components/docs/ProfileCard.vue';
  import FiltersList from '@/components/docs/FiltersList.vue';
  import AppButton from '@/components/ui/AppButton.vue';
  import DocumentsList from '@/components/docs/DocumentsList.vue';

  const { setCurrentModalName } = useModal();
  const { fetchProfileData } = useProfile();
  const { fetchDocuments } = useDocuments();

  const profile = ref({});

  const documents = ref([]);
  const filteredDocuments = ref([]);

  const onFilterChange = (event) => {
    const { id, value } = event.target;

    console.warn(documents.value);

    console.warn(id, value);
  };

  const openAddDocumentModal = () => {
    setCurrentModalName('add_doc');
  };

  onBeforeMount(async () => {
    profile.value = await fetchProfileData();

    documents.value = await fetchDocuments();
    filteredDocuments.value = documents.value;
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
