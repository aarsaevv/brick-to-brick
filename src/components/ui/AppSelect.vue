<template>
  <div :class="$style.wrapper">
    <label :for="id" :class="$style.label">{{ label }}</label>
    <select
      :name="name"
      :id="id"
      :class="$style.select"
      @change="onOptionChange"
    >
      <option selected>Не выбрано</option>
      <option v-for="option in options" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
  defineProps({
    id: String,
    name: String,
    label: String,
    options: Array,
  });

  const emit = defineEmits(['on-change']);

  const onOptionChange = (event) => {
    emit('on-change', event);
  };
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }

  .label {
    color: var(--text-color-ghost);

    @include fonts.Caption-2();
  }

  .select {
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--text-color-accent);
    font-size: 16px;
    padding-right: var(--spacing-8);
  }
</style>
