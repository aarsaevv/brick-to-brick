<template>
  <div :class="$style.buttons">
    <app-slot-button>
      <icon-settings />
    </app-slot-button>
    <app-slot-button>
      <icon-logout />
    </app-slot-button>
  </div>
</template>

<script setup>
  import AppSlotButton from '@/components/ui/AppSlotButton.vue';
  import IconLogout from '@/components/icons/IconLogout.vue';
  import IconSettings from '@/components/icons/IconSettings.vue';
</script>

<style lang="scss" module>
  .buttons {
    display: flex;
    align-items: center;
    gap: var(--spacing-32);
  }
</style>
