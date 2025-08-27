<template>
  <nav>
    <ul :class="$style.sidebar">
      <router-link to="/" :class="$style.logo">
        <icon-logo :class="$style.logoIcon" />
      </router-link>
      <li v-for="link in sidebarRouteLinks">
        <router-link :to="link.path" :class="$style.link">
          <component :is="link.icon" />
          <p>{{ link.title }}</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import IconLogo from '@/components/icons/IconLogo.vue';
  import { sidebarRouteLinks } from '@/code/router.js';
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: var(--sidebar-width);
    height: 100vh;
    background-color: var(--background-color-accent-primary);
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .logo {
    margin: var(--spacing-16) 0 var(--spacing-32) 0;
  }

  .logoIcon {
    min-width: 100%;
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-10);
    color: var(--text-color-light);
    padding: var(--spacing-20) 0;

    &:hover {
      background-color: rgba(86, 150, 255, 1);
    }

    @include fonts.Paragraph-1();
  }
</style>
