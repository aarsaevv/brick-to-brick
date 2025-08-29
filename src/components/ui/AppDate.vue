<template>
  <div :class="$style.wrapper">
    <label v-if="label" :class="$style.label">
      {{ label }}
    </label>
    <span v-if="!date" :class="$style.dateInfo">Не выбрано</span>
    <span v-else :class="$style.dateInfo">{{ date }}</span>
    <input
      v-model="date"
      :class="$style.input"
      type="date"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', date)"
    />
  </div>
</template>

<script setup>
  const props = defineProps({
    modelValue: String,
    label: String,
    placeholder: String,
  });

  defineEmits(['update:modelValue']);

  const date = ref(props.modelValue);
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
