<template>
  <div :class="$style.wrapper">
    <p :class="$style.name">
      {{ name }}
    </p>
    <div :class="$style.options">
      <label
        v-for="option in options"
        :key="option.value"
        :class="$style.radio"
      >
        <input
          v-model="model"
          type="radio"
          :name="name"
          :value="option.value"
        />
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    modelValue: String,
    name: String,
    options: Array,
  });

  const emit = defineEmits(['update:modelValue']);

  const model = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
  });
</script>

<style lang="scss" module>
  .wrapper {
    display: flex;
    gap: var(--spacing-10);
  }

  .name {
  }

  .radio {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
  }

  .options {
    display: flex;
    flex-direction: column;
  }
</style>
