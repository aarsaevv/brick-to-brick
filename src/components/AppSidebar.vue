<template>
  <aside>
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
  </aside>
</template>

<script setup>
  import IconLogo from '@/components/icons/IconLogo.vue';
  import { sidebarRouteLinks } from '@/code/router.js';
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .sidebar {
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
    transition: background-color 200ms ease;

    &:hover {
      background-color: var(--bg-color-accent-primary-hover);
    }
  }
</style>
