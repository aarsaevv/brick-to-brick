<template>
  <section :class="$style.wrapper">
    <profile-card :profile="profile" />
    <div :class="$style.tools">
      <filters-list @on-filter-change="onFilterChange" />
      <app-button title="Добавить документ" @click="openAddDocumentModal" />
    </div>
    <div :class="$style.docs">
      <p v-if="!filteredDocuments.length" :class="$style.noResults">
        Результатов нет
      </p>
      <documents-list :documents="filteredDocuments" />
    </div>

    <h2 style="color: red; text-decoration: line-through">
      Сделать фильтры - вёрстка плюс логика
    </h2>
    <h2 style="color: red; text-decoration: line-through">
      Сделать документы (получение через fetch)
    </h2>
    <h2 style="color: red">Сделать содержимое модалки</h2>
    <h2 style="color: red">Сделать добавление документов</h2>
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

  const activeFilters = reactive({
    extension: null,
    status: null,
    sort: null,
  });

  const profile = ref({});

  const documents = ref([]);
  const filteredDocuments = ref([]);

  const onFilterChange = (id, value) => {
    activeFilters[id] = value;

    applyFilters();
  };

  const applyFilters = () => {
    let result = [...documents.value];

    if (activeFilters.extension) {
      result = result.filter(
        (doc) => doc.extension === activeFilters.extension
      );
    }

    if (activeFilters.status) {
      result = result.filter((doc) => doc.status === activeFilters.status);
    }

    switch (activeFilters.sort) {
      case 'date-ascending':
        result.sort((a, b) => new Date(a.dateStart) - new Date(b.dateStart));
        break;
      case 'date-descending':
        result.sort((a, b) => new Date(b.dateStart) - new Date(a.dateStart));
        break;
      case 'title-ascending':
        result.sort((a, b) =>
          a.title.localeCompare(b.title, 'ru', { numeric: true })
        );
        break;
      case 'title-descending':
        result.sort((a, b) =>
          b.title.localeCompare(a.title, 'ru', { numeric: true })
        );
        break;
    }

    filteredDocuments.value = result;
  };

  const openAddDocumentModal = () => {
    setCurrentModalName('add_doc');
  };

  onBeforeMount(async () => {
    //
    setCurrentModalName('add_doc');
    //

    profile.value = await fetchProfileData();

    documents.value = await fetchDocuments();
    applyFilters();
  });
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

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

  .noResults {
    color: var(--text-color-accent);

    @include fonts.Heading-2;
  }
</style>
