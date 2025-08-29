<template>
  <div :class="$style.wrapper">
    <label v-if="label" :class="$style.label">
      {{ label }}
    </label>
    <span v-if="!date" :class="$style.dateInfo">Не выбрано</span>
    <span v-else :class="$style.dateInfo">{{ date }}</span>
    <input
      :class="$style.input"
      v-model="date"
      type="date"
      :placeholder="placeholder"
      @input="$emit('update:modelValue')"
    />
  </div>
</template>

<script setup>
  defineProps({
    modelValue: String,
    label: String,
    placeholder: String,
  });

  defineEmits(['update:modelValue']);

  const date = ref();
</script>

<style lang="scss" module>
  .wrapper {
    gap: var(--spacing-40);
  }

  .label {
    margin-right: var(--spacing-16);
  }

  .dateInfo {
    color: var(--text-color-ghost);
    user-select: none;
  }

  .input {
    border: none;

    &::-webkit-datetime-edit {
      display: none;
    }

    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
      transform: translateY(3px);
    }
  }
</style>
