<template>
  <div>
    <div :class="$style.tint" />
    <div :class="$style.modal">
      <div :class="$style.modalHeader">
        <p :class="$style.modalTitle">
          {{ title }}
        </p>
        <app-slot-button v-if="hasCloseButton" @click="onCloseModal">
          <icon-close />
        </app-slot-button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
  import AppSlotButton from '@/components/ui/AppSlotButton.vue';
  import IconClose from '@/components/icons/IconClose.vue';
  import useModal from '@/code/composables/use-modal.js';

  defineProps({
    title: String,
    hasCloseButton: Boolean,
  });

  const { resetCurrentModalName } = useModal();

  const onCloseModal = () => {
    resetCurrentModalName();
  };
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .tint {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color-tint);
    z-index: var(--z-index-app-modal-tint);
  }

  .modal {
    position: fixed;
    top: var(--spacing-48);
    left: 50%;
    min-width: 650px;
    height: calc(100% - 96px);
    transform: translateX(-50%);
    background-color: var(--bg-color-light);
    padding: var(--spacing-30);
    border-radius: var(--border-radius-10);
    z-index: var(--z-index-app-modal);
    overflow-y: scroll;
  }

  .modalHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modalTitle {
    color: var(--text-color-accent);

    @include fonts.Heading-1();
  }
</style>
