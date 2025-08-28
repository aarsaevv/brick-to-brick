<template>
  <div :class="$style.stub">
    <img :src="iconComponent" alt="File extension" />
  </div>
</template>

<script setup>
  import IconPdf from '@/assets/images/pdf.svg';
  import IconJpg from '@/assets/images/jpg.svg';
  import IconDoc from '@/assets/images/doc.svg';
  import IconXls from '@/assets/images/xls.svg';

  const { fileExtension } = defineProps({
    fileExtension: String,
  });

  const iconMap = {
    pdf: IconPdf,
    jpg: IconJpg,
    doc: IconDoc,
    xls: IconXls,
  };

  const iconComponent = computed(() => iconMap[fileExtension]);
</script>

<style lang="scss" module>
  .stub {
    box-sizing: border-box;
    width: 117px;
    height: 117px;
    border-radius: var(--border-radius-10);
    background-color: var(--bg-color-primary);
    display: flex;
    padding: var(--spacing-30);
  }
</style>
