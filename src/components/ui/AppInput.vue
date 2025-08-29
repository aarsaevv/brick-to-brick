<template>
  <input
    v-model="input"
    :type="type"
    :placeholder="placeholder"
    :class="$style.input"
    @input="$emit('update:modelValue', input)"
  />
</template>

<script setup>
  const props = defineProps({
    modelValue: String,
    type: String,
    placeholder: String,
  });

  defineEmits(['update:modelValue']);

  const input = ref(props.modelValue);
</script>

<style lang="scss" module>
  .input {
    border: none;
    border-bottom: 1px solid var(--stroke-color-ghost);
    outline: none;
    padding: var(--spacing-10) 0;
    width: 100%;
    color: var(--text-color-ghost);
  }
</style>
