<template>
  <div :class="$style.wrapper">
    <app-select
      v-for="filter in availableFilters"
      :id="filter.id"
      :label="filter.label"
      :options="filter.options"
      @update:model-value="onFilterChange"
    />
  </div>
</template>

<script setup>
  import AppSelect from '@/components/ui/AppSelect.vue';

  const emit = defineEmits(['on-filter-change']);

  const availableFilters = [
    {
      id: 'extension',
      label: 'Тип документа',
      options: [
        {
          name: 'PDF',
          value: 'pdf',
        },
        {
          name: 'DOC',
          value: 'doc',
        },
        {
          name: 'XLS',
          value: 'xls',
        },
        {
          name: 'JPG',
          value: 'jpg',
        },
      ],
    },
    {
      id: 'status',
      label: 'Статус',
      options: [
        {
          name: 'Заключен',
          value: 'concluded',
        },
        {
          name: 'Расторгнут',
          value: 'rejected',
        },
        {
          name: 'Черновик',
          value: 'draft',
        },
      ],
    },
    {
      id: 'sort',
      label: 'Сортировать по',
      options: [
        {
          name: 'Дате по возр.',
          value: 'date-ascending',
        },
        {
          name: 'Дате по убыв.',
          value: 'date-descending',
        },
        {
          name: 'Названию по возр.',
          value: 'title-ascending',
        },
        {
          name: 'Названию по убыв.',
          value: 'title-descending',
        },
      ],
    },
  ];

  const onFilterChange = (id, value) => {
    emit('on-filter-change', id, value);
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
