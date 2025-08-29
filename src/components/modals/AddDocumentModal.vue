<template>
  <app-modal title="Добавить документ" has-close-button>
    <div :class="$style.contentWrapper">
      <app-radio name="Тип документа:" :options="availableTypes" />
      <div :class="$style.info">
        <app-input placeholder="Название документа" />
        <app-input placeholder="Номер" />
      </div>
      <div :class="$style.calendar">
        <app-date label="Действует с:" />
        <app-date label="по:" />
      </div>
      <div :class="$style.checkbox">
        <app-checkbox label="Оповещать об окончании" />
        <app-checkbox label="Создавать задачу при окончании" />
      </div>
      <app-dropzone />
      <div :class="$style.buttons">
        <app-button title="Добавить документ" @click="onAdd" />
        <app-button variation="secondary" title="Отмена" @click="onCancel" />
      </div>
    </div>
  </app-modal>
</template>

<script setup>
  import AppModal from '@/components/ui/AppModal.vue';
  import AppButton from '@/components/ui/AppButton.vue';
  import AppCheckbox from '@/components/ui/AppCheckbox.vue';
  import AppDropzone from '@/components/ui/AppDropzone.vue';
  import AppRadio from '@/components/ui/AppRadio.vue';
  import useModal from '@/code/composables/use-modal.js';
  import AppInput from '@/components/ui/AppInput.vue';
  import AppDate from '@/components/ui/AppDate.vue';

  const { resetCurrentModalName } = useModal();

  const availableTypes = [
    { value: 'contract', label: 'Договор' },
    { value: 'inquiry', label: 'Справка' },
    { value: 'other', label: 'Другое' },
  ];

  const onAdd = () => {
    alert('Added!');
    resetCurrentModalName();
  };

  const onCancel = () => {
    resetCurrentModalName();
  };
</script>

<style lang="scss" module>
  .contentWrapper {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-50);
    margin-top: var(--spacing-50);
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-50);
  }

  .calendar {
    display: flex;
    align-items: center;
    gap: var(--spacing-40);
  }

  .checkbox {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-20);
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: var(--spacing-28);
  }
</style>
