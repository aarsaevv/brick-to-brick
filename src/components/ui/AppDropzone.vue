<template>
  <div :class="$style.dropzoneWrapper">
    <input type="file" id="file" :class="$style.file" @change="onFileSelect" />
    <div id="dropzone" :class="$style.dropzone">
      <p v-if="fileName">{{ fileName }}</p>
      <template v-else>
        <icon-plus />
        <p>Загрузить файл</p>
        <p :class="$style.dropzoneTip">
          <span :class="$style.dropzoneLink">Выберите файл</span>
          или перетащите его сюда
        </p>
      </template>
    </div>
  </div>
</template>

<script setup>
  import IconPlus from '@/components/icons/IconPlus.vue';

  defineProps({
    modelValue: Object,
  });

  const emit = defineEmits(['on-file-select']);

  const fileName = ref('');

  const onFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      fileName.value = file.name;
      emit('on-file-select', file);
    }
  };
</script>

<style lang="scss" module>
  .dropzoneWrapper {
    position: relative;
    width: 100%;
    height: 156px;
    margin-top: var(--spacing-50);
  }

  .file {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    z-index: var(--z-index-file-input);
  }

  .dropzone {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-10);
    z-index: var(--z-index-dropzone);
    border-radius: var(--border-radius-10);
    background-color: var(--bg-color-primary);
    border: 1px solid rgba(185, 194, 201, 1);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

  .dropzoneTip {
    color: var(--stroke-color-ghost);
  }

  .dropzoneLink {
    text-decoration: underline;
  }
</style>
