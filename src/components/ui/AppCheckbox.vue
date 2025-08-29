<template>
  <div :class="$style.wrapper">
    <input
      :id="inputId"
      v-model="model"
      type="checkbox"
      :value="true"
      :class="$style.checkbox"
      @change="onChangeValue"
    />
    <label :for="inputId" :class="$style.label">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
  const props = defineProps({
    id: String,
    modelValue: Boolean,
    value: Boolean,
    label: String,
  });

  const emit = defineEmits(['update:modelValue']);

  const model = ref();

  const inputId = computed(() => props.id);

  const onChangeValue = (value) => {
    emit('update:modelValue', value);
  };
</script>

<style lang="scss" module>
  .wrapper {
    display: flex;
    align-items: center;
    gap: var(--spacing-10);
  }

  .checkbox {
    width: 12px;
    height: 12px;
    transform: scale(1.5);
    appearance: none;
    border: 1px solid var(--stroke-color-ghost);

    &:checked {
      position: relative;
      background-color: var(--bg-color-accent-primary);
      border: 1px solid var(--stroke-color-accent);

      &::after {
        content: '';
        position: absolute;
        left: 3px;
        top: 0;
        width: 2px;
        height: 6px;
        border: solid var(--stroke-color-light);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }
</style>
