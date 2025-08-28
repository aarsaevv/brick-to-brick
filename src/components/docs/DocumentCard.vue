<template>
  <div :class="$style.card">
    <div>
      <h2 :class="$style.cardTitle">{{ document.title }}</h2>
      <p :class="$style.status">
        <span
          :class="{
            [$style.statusIcon]: true,
            [$style.concluded]: document.status === 'concluded',
            [$style.rejected]: document.status === 'rejected',
          }"
        />{{ statusTitle }}
      </p>
      <p :class="$style.date">{{ dateStart }} - {{ dateEnd }}</p>
      <div :class="$style.actions">
        <app-slot-button>
          <icon-print />
        </app-slot-button>
        <app-slot-button>
          <icon-edit />
        </app-slot-button>
        <app-slot-button @click="$emit('delete', document.id)">
          <icon-delete />
        </app-slot-button>
      </div>
    </div>
    <file-extension-stub :file-extension="document.fileExtension" />
  </div>
</template>

<script setup>
  import IconPrint from '@/components/icons/IconPrint.vue';
  import IconEdit from '@/components/icons/IconEdit.vue';
  import IconDelete from '@/components/icons/IconDelete.vue';
  import AppSlotButton from '@/components/ui/AppSlotButton.vue';
  import { formatTimestampToDate } from '@/code/date.js';
  import FileExtensionStub from '@/components/docs/FileExtensionStub.vue';

  const { document } = defineProps({
    document: Object,
  });

  const statusTitle = computed(() => {
    if (document.status === 'concluded') {
      return 'Заключён';
    } else if (document.status === 'rejected') {
      return 'Расторгнут';
    }

    return '';
  });

  const dateStart = computed(() => formatTimestampToDate(document.dateStart));
  const dateEnd = computed(() => formatTimestampToDate(document.dateEnd));
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .card {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 360px;
    height: 100%;
    padding: var(--spacing-20);
    border-radius: var(--border-radius-10);
    background-color: var(--bg-color-light);
  }

  .cardTitle {
    @include fonts.Heading-2();
  }

  .status {
    display: flex;
    align-items: center;
    gap: var(--spacing-10);
    min-height: 22px;
  }

  .statusIcon {
    display: block;
    width: 9px;
    height: 9px;
    border-radius: var(--border-radius-2);
  }

  .concluded {
    background-color: var(--status-color-positive);
  }

  .rejected {
    background-color: var(--status-color-negative);
  }

  .date {
    color: var(--text-color-ghost);
  }

  .actions {
    margin-top: var(--spacing-18);
    display: flex;
    align-items: center;
    gap: var(--spacing-30);
  }
</style>
