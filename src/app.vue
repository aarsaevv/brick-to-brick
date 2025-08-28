<template>
  <section>
    <app-sidebar :class="$style.sidebar" />
    <div :class="$style.main">
      <app-header />
      <router-view />
    </div>
    <teleport to="body">
      <transition name="fade">
        <component v-if="isModalOpened" :is="currentModalComponent" />
      </transition>
    </teleport>
  </section>
</template>

<script setup>
  import AppHeader from '@/components/AppHeader.vue';
  import AppSidebar from '@/components/AppSidebar.vue';
  import useModal from '@/code/use-modal.js';

  const { isModalOpened, currentModalComponent } = useModal();
</script>

<style lang="scss" module>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--sidebar-width);
    height: 100vh;
    background-color: var(--bg-color-accent-primary);
    text-align: center;
  }

  .main {
    position: absolute;
    left: var(--sidebar-width);
    width: -webkit-fill-available;
  }
</style>
