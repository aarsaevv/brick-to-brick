<template>
  <div :class="$style.wrapper">
    <label :for="id" :class="$style.label">{{ label }}</label>
    <select
      v-model="selected"
      :name="name"
      :id="id"
      :class="$style.select"
      @change="onOptionChange"
    >
      <option selected value="">Не выбрано</option>
      <option v-for="option in options" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
  const { id } = defineProps({
    id: String,
    name: String,
    label: String,
    options: Array,
  });

  const emit = defineEmits(['update:modelValue']);

  const selected = ref('');

  const onOptionChange = () => {
    emit('update:modelValue', id, selected.value);
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
