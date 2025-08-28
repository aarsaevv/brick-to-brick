<template>
  <div :class="$style.wrapper">
    <app-select
      v-for="filter in availableFilters"
      :id="filter.id"
      :label="filter.label"
      :options="filter.options"
      @on-change="onFilterChange"
    />
  </div>
</template>

<script setup>
  import AppSelect from '@/components/ui/AppSelect.vue';

  const emit = defineEmits(['on-change']);

  const availableFilters = [
    {
      id: 'extension',
      label: 'Тип документа',
      options: [
        {
          value: 'pdf',
          name: 'PDF',
        },
        {
          value: 'doc',
          name: 'DOC',
        },
        {
          value: 'xls',
          name: 'XLS',
        },
        {
          value: 'jpg',
          name: 'JPG',
        },
      ],
    },
    {
      id: 'status',
      label: 'Статус',
      options: [
        {
          value: 'concluded',
          name: 'Заключен',
        },
        {
          value: 'rejected',
          name: 'Расторгнут',
        },
      ],
    },
    {
      id: 'sort',
      label: 'Сортировать по',
      options: [
        {
          value: 'date',
          name: 'Дате',
        },
        {
          value: 'title',
          name: 'Названию',
        },
      ],
    },
  ];

  const onFilterChange = (event) => {
    emit('on-change', event);
  };
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .wrapper {
    display: flex;
    align-items: center;
    gap: var(--spacing-164);
  }
</style>
