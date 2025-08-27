<template>
  <app-header :class="$style.header" />
  <app-sidebar :classs="$style.sidebar" />
  <router-view />
</template>

<script setup>
  import AppHeader from '@/components/AppHeader.vue';
  import AppSidebar from '@/components/AppSidebar.vue';
</script>

<style lang="scss" module>
  :root {
    // colors
    --background-color-primary: rgba(242, 245, 248, 1);
    --background-color-light: rgba(255, 255, 255, 1);
    --background-color-accent-primary: rgba(69, 138, 251, 1);
    --background-color-accent-secondary: rgba(255, 189, 39, 1);
    //
    --text-color-dark: rgba(13, 40, 57, 1);
    --text-color-ghost: rgba(134, 147, 156, 1);
    --text-color-light: rgba(255, 255, 255, 1);
    --text-color-accent: rgba(69, 138, 251, 1);
    //
    --status-color-positive: rgba(158, 203, 69, 1);
    --status-color-negative: rgba(254, 104, 69, 1);
    //
    --icon-color-dark: rgba(13, 40, 57, 1);
    --icon-color-ghost: rgba(134, 147, 156, 1);
    --icon-color-light: rgba(255, 255, 255, 1);
    // spacing
    --spacing-4: 4px;
    --spacing-8: 8px;
    --spacing-10: 10px;
    --spacing-16: 16px;
    --spacing-20: 20px;
    --spacing-28: 28px;
    --spacing-32: 32px;
    --spacing-54: 54px;
    --spacing-90: 90px;
    // sidebar
    --sidebar-width: 138px;
  }

  body {
    font-family: 'Alegreya Sans', Arial, sans-serif;
    font-size: 16px;
    padding: 0;
    margin: 0;
    background-color: var(--background-color-primary);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
  }
</style>
